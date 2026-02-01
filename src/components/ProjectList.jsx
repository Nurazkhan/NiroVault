import { useStore } from '../lib/store';
import ProjectCard from './ProjectCard';
import { Plus, FolderOpen } from 'lucide-react';
import './styles/ProjectList.css';

function ProjectList({ onCreateProject }) {
    const { projects, view, isLoading } = useStore();

    if (isLoading) {
        return (
            <div className={`project-list ${view}`}>
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="project-card skeleton-card">
                        <div className="skeleton" style={{ height: 160 }} />
                        <div className="skeleton-content">
                            <div className="skeleton" style={{ height: 20, width: '60%' }} />
                            <div className="skeleton" style={{ height: 14, width: '80%' }} />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (projects.length === 0) {
        return (
            <div className="empty-state">
                <FolderOpen className="empty-state-icon" />
                <h3>No projects yet</h3>
                <p>Create your first project to start organizing your electronics work, schematics, and firmware.</p>
                <button className="btn btn-primary btn-lg" onClick={onCreateProject}>
                    <Plus size={20} />
                    Create Project
                </button>
            </div>
        );
    }

    return (
        <div className={`project-list ${view}`}>
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}

            <button className="project-card add-card" onClick={onCreateProject}>
                <Plus size={32} />
                <span>New Project</span>
            </button>
        </div>
    );
}

export default ProjectList;
