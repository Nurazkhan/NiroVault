import {
    clearUserRecords,
    createRecord,
    deleteRecord,
    getRecord,
    getUserId,
    listRecords,
    updateRecord
} from './_records.js';

async function readBody(req) {
    if (req.body && typeof req.body === 'object') return req.body;

    const chunks = [];
    for await (const chunk of req) {
        chunks.push(chunk);
    }

    const raw = Buffer.concat(chunks).toString('utf8');
    return raw ? JSON.parse(raw) : {};
}

async function exportAll(userId) {
    const folders = await listRecords({ userId, type: 'folder', orderBy: 'name', direction: 'asc' });
    const projects = await listRecords({ userId, type: 'project', orderBy: 'updatedAt', direction: 'desc' });
    const inspirations = await listRecords({ userId, type: 'inspiration', orderBy: 'createdAt', direction: 'desc' });
    const globalTasks = await listRecords({ userId, type: 'globalTask', orderBy: 'createdAt', direction: 'desc' });
    const globalNotes = await listRecords({ userId, type: 'globalNote', orderBy: 'createdAt', direction: 'desc' });

    const projectsWithChildren = [];
    for (const project of projects) {
        const versions = await listRecords({
            userId,
            type: 'version',
            parentProjectId: project.id,
            orderBy: 'createdAt',
            direction: 'desc'
        });

        const versionsWithResources = [];
        for (const version of versions) {
            const resources = await listRecords({
                userId,
                type: 'resource',
                parentProjectId: project.id,
                parentVersionId: version.id,
                orderBy: 'createdAt',
                direction: 'desc'
            });

            versionsWithResources.push({
                _id: version.id,
                ...version,
                resources: resources.map(({ id, ...resource }) => ({ _id: id, ...resource }))
            });
        }

        projectsWithChildren.push({
            _id: project.id,
            ...project,
            versions: versionsWithResources
        });
    }

    return {
        _exportVersion: '1.0',
        _exportDate: new Date().toISOString(),
        _exportedBy: 'NiroVault Vercel',
        folders: folders.map(({ id, ...folder }) => ({ _id: id, ...folder })),
        projects: projectsWithChildren,
        inspirations: inspirations.map(({ id, ...inspiration }) => ({ _id: id, ...inspiration })),
        globalTasks: globalTasks.map(({ id, ...task }) => ({ _id: id, ...task })),
        globalNotes: globalNotes.map(({ id, ...note }) => ({ _id: id, ...note }))
    };
}

async function importAll(userId, data) {
    const folderIdMap = {};
    const projectIdMap = {};
    const versionIdMaps = {};

    for (const folder of data.folders || []) {
        const created = await createRecord({
            userId,
            type: 'folder',
            data: {
                name: folder.name,
                createdAt: folder.createdAt || undefined
            }
        });
        folderIdMap[folder._id] = created.id;
    }

    for (const project of data.projects || []) {
        const createdProject = await createRecord({
            userId,
            type: 'project',
            data: {
                name: project.name,
                description: project.description || '',
                thumbnailUrl: project.thumbnailUrl || null,
                folderId: folderIdMap[project.folderId] || project.folderId || null,
                tags: project.tags || [],
                currentVersionId: null,
                createdAt: project.createdAt || undefined,
                updatedAt: project.updatedAt || undefined
            }
        });

        projectIdMap[project._id] = createdProject.id;
        versionIdMaps[project._id] = {};

        for (const version of project.versions || []) {
            const createdVersion = await createRecord({
                userId,
                type: 'version',
                parentProjectId: createdProject.id,
                data: {
                    name: version.name,
                    description: version.description || '',
                    parentVersionId: null,
                    todos: version.todos || [],
                    errors: version.errors || [],
                    createdAt: version.createdAt || undefined
                }
            });

            versionIdMaps[project._id][version._id] = createdVersion.id;

            for (const resource of version.resources || []) {
                await createRecord({
                    userId,
                    type: 'resource',
                    parentProjectId: createdProject.id,
                    parentVersionId: createdVersion.id,
                    data: {
                        name: resource.name,
                        type: resource.type,
                        url: resource.url || null,
                        metadata: resource.metadata || {},
                        createdAt: resource.createdAt || undefined
                    }
                });
            }
        }

        for (const version of project.versions || []) {
            const newVersionId = versionIdMaps[project._id][version._id];
            const newParentId = versionIdMaps[project._id][version.parentVersionId];
            if (newVersionId && newParentId) {
                await updateRecord({
                    userId,
                    type: 'version',
                    id: newVersionId,
                    data: { parentVersionId: newParentId }
                });
            }
        }

        const newCurrentVersionId = versionIdMaps[project._id][project.currentVersionId] || null;
        if (newCurrentVersionId) {
            await updateRecord({
                userId,
                type: 'project',
                id: createdProject.id,
                data: { currentVersionId: newCurrentVersionId }
            });
        }
    }

    for (const inspiration of data.inspirations || []) {
        await createRecord({
            userId,
            type: 'inspiration',
            data: {
                title: inspiration.title || '',
                description: inspiration.description || '',
                tags: inspiration.tags || [],
                imageUrl: inspiration.imageUrl || null,
                url: inspiration.url || '',
                createdAt: inspiration.createdAt || undefined,
                updatedAt: inspiration.updatedAt || undefined
            }
        });
    }

    for (const task of data.globalTasks || []) {
        await createRecord({
            userId,
            type: 'globalTask',
            data: {
                text: task.text,
                completed: task.completed || false,
                createdAt: task.createdAt || undefined
            }
        });
    }

    for (const note of data.globalNotes || []) {
        await createRecord({
            userId,
            type: 'globalNote',
            data: {
                content: note.content,
                createdAt: note.createdAt || undefined
            }
        });
    }
}

