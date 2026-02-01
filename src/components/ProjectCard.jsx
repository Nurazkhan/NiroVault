import { useStore } from '../lib/store';
import { FolderOpen, Clock, GitBranch } from 'lucide-react';
import './styles/ProjectCard.css';

function ProjectCard({ project }) {
    const { selectProject } = useStore();

    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        return d.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: d.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
        });
    };

    return (
        <article
            className="project-card card card-interactive"
            onClick={() => selectProject(project.id)}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && selectProject(project.id)}
        >
            <div className="project-thumbnail">
                {project.thumbnail ? (
                    <img
                        src={URL.createObjectURL(project.thumbnail)}
                        alt={project.name}
                        loading="lazy"
                    />
                ) : (
                    <div className="project-thumbnail-placeholder">
                        <FolderOpen size={32} />
                    </div>
                )}
            </div>

            <div className="project-info">
                <h3 className="project-name truncate">{project.name}</h3>
                {project.description && (
                    <p className="project-description truncate">{project.description}</p>
                )}

                <div className="project-meta">
                    <span className="meta-item">
                        <Clock size={12} />
                        {formatDate(project.updatedAt)}
                    </span>
                    <span className="meta-item">
                        <GitBranch size={12} />
                        v1.0
                    </span>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
