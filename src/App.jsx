import { useState, useEffect } from 'react';
import { useStore } from './lib/store';
import Layout from './components/Layout';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import CreateProjectModal from './components/CreateProjectModal';
import InspirationBoard from './components/InspirationBoard';
import AuthGuard from './components/AuthGuard';
import './App.css';

function App() {
    const { currentProject, currentView, setCurrentView, initAuth } = useStore();
    const [showCreateModal, setShowCreateModal] = useState(false);

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
        if (currentProject) {
            return <ProjectDetail />;
        }
        return <ProjectList onCreateProject={handleCreateProject} />;
    };

    return (
        <AuthGuard>
            <Layout onCreateProject={handleCreateProject}>
                {renderContent()}

                {showCreateModal && (
                    <CreateProjectModal onClose={() => setShowCreateModal(false)} />
                )}
            </Layout>
        </AuthGuard>
    );
}

export default App;
