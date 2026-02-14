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
import Sidebar from './Sidebar';
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
            {/* Sidebar */}
            <Sidebar onCreateProject={onCreateProject} />

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
