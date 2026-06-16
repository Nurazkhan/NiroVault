import { useState, useEffect } from 'react';
import { useStore } from './lib/store';
import Layout from './components/Layout';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import CreateProjectModal from './components/CreateProjectModal';
import InspirationBoard from './components/InspirationBoard';
import GlobalTasksPage from './components/GlobalTasksPage';
import GlobalNotesPage from './components/GlobalNotesPage';
import AuthGuard from './components/AuthGuard';
import ExportImportModal from './components/ExportImportModal';
import './App.css';

function App() {
    const { currentProject, currentView, setCurrentView, initAuth } = useStore();
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showExportImportModal, setShowExportImportModal] = useState(false);

    useEffect(() => {
        const unsubscribe = initAuth();
        return () => unsubscribe();
    }, []);

    const handleCreateProject = () => {
        setCurrentView('projects');
        setShowCreateModal(true);
    };

    const renderContent = () => {
        if (currentView === 'inspiration') {
            return <InspirationBoard />;
        }
        if (currentView === 'tasks') {
            return <GlobalTasksPage />;
        }
        if (currentView === 'notes') {
            return <GlobalNotesPage />;
        }
        if (currentProject) {
            return <ProjectDetail />;
        }
        return <ProjectList onCreateProject={handleCreateProject} />;
    };

    return (
        <AuthGuard>
            <Layout
                onCreateProject={handleCreateProject}
                onExportImport={() => setShowExportImportModal(true)}
            >
                {renderContent()}

                {showCreateModal && (
                    <CreateProjectModal onClose={() => setShowCreateModal(false)} />
                )}

                {showExportImportModal && (
                    <ExportImportModal onClose={() => setShowExportImportModal(false)} />
                )}
            </Layout>
        </AuthGuard>
    );
}

export default App;
