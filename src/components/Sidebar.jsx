import { useState } from 'react';
import { useStore } from '../lib/store';
import {
    Plus,
    Folder,
    FolderOpen,
    Search,
    ChevronLeft,
    Cpu,
    Settings,
    MoreVertical,
    Trash2,
    LogOut,
    Lightbulb
} from 'lucide-react';

function Sidebar({ onCreateProject }) {
    const {
        projects,
        folders,
        currentProject,
        toggleSidebar,
        selectProject,
        createFolder,
        deleteFolder,
        logout,
        user,
        currentView,
        setCurrentView
    } = useStore();

    const [search, setSearch] = useState('');
    const [expandedFolders, setExpandedFolders] = useState({});

    const toggleFolder = (folderId) => {
        setExpandedFolders(prev => ({
            ...prev,
            [folderId]: !prev[folderId]
        }));
    };

    const handleCreateFolder = async () => {
        const name = prompt('Folder Name:');
        if (name) {
            await createFolder(name);
        }
    };

    const handleDeleteFolder = async (e, id) => {
        e.stopPropagation();
        if (confirm('Delete this folder? Projects inside will be moved to root.')) {
            await deleteFolder(id);
        }
    };

    const filteredProjects = projects.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    const getProjectsInFolder = (folderId) => {
        return filteredProjects.filter(p => p.folderId === folderId);
    };

    const rootProjects = filteredProjects.filter(p => !p.folderId);

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <button
                    className="logo"
                    onClick={() => { selectProject(null); setCurrentView('projects'); }}
                    title="Go to home"
                >
                    <Cpu className="logo-icon" />
                    <span className="logo-text">NiroVault</span>
                </button>
                <button className="btn btn-icon btn-ghost" onClick={toggleSidebar}>
                    <ChevronLeft />
                </button>
            </div>

            <div className="sidebar-content">
                <div className="sidebar-user">
                    <div className="user-avatar">
                        {user?.photoURL ? (
                            <img src={user.photoURL} alt={user.displayName} />
                        ) : (
                            <div className="avatar-placeholder">
                                {user?.email?.[0].toUpperCase()}
                            </div>
                        )}
                    </div>
                    <div className="user-info">
                        <span className="user-name truncate">{user?.displayName || 'User'}</span>
                        <span className="user-email truncate">{user?.email}</span>
                    </div>
                </div>

                <div className="sidebar-search">
                    <Search size={16} />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        className="input"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="sidebar-actions">
                    <button className="btn btn-sm btn-ghost" onClick={handleCreateFolder}>
                        <Folder size={14} />
                        New Folder
                    </button>
                </div>

                <nav className="sidebar-nav">
                    {/* Folders */}
                    {folders.map(folder => {
                        const folderProjects = getProjectsInFolder(folder.id);
                        const isExpanded = expandedFolders[folder.id];

                        if (search && folderProjects.length === 0) return null;

                        return (
                            <div key={folder.id} className="nav-section">
                                <div
                                    className="nav-section-header"
                                    onClick={() => toggleFolder(folder.id)}
                                >
                                    <div className="folder-label">
                                        {isExpanded ? <FolderOpen size={14} /> : <Folder size={14} />}
                                        <span className="truncate">{folder.name}</span>
                                        <span className="badge badge-sm">{folderProjects.length}</span>
                                    </div>
                                    <button
                                        className="btn btn-icon btn-ghost btn-xs folder-menu"
                                        onClick={(e) => handleDeleteFolder(e, folder.id)}
                                    >
                                        <Trash2 size={12} />
                                    </button>
                                </div>

                                {isExpanded && (
                                    <ul className="nav-list">
                                        {folderProjects.map(project => (
                                            <li key={project.id}>
                                                <button
                                                    className={`nav-item ${currentProject?.id === project.id ? 'active' : ''}`}
                                                    onClick={() => { selectProject(project.id); setCurrentView('projects'); }}
                                                >
                                                    <span className="truncate">{project.name}</span>
                                                </button>
                                            </li>
                                        ))}
                                        {folderProjects.length === 0 && (
                                            <li className="nav-empty">Empty folder</li>
                                        )}
                                    </ul>
                                )}
                            </div>
                        );
                    })}

                    {/* Root Projects */}
                    <div className="nav-section">
                        <div className="nav-section-header-static">
                            <span className="nav-section-title">Root Projects</span>
                            {onCreateProject && (
                                <button
                                    className="btn btn-icon btn-ghost btn-xs"
                                    onClick={onCreateProject}
                                    title="New Project"
                                >
                                    <Plus size={14} />
                                </button>
                            )}
                        </div>
                        <ul className="nav-list">
                            {rootProjects.map(project => (
                                <li key={project.id}>
                                    <button
                                        className={`nav-item ${currentProject?.id === project.id ? 'active' : ''}`}
                                        onClick={() => { selectProject(project.id); setCurrentView('projects'); }}
                                    >
                                        <span className="truncate">{project.name}</span>
                                    </button>
                                </li>
                            ))}
                            {rootProjects.length === 0 && folders.length === 0 && (
                                <li className="nav-empty">No projects found</li>
                            )}
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="sidebar-footer">
                <button
                    className={`btn btn-ghost nav-item ${currentView === 'inspiration' ? 'active' : ''}`}
                    onClick={() => {
                        selectProject(null);
                        setCurrentView('inspiration');
                    }}
                >
                    <Lightbulb size={16} />
                    <span>Inspiration</span>
                </button>
                <button className="btn btn-ghost nav-item" onClick={logout}>
                    <LogOut size={16} />
                    <span>Sign Out</span>
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;
