import { create } from 'zustand';
import { projectOps, versionOps, resourceOps, folderOps, inspirationOps, globalTaskOps, globalNoteOps } from './db';

const PROFILE_KEY = 'nirovault.profile';

function getStoredProfile() {
    const saved = localStorage.getItem(PROFILE_KEY);
    if (saved) return JSON.parse(saved);

    return null;
}

function createProfile() {
    return {
        uid: 'vercel-default',
        email: import.meta.env.VITE_NIROVAULT_USER_EMAIL || 'vercel@nirovault.local',
        displayName: import.meta.env.VITE_NIROVAULT_USER_NAME || 'NiroVault User',
        photoURL: null
    };
}

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
    view: 'list',
    currentView: 'projects',
    sidebarOpen: true,
    isLoading: false,
    inspirations: [],
    globalTasks: [],
    globalNotes: [],

    // Auth Actions
    initAuth: () => {
        const user = getStoredProfile();
        set({ user, authLoading: false });
        if (user) {
            Promise.all([
                get().loadProjects(),
                get().loadFolders(),
                get().loadInspirations(),
                get().loadGlobalTasks(),
                get().loadGlobalNotes()
            ]).catch((error) => console.error('Initial data load failed:', error));
        }
        return () => {};
    },

    login: async () => {
        const profile = createProfile();
        localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
        set({ user: profile });
        await Promise.all([
            get().loadProjects(),
            get().loadFolders(),
            get().loadInspirations(),
            get().loadGlobalTasks(),
            get().loadGlobalNotes()
        ]);
    },

    logout: async () => {
        localStorage.removeItem(PROFILE_KEY);
        set({
            user: null,
            projects: [],
            folders: [],
            currentProject: null,
            currentVersion: null,
            versions: [],
            resources: [],
            inspirations: [],
            globalTasks: [],
            globalNotes: []
        });
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
                const version = versions.find((item) => item.id === project.currentVersionId);
                if (version) {
                    currentVersion = version;
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
        const version = get().versions.find((item) => item.id === id) || await versionOps.getById(projectId, id);
        const resources = await resourceOps.getByVersion(projectId, id);

        if (get().currentProject) {
            await projectOps.update(projectId, { currentVersionId: id });
        }

        set({ currentVersion: version, resources });
    },

    updateVersion: async (id, data) => {
        const projectId = get().currentProject.id;
        await versionOps.update(projectId, id, data);

        const versions = await versionOps.getByProject(projectId);
        const version = versions.find((item) => item.id === id);
        set({
            versions,
            ...(get().currentVersion?.id === id ? { currentVersion: version } : {})
        });
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
    },

    // Global Task actions
    loadGlobalTasks: async () => {
        if (!get().user) return;
        try {
            const globalTasks = await globalTaskOps.getAll();
            set({ globalTasks });
        } catch (error) {
            console.error('Failed to load global tasks:', error);
        }
    },

    addGlobalTask: async (text) => {
        await globalTaskOps.create({ text });
        await get().loadGlobalTasks();
    },

    toggleGlobalTask: async (id, completed) => {
        await globalTaskOps.update(id, { completed: !completed });
        await get().loadGlobalTasks();
    },

    deleteGlobalTask: async (id) => {
        await globalTaskOps.delete(id);
        await get().loadGlobalTasks();
    },

    // Global Note actions
    loadGlobalNotes: async () => {
        if (!get().user) return;
        try {
            const globalNotes = await globalNoteOps.getAll();
            set({ globalNotes });
        } catch (error) {
            console.error('Failed to load global notes:', error);
        }
    },

    addGlobalNote: async (data) => {
        const payload = typeof data === 'string' ? { content: data } : data;
        await globalNoteOps.create(payload);
        await get().loadGlobalNotes();
    },

    updateGlobalNote: async (id, data) => {
        const payload = typeof data === 'string' ? { content: data } : data;
        await globalNoteOps.update(id, payload);
        await get().loadGlobalNotes();
    },

    deleteGlobalNote: async (id) => {
        await globalNoteOps.delete(id);
        await get().loadGlobalNotes();
    }
}));