async function aggregateTasksAndNotes(userId) {
    const projects = await listRecords({ userId, type: 'project', orderBy: 'updatedAt', direction: 'desc' });
    const results = [];

    for (const project of projects) {
        if (!project.currentVersionId) continue;

        const version = await getRecord({ userId, type: 'version', id: project.currentVersionId });
        if (!version) continue;

        const resources = await listRecords({
            userId,
            type: 'resource',
            parentProjectId: project.id,
            parentVersionId: project.currentVersionId,
            orderBy: 'createdAt',
            direction: 'desc'
        });

        results.push({
            projectId: project.id,
            projectName: project.name,
            versionId: project.currentVersionId,
            todos: version.todos || [],
            notes: resources.filter((resource) => resource.type === 'note')
        });
    }

    return results;
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        const userId = getUserId(req);
        const body = await readBody(req);

        switch (body.action) {
            case 'list':
                res.status(200).json({
                    items: await listRecords({
                        userId,
                        type: body.type,
                        parentProjectId: body.parentProjectId ?? null,
                        parentVersionId: body.parentVersionId ?? null,
                        orderBy: body.orderBy || 'createdAt',
                        direction: body.direction || 'desc'
                    })
                });
                return;
            case 'get':
                res.status(200).json({ item: await getRecord({ userId, type: body.type, id: body.id }) });
                return;
            case 'create':
                res.status(200).json({
                    item: await createRecord({
                        userId,
                        type: body.type,
                        parentProjectId: body.parentProjectId ?? null,
                        parentVersionId: body.parentVersionId ?? null,
                        data: body.data || {}
                    })
                });
                return;
            case 'update':
                res.status(200).json({
                    item: await updateRecord({ userId, type: body.type, id: body.id, data: body.data || {} })
                });
                return;
            case 'delete':
                await deleteRecord({ userId, type: body.type, id: body.id, cascade: Boolean(body.cascade) });
                res.status(200).json({ ok: true });
                return;
            case 'export':
                res.status(200).json({ data: await exportAll(userId) });
                return;
            case 'import':
                if (body.replaceExisting) {
                    await clearUserRecords(userId);
                }
                await importAll(userId, body.data || {});
                res.status(200).json({ ok: true });
                return;
            case 'aggregateTasksAndNotes':
                res.status(200).json({ items: await aggregateTasksAndNotes(userId) });
                return;
            default:
                res.status(400).json({ error: 'Unknown action' });
        }
    } catch (error) {
        console.error(error);
        res.status(error.statusCode || 500).json({ error: error.message || 'Unexpected server error' });
    }
}
