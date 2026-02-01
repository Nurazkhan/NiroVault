import { useState, useEffect, useCallback } from 'react';
import { useStore } from '../lib/store';
import { X, Save, Tag, Folder, Image as ImageIcon, Clipboard } from 'lucide-react';
import './styles/Modal.css';

function EditProjectModal({ onClose, project }) {
    const { updateProject, folders } = useStore();

    const [name, setName] = useState(project.name);
    const [description, setDescription] = useState(project.description || '');
    const [folderId, setFolderId] = useState(project.folderId || '');
    const [tags, setTags] = useState(project.tags ? project.tags.join(', ') : '');

    // Thumbnail state
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailPreview, setThumbnailPreview] = useState(project.thumbnailUrl || null);
    const [isDragging, setIsDragging] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    // Thumbnail handlers
    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setThumbnail(file);
            setThumbnailPreview(URL.createObjectURL(file));
        }
    };

    const handleImageFromFile = (file) => {
        if (file && file.type.startsWith('image/')) {
            setThumbnail(file);
            setThumbnailPreview(URL.createObjectURL(file));
        }
    };

    const handlePaste = useCallback((e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        const items = e.clipboardData?.items;
        if (!items) return;

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.kind === 'file' && item.type.startsWith('image/')) {
                const file = item.getAsFile();
                if (file) {
                    e.preventDefault();
                    const namedFile = new File([file], `thumbnail-${Date.now()}.png`, { type: file.type });
                    handleImageFromFile(namedFile);
                    break;
                }
            }
        }
    }, []);

    const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
    const handleDragLeave = (e) => { e.preventDefault(); setIsDragging(false); };
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) handleImageFromFile(files[0]);
    };

    useEffect(() => {
        document.addEventListener('paste', handlePaste);
        return () => document.removeEventListener('paste', handlePaste);
    }, [handlePaste]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const formattedTags = tags.split(',').map(t => t.trim()).filter(Boolean);

            const updateData = {
                name,
                description,
                folderId: folderId || null,
                tags: formattedTags,
                thumbnail // If File provided, store updates. If null, ignored by store/db update logic usually.
            };

            // Handle removal explicitly if needed (if preview is cleared but no new file)
            if (!thumbnailPreview && !thumbnail) {
                updateData.thumbnailUrl = null;
            }

            await updateProject(project.id, updateData);
            onClose();
        } catch (error) {
            console.error('Failed to update project:', error);
            alert('Failed to update project');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Edit Project</h2>
                    <button className="btn btn-icon btn-ghost" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="modal-content">
                    <div className="form-group">
                        <label className="label">Project Name</label>
                        <input
                            type="text"
                            className="input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="label">Thumbnail</label>
                        <div className="thumbnail-upload">
                            {thumbnailPreview ? (
                                <div className="thumbnail-preview">
                                    <img src={thumbnailPreview} alt="Preview" />
                                    <button
                                        type="button"
                                        className="btn btn-icon btn-ghost thumbnail-remove"
                                        onClick={() => {
                                            setThumbnail(null);
                                            setThumbnailPreview(null);
                                        }}
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            ) : (
                                <label
                                    className={`dropzone thumbnail-dropzone ${isDragging ? 'active' : ''}`}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                >
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleThumbnailChange}
                                        hidden
                                    />
                                    <ImageIcon size={24} className="dropzone-icon" />
                                    <span>Change Thumbnail</span>
                                    <div className="dropzone-hint">
                                        <Clipboard size={14} />
                                        <span>Paste / Drop</span>
                                    </div>
                                </label>
                            )}
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="label">Description</label>
                        <textarea
                            className="input textarea"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={3}
                        />
                    </div>

                    <div className="form-group">
                        <label className="label">
                            <span className="flex items-center gap-sm">
                                <Folder size={14} /> Folder
                            </span>
                        </label>
                        <select
                            className="input"
                            value={folderId}
                            onChange={(e) => setFolderId(e.target.value)}
                        >
                            <option value="">(No Folder)</option>
                            {folders.map(folder => (
                                <option key={folder.id} value={folder.id}>
                                    {folder.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="label">
                            <span className="flex items-center gap-sm">
                                <Tag size={14} /> Tags
                            </span>
                        </label>
                        <input
                            type="text"
                            className="input"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            placeholder="iot, v1 (comma separated)"
                        />
                    </div>
                </form>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        {isLoading ? <div className="loading-spinner sm"></div> : <Save size={18} />}
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditProjectModal;
