import Dexie from 'dexie';

// Create IndexedDB database
export const db = new Dexie('NiroVaultDB');

// Define schema
db.version(1).stores({
    projects: '++id, name, createdAt, updatedAt, currentVersionId',
    versions: '++id, projectId, parentVersionId, name, createdAt',
    resources: '++id, versionId, type, name, createdAt'
});

// Project operations
export const projectOps = {
    async create(data) {
        const now = new Date();
        const projectId = await db.projects.add({
            name: data.name,
            description: data.description || '',
            thumbnail: data.thumbnail || null,
            createdAt: now,
            updatedAt: now,
            currentVersionId: null
        });

        // Create initial version
        const versionId = await db.versions.add({
            projectId,
            parentVersionId: null,
            name: 'v1.0',
            description: 'Initial version',
            createdAt: now,
            todos: [],
            errors: []
        });

        // Update project with version
        await db.projects.update(projectId, { currentVersionId: versionId });

        return projectId;
    },

    async getAll() {
        return await db.projects.orderBy('updatedAt').reverse().toArray();
    },

    async getById(id) {
        return await db.projects.get(id);
    },

    async update(id, data) {
        return await db.projects.update(id, {
            ...data,
            updatedAt: new Date()
        });
    },

    async delete(id) {
        // Delete all versions and resources
        const versions = await db.versions.where('projectId').equals(id).toArray();
        for (const version of versions) {
            await db.resources.where('versionId').equals(version.id).delete();
        }
        await db.versions.where('projectId').equals(id).delete();
        await db.projects.delete(id);
    }
};

// Version operations
export const versionOps = {
    async create(projectId, data) {
        const now = new Date();
        const versionId = await db.versions.add({
            projectId,
            parentVersionId: data.parentVersionId || null,
            name: data.name,
            description: data.description || '',
            createdAt: now,
            todos: data.todos || [],
            errors: data.errors || []
        });

        // Copy resources from parent version if specified
        if (data.parentVersionId && data.copyResources) {
            const parentResources = await db.resources.where('versionId').equals(data.parentVersionId).toArray();
            for (const resource of parentResources) {
                const { id, ...resourceData } = resource;
                await db.resources.add({
                    ...resourceData,
                    versionId,
                    createdAt: now
                });
            }
        }

        return versionId;
    },

    async getByProject(projectId) {
        return await db.versions.where('projectId').equals(projectId).toArray();
    },

    async getById(id) {
        return await db.versions.get(id);
    },

    async update(id, data) {
        return await db.versions.update(id, data);
    },

    async delete(id) {
        await db.resources.where('versionId').equals(id).delete();
        await db.versions.delete(id);
    }
};

// Resource operations
export const resourceOps = {
    async create(versionId, data) {
        return await db.resources.add({
            versionId,
            type: data.type,
            name: data.name,
            data: data.data || null,
            url: data.url || null,
            metadata: data.metadata || {},
            createdAt: new Date()
        });
    },

    async getByVersion(versionId) {
        return await db.resources.where('versionId').equals(versionId).toArray();
    },

    async getById(id) {
        return await db.resources.get(id);
    },

    async update(id, data) {
        return await db.resources.update(id, data);
    },

    async delete(id) {
        return await db.resources.delete(id);
    }
};

export default db;
