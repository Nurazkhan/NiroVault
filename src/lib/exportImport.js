import {
    collection,
    doc,
    getDocs,
    addDoc,
    updateDoc,
    writeBatch,
    query,
    orderBy,
    serverTimestamp
} from 'firebase/firestore';
import { db, auth } from './firebase';

const EXPORT_VERSION = '1.0';

/**
 * Gathers ALL user data from Firestore into a single JSON-serializable object.
 * Binary files (images, firmware, etc.) are referenced by their Firebase Storage URLs,
 * which remain valid as long as the Storage bucket exists.
 */
export async function exportAllData(onProgress) {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');

    const userRef = doc(db, 'users', user.uid);
    const report = (step, detail) => onProgress?.({ step, detail });

    // 1. Folders
    report('folders', 'Exporting folders…');
    const foldersSnap = await getDocs(query(collection(userRef, 'folders'), orderBy('name')));
    const folders = foldersSnap.docs.map(d => ({
        _id: d.id,
        ...d.data(),
        createdAt: d.data().createdAt?.toDate()?.toISOString() || null
    }));

    // 2. Projects + versions + resources (deep)
    report('projects', 'Exporting projects…');
    const projectsSnap = await getDocs(query(collection(userRef, 'projects'), orderBy('updatedAt', 'desc')));
    const projects = [];

    for (const projDoc of projectsSnap.docs) {
        const projData = projDoc.data();
        report('projects', `Exporting "${projData.name}"…`);

        // Versions for this project
        const versionsSnap = await getDocs(
            query(collection(userRef, 'projects', projDoc.id, 'versions'), orderBy('createdAt', 'desc'))
        );
        const versions = [];

        for (const verDoc of versionsSnap.docs) {
            const verData = verDoc.data();

            // Resources for this version
            const resourcesSnap = await getDocs(
                collection(userRef, 'projects', projDoc.id, 'versions', verDoc.id, 'resources')
            );
            const resources = resourcesSnap.docs.map(resDoc => {
                const resData = resDoc.data();
                return {
                    _id: resDoc.id,
                    name: resData.name,
                    type: resData.type,
                    url: resData.url,
                    metadata: resData.metadata || {},
                    createdAt: resData.createdAt?.toDate()?.toISOString() || null
                };
            });

            versions.push({
                _id: verDoc.id,
                name: verData.name,
                description: verData.description || '',
                parentVersionId: verData.parentVersionId || null,
                todos: verData.todos || [],
                errors: verData.errors || [],
                createdAt: verData.createdAt?.toDate()?.toISOString() || null,
                resources
            });
        }

        projects.push({
            _id: projDoc.id,
            name: projData.name,
            description: projData.description || '',
            thumbnailUrl: projData.thumbnailUrl || null,
            folderId: projData.folderId || null,
            tags: projData.tags || [],
            currentVersionId: projData.currentVersionId || null,
            createdAt: projData.createdAt?.toDate()?.toISOString() || null,
            updatedAt: projData.updatedAt?.toDate()?.toISOString() || null,
            versions
        });
    }

    // 3. Inspirations
    report('inspirations', 'Exporting inspirations…');
    const inspSnap = await getDocs(query(collection(userRef, 'inspirations'), orderBy('createdAt', 'desc')));
    const inspirations = inspSnap.docs.map(d => {
        const data = d.data();
        return {
            _id: d.id,
            title: data.title || '',
            description: data.description || '',
            tags: data.tags || [],
            imageUrl: data.imageUrl || null,
            url: data.url || '',
            createdAt: data.createdAt?.toDate()?.toISOString() || null,
            updatedAt: data.updatedAt?.toDate()?.toISOString() || null
        };
    });

    // 4. Global Tasks
    report('globalTasks', 'Exporting global tasks…');
    const tasksSnap = await getDocs(query(collection(userRef, 'globalTasks'), orderBy('createdAt', 'desc')));
    const globalTasks = tasksSnap.docs.map(d => {
        const data = d.data();
        return {
            _id: d.id,
            text: data.text,
            completed: data.completed || false,
            createdAt: data.createdAt?.toDate()?.toISOString() || null
        };
    });

    // 5. Global Notes
    report('globalNotes', 'Exporting global notes…');
    const notesSnap = await getDocs(query(collection(userRef, 'globalNotes'), orderBy('createdAt', 'desc')));
    const globalNotes = notesSnap.docs.map(d => {
        const data = d.data();
        return {
            _id: d.id,
            content: data.content,
            createdAt: data.createdAt?.toDate()?.toISOString() || null
        };
    });

    report('done', 'Export complete!');

    return {
        _exportVersion: EXPORT_VERSION,
        _exportDate: new Date().toISOString(),
        _exportedBy: user.email,
        folders,
        projects,
        inspirations,
        globalTasks,
        globalNotes
    };
}

/**
 * Downloads the exported data as a .nirovault.json file.
 */
