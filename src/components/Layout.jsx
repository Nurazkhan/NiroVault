import { useStore } from '../lib/store';
import {
    Menu,
    Plus,
    FolderOpen,
    Settings,
    Search,
    ChevronLeft,
    Cpu,
    LayoutGrid,
    List
} from 'lucide-react';
import './styles/Layout.css';

function Layout({ children, onCreateProject }) {
    const {
        projects,
        currentProject,
        sidebarOpen,
        toggleSidebar,
        selectProject,
        view,
        setView
    } = useStore();

    return (
        <div className={`layout ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="sidebar-header">
                    <div className="logo">
                        <Cpu className="logo-icon" />
                        <span className="logo-text">NiroVault</span>
                    </div>
                    <button className="btn btn-icon btn-ghost" onClick={toggleSidebar}>
                        <ChevronLeft />
                    </button>
                </div>

                <div className="sidebar-content">
                    <button className="btn btn-primary sidebar-create" onClick={onCreateProject}>
                        <Plus size={18} />
                        <span>New Project</span>
                    </button>

                    <div className="sidebar-search">
                        <Search size={16} />
                        <input type="text" placeholder="Search projects..." className="input" />
                    </div>

                    <nav className="sidebar-nav">
                        <div className="nav-section">
                            <span className="nav-section-title">Projects</span>
                            <ul className="nav-list">
                                {projects.map(project => (
                                    <li key={project.id}>
                                        <button
                                            className={`nav-item ${currentProject?.id === project.id ? 'active' : ''}`}
                                            onClick={() => selectProject(project.id)}
                                        >
                                            <FolderOpen size={16} />
                                            <span className="truncate">{project.name}</span>
                                        </button>
                                    </li>
                                ))}
                                {projects.length === 0 && (
                                    <li className="nav-empty">No projects yet</li>
                                )}
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="sidebar-footer">
                    <button className="btn btn-ghost nav-item">
                        <Settings size={16} />
                        <span>Settings</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <header className="main-header">
                    <div className="header-left">
                        {!sidebarOpen && (
                            <button className="btn btn-icon btn-ghost" onClick={toggleSidebar}>
                                <Menu />
                            </button>
                        )}
                        <h1 className="header-title">
                            {currentProject ? currentProject.name : 'All Projects'}
                        </h1>
                    </div>

                    <div className="header-right">
                        <div className="view-toggle">
                            <button
                                className={`btn btn-icon btn-ghost ${view === 'grid' ? 'active' : ''}`}
                                onClick={() => setView('grid')}
                            >
                                <LayoutGrid size={18} />
                            </button>
                            <button
                                className={`btn btn-icon btn-ghost ${view === 'list' ? 'active' : ''}`}
                                onClick={() => setView('list')}
                            >
                                <List size={18} />
                            </button>
                        </div>
                    </div>
                </header>

                <div className="content-wrapper">
                    {children}
                </div>
            </main>
        </div>
    );
}

export default Layout;
