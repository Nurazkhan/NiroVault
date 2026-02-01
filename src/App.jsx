import { useState, useEffect } from 'react';
import { useStore } from './lib/store';
import Layout from './components/Layout';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import CreateProjectModal from './components/CreateProjectModal';
import './App.css';

function App() {
    const { currentProject, loadProjects } = useStore();
    const [showCreateModal, setShowCreateModal] = useState(false);

    useEffect(() => {
        loadProjects();
    }, []);

    return (
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
    );
}

export default App;
