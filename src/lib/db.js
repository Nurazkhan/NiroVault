import { apiRequest } from './apiClient';
import { createBlobPath, uploadFile } from './blob';

function asDate(value) {
    return value ? new Date(value) : new Date();
}

function withDates(item, fields = ['createdAt', 'updatedAt']) {
    if (!item) return item;
    const copy = { ...item };
    for (const field of fields) {
        if (copy[field]) copy[field] = asDate(copy[field]);
    }
    return copy;
}

async function list(type, options = {}) {
    const { items } = await apiRequest({ action: 'list', type, ...options });
    return items;
}

async function get(type, id) {
    const { item } = await apiRequest({ action: 'get', type, id });
    if (!item) throw new Error('Record not found');
    return item;
}

async function create(type, data, options = {}) {
    const { item } = await apiRequest({ action: 'create', type, data, ...options });
    return item;
}

async function update(type, id, data) {
    const { item } = await apiRequest({ action: 'update', type, id, data });
    return item;
}

async function remove(type, id, cascade = false) {
    await apiRequest({ action: 'delete', type, id, cascade });
}

// Project operations
export const projectOps = {
    async create(data) {
        const projectData = {
            name: data.name,
            description: data.description || '',
            thumbnailUrl: null,
            folderId: data.folderId || null,
            tags: data.tags || [],
            currentVersionId: null
        };

        const project = await create('project', projectData);

        if (data.thumbnail instanceof File) {
            const pathname = createBlobPath('thumbnails', project.id, data.thumbnail.name);
            const thumbnailUrl = await uploadFile(data.thumbnail, pathname);
            await update('project', project.id, { thumbnailUrl });
        }

        const version = await create('version', {
            name: 'v1.0',
            description: 'Initial version',
            parentVersionId: null,
            todos: [],
            errors: []
        }, { parentProjectId: project.id });

        await update('project', project.id, { currentVersionId: version.id });
        return project.id;
    },

    async getAll() {
        const items = await list('project', { orderBy: 'updatedAt', direction: 'desc' });
        return items.map((item) => withDates(item));
    },

    async getById(id) {
        return withDates(await get('project', id));
    },

    async update(id, data) {
        const updateData = { ...data };

        if (data.thumbnail instanceof File) {
            const pathname = createBlobPath('thumbnails', id, data.thumbnail.name);
            updateData.thumbnailUrl = await uploadFile(data.thumbnail, pathname);
            delete updateData.thumbnail;
        }

        await update('project', id, updateData);
    },

    async delete(id) {
        await remove('project', id, true);
    }
};

// Version operations
export const versionOps = {
    async create(projectId, data) {
        const version = await create('version', {
            name: data.name,
            description: data.description || '',
            parentVersionId: data.parentVersionId || null,
            todos: data.todos || [],
            errors: data.errors || []
        }, { parentProjectId: projectId });

        if (data.parentVersionId && data.copyResources) {
            const resources = await resourceOps.getByVersion(projectId, data.parentVersionId);
            await Promise.all(resources.map((resource) => create('resource', {
                name: resource.name,
                type: resource.type,
                url: resource.url,
                metadata: resource.metadata || {}
            }, {
                parentProjectId: projectId,
                parentVersionId: version.id
            })));
        }

        return version.id;
    },

    async getByProject(projectId) {
        const items = await list('version', {
            parentProjectId: projectId,
            orderBy: 'createdAt',
            direction: 'desc'
        });
        return items.map((item) => withDates(item, ['createdAt']));
    },

    async getById(projectId, id) {
        return withDates(await get('version', id), ['createdAt']);
    },

    async update(projectId, id, data) {
        await update('version', id, data);
    },

    async delete(projectId, id) {
        await remove('version', id, true);
    }
};

// Resource operations
export const resourceOps = {
    async create(projectId, versionId, data) {
        let url = data.url || null;

        if (data.data instanceof File) {
            const pathname = createBlobPath('projects', projectId, 'versions', versionId, `${Date.now()}_${data.name}`);
            url = await uploadFile(data.data, pathname);
        }

        const resource = await create('resource', {
            name: data.name,
            type: data.type,
            url,
            metadata: data.metadata || {}
        }, {
            parentProjectId: projectId,
            parentVersionId: versionId
        });

        return resource.id;
    },

    async getByVersion(projectId, versionId) {
        const items = await list('resource', {
            parentProjectId: projectId,
            parentVersionId: versionId,
            orderBy: 'createdAt',
            direction: 'desc'
        });

        return items.map((item) => ({
            ...withDates(item, ['createdAt']),
            data: null
        }));
    },

    async update(projectId, versionId, id, data) {
        await update('resource', id, data);
    },

    async delete(projectId, versionId, id) {
        await remove('resource', id);
    }
};

// Folder operations
export const folderOps = {
    async create(name) {
        const folder = await create('folder', { name });
        return folder.id;
    },

    async getAll() {
        return list('folder', { orderBy: 'name', direction: 'asc' });
    },

    async delete(id) {
        await remove('folder', id);
    }
};

// Inspiration operations
export const inspirationOps = {
    async create(data) {
        let imageUrl = null;

        if (data.image instanceof File) {
            const pathname = createBlobPath('inspirations', `${Date.now()}_${data.image.name}`);
            imageUrl = await uploadFile(data.image, pathname);
        }

        const inspiration = await create('inspiration', {
            title: data.title || '',
            description: data.description || '',
            tags: data.tags || [],
            imageUrl,
            url: data.url || ''
        });

        return inspiration.id;
    },

    async getAll() {
        const items = await list('inspiration', { orderBy: 'createdAt', direction: 'desc' });
        return items.map((item) => withDates(item));
    },

    async update(id, data) {
        const updateData = { ...data };

        if (data.image instanceof File) {
            const pathname = createBlobPath('inspirations', `${Date.now()}_${data.image.name}`);
            updateData.imageUrl = await uploadFile(data.image, pathname);
            delete updateData.image;
        }

        await update('inspiration', id, updateData);
    },

    async delete(id) {
        await remove('inspiration', id);
    }
};

// Global task operations
export const globalTaskOps = {
    async create(data) {
        const task = await create('globalTask', {
            text: data.text,
            completed: false
        });
        return task.id;
    },

    async getAll() {
        const items = await list('globalTask', { orderBy: 'createdAt', direction: 'desc' });
        return items.map((item) => withDates(item, ['createdAt']));
    },

    async update(id, data) {
        await update('globalTask', id, data);
    },

    async delete(id) {
        await remove('globalTask', id);
    }
};

// Global note operations
export const globalNoteOps = {
    async create(data) {
        const note = await create('globalNote', {
            content: data.content
        });
        return note.id;
    },

    async getAll() {
        const items = await list('globalNote', { orderBy: 'createdAt', direction: 'desc' });
        return items.map((item) => withDates(item, ['createdAt']));
    },

    async update(id, data) {
        await update('globalNote', id, data);
    },

    async delete(id) {
        await remove('globalNote', id);
    }
};

export const getAllProjectTasksAndNotes = async () => {
    const { items } = await apiRequest({ action: 'aggregateTasksAndNotes' });
    return items.map((entry) => ({
        ...entry,
        notes: (entry.notes || []).map((note) => withDates(note, ['createdAt']))
    }));
};
