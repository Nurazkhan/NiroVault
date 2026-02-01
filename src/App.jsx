import { useState, useEffect } from 'react';
import { useStore } from './lib/store';
import Layout from './components/Layout';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import CreateProjectModal from './components/CreateProjectModal';
import AuthGuard from './components/AuthGuard';
import './App.css';

function App() {
    const { currentProject, initAuth } = useStore();
    const [showCreateModal, setShowCreateModal] = useState(false);

    useEffect(() => {
        const unsubscribe = initAuth();
        return () => unsubscribe();
    }, []);

    return (
        <AuthGuard>
            <Layout onCreateProject={() => setShowCreateModal(true)}>
                {currentProject ? (
                    <ProjectDetail />
                ) : (
                    <ProjectList onCreateProject={() => setShowCreateModal(true)} />
                )}

                {showCreateModal && (
                    <CreateProjectModal onClose={() => setShowCreateModal(false)} />
                )}
            </Layout>
        </AuthGuard>
    );
}

export default App;
