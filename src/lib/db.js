import {
    collection,
    doc,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    serverTimestamp,
    writeBatch
} from 'firebase/firestore';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject
} from 'firebase/storage';
import { db, storage, auth } from './firebase';

// Helper to get current user ref
const getUserRef = () => {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');
    return doc(db, 'users', user.uid);
};

// Project operations
export const projectOps = {
    async create(data) {
        const userRef = getUserRef();
        const projectsRef = collection(userRef, 'projects');

        // Use batch to create project and initial version transactionally-ish
        const batch = writeBatch(db);

        const newProjectRef = doc(projectsRef);
        const projectId = newProjectRef.id;

        const projectData = {
            name: data.name,
            description: data.description || '',
            thumbnailUrl: null, // Will update if thumbnail exists
            folderId: data.folderId || null,
            tags: data.tags || [],
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            currentVersionId: null
        };

        // Handle thumbnail upload if present
        if (data.thumbnail instanceof File) {
            const storageRef = ref(storage, `users/${auth.currentUser.uid}/thumbnails/${projectId}/${data.thumbnail.name}`);
            await uploadBytes(storageRef, data.thumbnail);
            projectData.thumbnailUrl = await getDownloadURL(storageRef);
        }

        // Create initial version ref
        const versionsRef = collection(newProjectRef, 'versions');
        const newVersionRef = doc(versionsRef);
        const versionId = newVersionRef.id;

        projectData.currentVersionId = versionId;

        batch.set(newProjectRef, projectData);
        batch.set(newVersionRef, {
            name: 'v1.0',
            description: 'Initial version',
            parentVersionId: null,
            todos: [],
            errors: [],
            createdAt: serverTimestamp()
        });

        await batch.commit();
        return projectId;
    },

    async getAll() {
        const user = auth.currentUser;
        if (!user) return [];

        const userRef = doc(db, 'users', user.uid);
        const q = query(collection(userRef, 'projects'), orderBy('updatedAt', 'desc'));
        const snapshot = await getDocs(q);

        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            // Convert timestamps to Date objects for compatibility
            createdAt: doc.data().createdAt?.toDate() || new Date(),
            updatedAt: doc.data().updatedAt?.toDate() || new Date()
        }));
    },

    async getById(id) {
        const userRef = getUserRef();
        const docRef = doc(userRef, 'projects', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                id: docSnap.id,
                ...docSnap.data(),
                createdAt: docSnap.data().createdAt?.toDate(),
                updatedAt: docSnap.data().updatedAt?.toDate()
            };
        }
        throw new Error('Project not found');
    },

    async update(id, data) {
        const userRef = getUserRef();
        const docRef = doc(userRef, 'projects', id);

        const updateData = {
            ...data,
            updatedAt: serverTimestamp()
        };

        // Handle thumbnail update
        if (data.thumbnail instanceof File) {
            const storageRef = ref(storage, `users/${auth.currentUser.uid}/thumbnails/${id}/${data.thumbnail.name}`);
            await uploadBytes(storageRef, data.thumbnail);
            updateData.thumbnailUrl = await getDownloadURL(storageRef);
            delete updateData.thumbnail;
        }

        await updateDoc(docRef, updateData);
    },

    async delete(id) {
        const userRef = getUserRef();
        const projectRef = doc(userRef, 'projects', id);

        // Note: Firestore doesn't strictly support recursive delete from client easily
        // Taking a simplified approach: just delete the project doc. 
        // Subcollections (versions/resources) become orphaned in Firestore console but effectively gone for the app.
        // For production, use cloud functions for recursive delete.
        await deleteDoc(projectRef);
        // Also simpler to not delete storage files manually here due to complex paths, 
        // but typically should cleanup storage.
    }
};

