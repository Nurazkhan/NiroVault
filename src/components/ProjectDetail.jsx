import { useState } from 'react';
import { useStore } from '../lib/store';
import VersionTree from './VersionTree';
import ResourceGallery from './ResourceGallery';
import TodoList from './TodoList';
import ErrorList from './ErrorList';
import AILinksManager from './AILinksManager';
import CodeViewer from './CodeViewer';
import FirmwareFlasher from './FirmwareFlasher';
import FileUploader from './FileUploader';
import CreateVersionModal from './CreateVersionModal';
import EditProjectModal from './EditProjectModal';
import TextEntriesManager from './TextEntriesManager';
import {
    ArrowLeft,
    Edit,
    Trash2,
    GitBranch,
    Image,
    Video,
    FileCode,
    FileText,
    Link,
    Cpu,
    CircuitBoard,
    CheckSquare,
    AlertTriangle,
    Plus
} from 'lucide-react';
import './styles/ProjectDetail.css';

const TABS = [
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'code', label: 'Code', icon: FileCode },
    { id: 'notes', label: 'Notes', icon: FileText },
    { id: 'schematics', label: 'Schematics', icon: CircuitBoard },
    { id: 'flasher', label: 'USB Flash', icon: Cpu },
    { id: 'links', label: 'AI Chats', icon: Link },
    { id: 'todo', label: 'To-Do', icon: CheckSquare },
    { id: 'errors', label: 'Errors', icon: AlertTriangle },
];

function ProjectDetail() {
    const {
        currentProject,
        currentVersion,
        versions,
        resources,
        selectProject,
        deleteProject,
        selectVersion
    } = useStore();

    const [activeTab, setActiveTab] = useState('gallery');
    const [showUploader, setShowUploader] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [showVersionModal, setShowVersionModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    if (!currentProject) return null;

    const handleBack = () => {
        selectProject(null);
    };

    const handleDelete = async () => {
        await deleteProject(currentProject.id);
    };

    // Filter resources by type based on active tab
    const getFilteredResources = () => {
        switch (activeTab) {
            case 'gallery':
                return resources.filter(r => r.type === 'image' || r.type === 'video');
            case 'code':
                return resources.filter(r => r.type === 'bin' || r.type === 'ino');
            case 'schematics':
                return resources.filter(r => r.type === 'schematic');
            case 'notes':
                return resources.filter(r => r.type === 'note');
            case 'links':
                return resources.filter(r => r.type === 'link');
            default:
                return [];
        }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'gallery':
                return (
                    <ResourceGallery
                        resources={getFilteredResources()}
                        onAdd={() => setShowUploader(true)}
                    />
                );
            case 'code':
                return (
                    <CodeViewer
                        resources={getFilteredResources()}
                        onAdd={() => setShowUploader(true)}
                    />
                );
            case 'schematics':
                return (
                    <ResourceGallery
                        resources={getFilteredResources()}
                        onAdd={() => setShowUploader(true)}
                        type="schematic"
                    />
                );
            case 'notes':
                return <TextEntriesManager resources={getFilteredResources()} />;
            case 'flasher':
                return <FirmwareFlasher resources={resources.filter(r => r.type === 'bin')} />;
            case 'links':
                return <AILinksManager resources={getFilteredResources()} />;
            case 'todo':
                return <TodoList version={currentVersion} />;
            case 'errors':
                return <ErrorList version={currentVersion} />;
            default:
                return null;
        }
    };

    return (
        <div className="project-detail animate-fadeIn">
            {/* Header */}
            <div className="detail-header">
                <button className="btn btn-ghost" onClick={handleBack}>
                    <ArrowLeft size={18} />
                    Back
                </button>

                <div className="detail-actions">
                    <button className="btn btn-secondary" onClick={() => setShowEditModal(true)}>
                        <Edit size={16} />
                        Edit
                    </button>
                    <button
                        className="btn btn-ghost text-error"
                        onClick={() => setShowDeleteConfirm(true)}
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </div>

            {/* Project Info */}
            <div className="detail-info">
                <div className="detail-thumbnail">
                    {currentProject.thumbnailUrl || currentProject.thumbnail ? (
                        <img
                            src={currentProject.thumbnailUrl || URL.createObjectURL(currentProject.thumbnail)}
                            alt={currentProject.name}
                        />
                    ) : (
                        <div className="detail-thumbnail-placeholder">
                            <Cpu size={48} />
                        </div>
                    )}
                </div>

                <div className="detail-meta">
                    <h1 className="detail-title">{currentProject.name}</h1>
                    {currentProject.description && (
                        <p className="detail-description">{currentProject.description}</p>
                    )}

                    {currentVersion && (
                        <div className="version-badge">
                            <GitBranch size={14} />
                            <span>{currentVersion.name}</span>
                        </div>
                    )}

                    {currentProject.tags && currentProject.tags.length > 0 && (
                        <div className="tags-list">
                            {currentProject.tags.map((tag, i) => (
                                <span key={i} className="badge badge-sm">
                                    <Tag size={12} /> {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Version Tree */}
            <div className="version-section">
                <div className="section-header">
                    <h2>
                        <GitBranch size={18} />
                        Version Tree
                    </h2>
                    <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => setShowVersionModal(true)}
                    >
                        <Plus size={14} />
                        New Version
                    </button>
                </div>
                <VersionTree
                    versions={versions}
                    currentVersionId={currentVersion?.id}
                    onSelectVersion={selectVersion}
                />
            </div>

            {/* Tabs */}
            <div className="tabs">
                {TABS.map(tab => {
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <Icon size={16} />
                            <span>{tab.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Tab Content */}
            <div className="tab-content">
                {renderTabContent()}
            </div>

            {/* File Uploader Modal */}
            {showUploader && (
                <FileUploader
                    onClose={() => setShowUploader(false)}
                    versionId={currentVersion?.id}
                    defaultType={activeTab === 'schematics' ? 'schematic' : activeTab === 'code' ? 'bin' : 'image'}
                />
            )}

            {/* Create Version Modal */}
            {showVersionModal && (
                <CreateVersionModal
                    onClose={() => setShowVersionModal(false)}
                    projectId={currentProject.id}
                    parentVersion={currentVersion}
                    versions={versions}
                />
            )}

            {/* Edit Project Modal */}
            {showEditModal && (
                <EditProjectModal
                    onClose={() => setShowEditModal(false)}
                    project={currentProject}
                />
            )}

            {/* Delete Confirmation */}
            {showDeleteConfirm && (
                <div className="modal-overlay" onClick={() => setShowDeleteConfirm(false)}>
                    <div className="modal confirm-dialog" onClick={e => e.stopPropagation()}>
                        <div className="modal-content">
                            <AlertTriangle className="confirm-icon" />
                            <h3>Delete Project?</h3>
                            <p className="text-secondary">
                                This will permanently delete "{currentProject.name}" and all its versions and files.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" onClick={() => setShowDeleteConfirm(false)}>
                                Cancel
                            </button>
                            <button className="btn btn-danger" onClick={handleDelete}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectDetail;
