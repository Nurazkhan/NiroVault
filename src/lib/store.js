import { create } from 'zustand';
import { projectOps, versionOps, resourceOps, folderOps, inspirationOps } from './db';
import { auth } from './firebase';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

export const useStore = create((set, get) => ({
    // Auth State
    user: null,
    authLoading: true,

    // App State
    projects: [],
    folders: [],
    currentProject: null,
    currentVersion: null,
    versions: [],
    resources: [],
    view: 'list', // 'list' | 'grid'
    currentView: 'projects', // 'projects' | 'inspiration'
    sidebarOpen: true,
    isLoading: false,
    inspirations: [],

    // Auth Actions
    initAuth: () => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            set({ user, authLoading: false });
            if (user) {
                await get().loadProjects();
                await get().loadFolders();
                await get().loadInspirations();
            } else {
                set({ projects: [], folders: [], currentProject: null, inspirations: [] });
            }
        });
        return unsubscribe;
    },

    login: async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    },

    logout: async () => {
        await signOut(auth);
        set({ user: null, projects: [], folders: [] });
    },

    // View actions
    setView: (view) => set({ view }),
    setCurrentView: (currentView) => set({ currentView }),
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
    setLoading: (isLoading) => set({ isLoading }),

    // Folder Actions
    loadFolders: async () => {
        if (!get().user) return;
        const folders = await folderOps.getAll();
        set({ folders });
    },

    createFolder: async (name) => {
        await folderOps.create(name);
        await get().loadFolders();
    },

    deleteFolder: async (id) => {
        await folderOps.delete(id);
        await get().loadFolders();
    },

    // Project actions
    loadProjects: async () => {
        if (!get().user) return;
        set({ isLoading: true });
        try {
            const projects = await projectOps.getAll();
            set({ projects, isLoading: false });
        } catch (error) {
            console.error(error);
            set({ isLoading: false });
        }
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
        try {
            const project = await projectOps.getById(id);
            const versions = await versionOps.getByProject(id);

            let currentVersion = null;
            let resources = [];

            if (project.currentVersionId) {
                // Find version in the list first to save a read
                const v = versions.find(v => v.id === project.currentVersionId);
                if (v) {
                    currentVersion = v;
                    resources = await resourceOps.getByVersion(id, project.currentVersionId);
                }
            }

            set({
                currentProject: project,
                currentVersion,
                versions,
                resources,
                isLoading: false
            });
        } catch (error) {
            console.error(error);
            set({ isLoading: false });
        }
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

        await projectOps.update(projectId, { currentVersionId: id });

        const project = await projectOps.getById(projectId);
        set({ versions, currentProject: project });

        return id;
    },

    selectVersion: async (id) => {
        const projectId = get().currentProject.id;
        // Optimization: find in loaded versions
        const version = get().versions.find(v => v.id === id) || await versionOps.getById(projectId, id);
        const resources = await resourceOps.getByVersion(projectId, id);

        // Update project's current version local state and DB
        if (get().currentProject) {
            await projectOps.update(projectId, { currentVersionId: id });
        }

        set({ currentVersion: version, resources });
    },

    updateVersion: async (id, data) => {
        const projectId = get().currentProject.id;
        await versionOps.update(projectId, id, data);

        if (get().currentVersion?.id === id) {
            // Refresh current version
            const versions = await versionOps.getByProject(projectId);
            const version = versions.find(v => v.id === id);
            set({ currentVersion: version, versions });
        } else {
            const versions = await versionOps.getByProject(projectId);
            set({ versions });
        }
    },

    deleteVersion: async (id) => {
        const projectId = get().currentProject.id;
        await versionOps.delete(projectId, id);
        const versions = await versionOps.getByProject(projectId);
        set({ versions });
        if (get().currentVersion?.id === id) {
            set({ currentVersion: versions[0] || null, resources: [] });
        }
    },

    // Resource actions
    addResource: async (versionId, data) => {
        const projectId = get().currentProject.id;
        await resourceOps.create(projectId, versionId, data);
        const resources = await resourceOps.getByVersion(projectId, versionId);
        set({ resources });
    },

    // Update resource metadata (not file content)
    updateResource: async (id, data) => {
        const projectId = get().currentProject.id;
        const versionId = get().currentVersion.id;
        await resourceOps.update(projectId, versionId, id, data);
        const resources = await resourceOps.getByVersion(projectId, versionId);
        set({ resources });
    },

    deleteResource: async (id) => {
        const projectId = get().currentProject.id;
        const versionId = get().currentVersion.id;
        await resourceOps.delete(projectId, versionId, id);
        const resources = await resourceOps.getByVersion(projectId, versionId);
        set({ resources });
    },

    // Inspiration actions
    loadInspirations: async () => {
        if (!get().user) return;
        try {
            const inspirations = await inspirationOps.getAll();
            set({ inspirations });
        } catch (error) {
            console.error('Failed to load inspirations:', error);
        }
    },

    addInspiration: async (data) => {
        const id = await inspirationOps.create(data);
        await get().loadInspirations();
        return id;
    },

    updateInspiration: async (id, data) => {
        await inspirationOps.update(id, data);
        await get().loadInspirations();
    },

    deleteInspiration: async (id) => {
        await inspirationOps.delete(id);
        await get().loadInspirations();
    }
}));