// Version operations
export const versionOps = {
    async create(projectId, data) {
        const userRef = getUserRef();
        const versionsRef = collection(userRef, 'projects', projectId, 'versions');

        // Create version
        const docRef = await addDoc(versionsRef, {
            name: data.name,
            description: data.description || '',
            parentVersionId: data.parentVersionId || null,
            todos: data.todos || [],
            errors: data.errors || [],
            createdAt: serverTimestamp()
        });

        // Copy resources if requested
        if (data.parentVersionId && data.copyResources) {
            // Fetch parent resources
            const resources = await resourceOps.getByVersion(projectId, data.parentVersionId);
            const newVersionId = docRef.id;

            // Create copies (references)
            const batch = writeBatch(db);
            const newResourcesRef = collection(userRef, 'projects', projectId, 'versions', newVersionId, 'resources');

            resources.forEach(res => {
                const newResRef = doc(newResourcesRef);
                batch.set(newResRef, {
                    name: res.name,
                    type: res.type,
                    url: res.url, // Reusing the same storage URL!
                    metadata: res.metadata,
                    createdAt: serverTimestamp()
                });
            });

            await batch.commit();
        }

        return docRef.id;
    },

    async getByProject(projectId) {
        const userRef = getUserRef();
        const q = query(collection(userRef, 'projects', projectId, 'versions'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate()
        }));
    },

    async getById(projectId, id) {
        // Need projectId to find the path
        const userRef = getUserRef();
        const docRef = doc(userRef, 'projects', projectId, 'versions', id);
        const docSnap = await getDoc(docRef);
        return {
            id: docSnap.id,
            ...docSnap.data(),
            createdAt: docSnap.data().createdAt?.toDate()
        };
    },

    async update(projectId, id, data) {
        const userRef = getUserRef();
        const docRef = doc(userRef, 'projects', projectId, 'versions', id);
        await updateDoc(docRef, data);
    },

    async delete(projectId, id) {
        const userRef = getUserRef();
        const docRef = doc(userRef, 'projects', projectId, 'versions', id);
        await deleteDoc(docRef);
    }
};

// Resource operations
export const resourceOps = {
    async create(projectId, versionId, data) {
        const userRef = getUserRef();
        const resourcesRef = collection(userRef, 'projects', projectId, 'versions', versionId, 'resources');

        let url = data.url || null;

        // Upload file if present
        if (data.data instanceof File) {
            const storagePath = `users/${auth.currentUser.uid}/projects/${projectId}/versions/${versionId}/${Date.now()}_${data.name}`;
            const storageRef = ref(storage, storagePath);
            await uploadBytes(storageRef, data.data);
            url = await getDownloadURL(storageRef);
        }

        const docRef = await addDoc(resourcesRef, {
            name: data.name,
            type: data.type,
            url: url,
            metadata: data.metadata || {},
            createdAt: serverTimestamp()
        });

        return docRef.id;
    },

    async getByVersion(projectId, versionId) {
        const userRef = getUserRef();
        const resourcesRef = collection(userRef, 'projects', projectId, 'versions', versionId, 'resources');
        const q = query(resourcesRef, orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);

        // Note: We return 'data' as null because we don't download files automatically
        // The UI should use 'url' to fetch or display
        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            data: null, // Placeholder to match old API structure if needed
            createdAt: doc.data().createdAt?.toDate()
        }));
    },

    async delete(projectId, versionId, id) {
        const userRef = getUserRef();
        const docRef = doc(userRef, 'projects', projectId, 'versions', versionId, 'resources', id);

        // Optional: delete from storage
        const docSnap = await getDoc(docRef);
        if (docSnap.exists() && docSnap.data().url && !docSnap.data().url.startsWith('http')) {
            // Only try to delete if it looks like a storage Ref (logic is complex here without storing path)
            // Skipping storage deletion for now to avoid accidental deletes of shared resources
        }

        await deleteDoc(docRef);
    }
};

// Folder operations
export const folderOps = {
    async create(name) {
        const userRef = getUserRef();
        const foldersRef = collection(userRef, 'folders');
        const docRef = await addDoc(foldersRef, {
            name,
            createdAt: serverTimestamp()
        });
        return docRef.id;
    },

    async getAll() {
        const user = auth.currentUser;
        if (!user) return [];
        const userRef = doc(db, 'users', user.uid);
        const q = query(collection(userRef, 'folders'), orderBy('name'));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },

    async delete(id) {
        const userRef = getUserRef();
        await deleteDoc(doc(userRef, 'folders', id));
    }
};