export function downloadExportFile(data) {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const dateStr = new Date().toISOString().slice(0, 10);
    const filename = `NiroVault_Backup_${dateStr}.nirovault.json`;

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/**
 * Reads and validates a .nirovault.json file selected by the user.
 */
export function readImportFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const data = JSON.parse(reader.result);
                if (!data._exportVersion) {
                    reject(new Error('Invalid NiroVault backup file — missing export version.'));
                    return;
                }
                resolve(data);
            } catch (e) {
                reject(new Error('Failed to parse backup file. Make sure it\'s a valid .nirovault.json file.'));
            }
        };
        reader.onerror = () => reject(new Error('Failed to read file.'));
        reader.readAsText(file);
    });
}

/**
 * Imports data from a parsed backup object into Firestore.
 * Uses a "merge" strategy:
 *   - Creates new documents (with new IDs) for everything
 *   - Preserves Storage URLs as-is (they still work if Storage bucket is intact)
 *   - Remaps old folder IDs to new folder IDs so project→folder links survive
 *   - Remaps version parent IDs and currentVersionId
 */
export async function importAllData(data, onProgress) {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');

    const userRef = doc(db, 'users', user.uid);
    const report = (step, detail) => onProgress?.({ step, detail });

    // Track old→new ID mappings
    const folderIdMap = {};  // old folder id → new folder id
    const versionIdMap = {}; // old version id → new version id (per project)

    // 1. Import Folders
    report('folders', `Importing ${data.folders?.length || 0} folders…`);
    for (const folder of (data.folders || [])) {
        const newRef = await addDoc(collection(userRef, 'folders'), {
            name: folder.name,
            createdAt: serverTimestamp()
        });
        folderIdMap[folder._id] = newRef.id;
    }

    // 2. Import Projects (with versions & resources)
    report('projects', `Importing ${data.projects?.length || 0} projects…`);
    for (const project of (data.projects || [])) {
        report('projects', `Importing "${project.name}"…`);

        // Create project document first (without currentVersionId — we'll update after)
        const projectRef = await addDoc(collection(userRef, 'projects'), {
            name: project.name,
            description: project.description || '',
            thumbnailUrl: project.thumbnailUrl || null,
            folderId: folderIdMap[project.folderId] || project.folderId || null,
            tags: project.tags || [],
            currentVersionId: null,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        });

        const projectVersionIdMap = {};

        // Import versions
        for (const version of (project.versions || [])) {
            const versionRef = await addDoc(
                collection(userRef, 'projects', projectRef.id, 'versions'),
                {
                    name: version.name,
                    description: version.description || '',
                    parentVersionId: null, // remap later
                    todos: version.todos || [],
                    errors: version.errors || [],
                    createdAt: serverTimestamp()
                }
            );

            projectVersionIdMap[version._id] = versionRef.id;

            // Import resources for this version
            for (const resource of (version.resources || [])) {
                await addDoc(
                    collection(userRef, 'projects', projectRef.id, 'versions', versionRef.id, 'resources'),
                    {
                        name: resource.name,
                        type: resource.type,
                        url: resource.url,
                        metadata: resource.metadata || {},
                        createdAt: serverTimestamp()
                    }
                );
            }
        }

        // Remap parentVersionId for all versions
        for (const version of (project.versions || [])) {
            if (version.parentVersionId && projectVersionIdMap[version.parentVersionId]) {
                const newVersionId = projectVersionIdMap[version._id];
                const newParentId = projectVersionIdMap[version.parentVersionId];
                await updateDoc(
                    doc(userRef, 'projects', projectRef.id, 'versions', newVersionId),
                    { parentVersionId: newParentId }
                );
            }
        }

        // Set currentVersionId
        const newCurrentVersionId = projectVersionIdMap[project.currentVersionId] || null;
        if (newCurrentVersionId) {
            await updateDoc(projectRef, { currentVersionId: newCurrentVersionId });
        }
    }

    // 3. Import Inspirations
    report('inspirations', `Importing ${data.inspirations?.length || 0} inspirations…`);
    for (const insp of (data.inspirations || [])) {
        await addDoc(collection(userRef, 'inspirations'), {
            title: insp.title || '',
            description: insp.description || '',
            tags: insp.tags || [],
            imageUrl: insp.imageUrl || null,
            url: insp.url || '',
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        });
    }

    // 4. Import Global Tasks
    report('globalTasks', `Importing ${data.globalTasks?.length || 0} global tasks…`);
    for (const task of (data.globalTasks || [])) {
        await addDoc(collection(userRef, 'globalTasks'), {
            text: task.text,
            completed: task.completed || false,
            createdAt: serverTimestamp()
        });
    }

    // 5. Import Global Notes
    report('globalNotes', `Importing ${data.globalNotes?.length || 0} global notes…`);
    for (const note of (data.globalNotes || [])) {
        await addDoc(collection(userRef, 'globalNotes'), {
            content: note.content,
            createdAt: serverTimestamp()
        });
    }

    report('done', 'Import complete!');
}
