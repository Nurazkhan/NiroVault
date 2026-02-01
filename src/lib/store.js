import { create } from 'zustand';
import { projectOps, versionOps, resourceOps } from './db';

export const useStore = create((set, get) => ({
    // State
    projects: [],
    currentProject: null,
    currentVersion: null,
    versions: [],
    resources: [],
    view: 'list', // 'list' | 'grid'
    sidebarOpen: true,
    isLoading: false,

    // View actions
    setView: (view) => set({ view }),
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
    setLoading: (isLoading) => set({ isLoading }),

    // Project actions
    loadProjects: async () => {
        set({ isLoading: true });
        const projects = await projectOps.getAll();
        set({ projects, isLoading: false });
    },

    createProject: async (data) => {
        const id = await projectOps.create(data);
        await get().loadProjects();
        return id;
    },

    selectProject: async (id) => {
        if (!id) {
            set({ currentProject: null, currentVersion: null, versions: [], resources: [] });
            return;
        }

        set({ isLoading: true });
        const project = await projectOps.getById(id);
        const versions = await versionOps.getByProject(id);

        let currentVersion = null;
        let resources = [];

        if (project.currentVersionId) {
            currentVersion = await versionOps.getById(project.currentVersionId);
            resources = await resourceOps.getByVersion(project.currentVersionId);
        }

        set({
            currentProject: project,
            currentVersion,
            versions,
            resources,
            isLoading: false
        });
    },

    updateProject: async (id, data) => {
        await projectOps.update(id, data);
        await get().loadProjects();
        if (get().currentProject?.id === id) {
            const project = await projectOps.getById(id);
            set({ currentProject: project });
        }
    },

    deleteProject: async (id) => {
        await projectOps.delete(id);
        await get().loadProjects();
        if (get().currentProject?.id === id) {
            set({ currentProject: null, currentVersion: null, versions: [], resources: [] });
        }
    },

    // Version actions
    createVersion: async (projectId, data) => {
        const id = await versionOps.create(projectId, data);
        const versions = await versionOps.getByProject(projectId);

        // Update project's current version to the new version
        await projectOps.update(projectId, { currentVersionId: id });

        // Refresh current project
        const project = await projectOps.getById(projectId);
        set({ versions, currentProject: project });

        return id;
    },

    selectVersion: async (id) => {
        const version = await versionOps.getById(id);
        const resources = await resourceOps.getByVersion(id);

        // Update project's current version
        if (get().currentProject) {
            await projectOps.update(get().currentProject.id, { currentVersionId: id });
        }

        set({ currentVersion: version, resources });
    },

    updateVersion: async (id, data) => {
        await versionOps.update(id, data);
        if (get().currentVersion?.id === id) {
            const version = await versionOps.getById(id);
            set({ currentVersion: version });
        }
        const versions = await versionOps.getByProject(get().currentProject?.id);
        set({ versions });
    },

    deleteVersion: async (id) => {
        await versionOps.delete(id);
        const versions = await versionOps.getByProject(get().currentProject?.id);
        set({ versions });
        if (get().currentVersion?.id === id) {
            set({ currentVersion: versions[0] || null, resources: [] });
        }
    },

    // Resource actions
    addResource: async (versionId, data) => {
        const id = await resourceOps.create(versionId, data);
        const resources = await resourceOps.getByVersion(versionId);
        set({ resources });
        return id;
    },

    updateResource: async (id, data) => {
        await resourceOps.update(id, data);
        if (get().currentVersion) {
            const resources = await resourceOps.getByVersion(get().currentVersion.id);
            set({ resources });
        }
    },

    deleteResource: async (id) => {
        await resourceOps.delete(id);
        if (get().currentVersion) {
            const resources = await resourceOps.getByVersion(get().currentVersion.id);
            set({ resources });
        }
    }
}));

export default useStore;
