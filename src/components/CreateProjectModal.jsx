import { useState, useEffect, useCallback } from 'react';
import { useStore } from '../lib/store';
import { X, Upload, Image as ImageIcon, Clipboard } from 'lucide-react';
import './styles/Modal.css';

function CreateProjectModal({ onClose }) {
    const { createProject } = useStore();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailPreview, setThumbnailPreview] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

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

    // Handle paste events for thumbnail
    const handlePaste = useCallback((e) => {
        // Don't interfere with text input paste
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }

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

    // Handle drag and drop for thumbnail
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            handleImageFromFile(file);
        }
    };

    // Add paste listener
    useEffect(() => {
        document.addEventListener('paste', handlePaste);
        return () => {
            document.removeEventListener('paste', handlePaste);
        };
    }, [handlePaste]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        setIsSubmitting(true);
        try {
            await createProject({
                name: name.trim(),
                description: description.trim(),
                thumbnail
            });
            onClose();
        } catch (error) {
            console.error('Failed to create project:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Create New Project</h2>
                    <button className="btn btn-icon btn-ghost" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="modal-content">
                    <div className="form-group">
                        <label className="label">Project Name *</label>
                        <input
                            type="text"
                            className="input"
                            placeholder="e.g., RC Car with PS4 Controller"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            autoFocus
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="label">Description</label>
                        <textarea
                            className="input textarea"
                            placeholder="Describe your project..."
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            rows={3}
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
                                    <span>Click, drag, or <strong>paste</strong> image</span>
                                    <div className="dropzone-hint">
                                        <Clipboard size={14} />
                                        <span>Ctrl+V to paste</span>
                                    </div>
                                </label>
                            )}
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={!name.trim() || isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="loading-spinner" style={{ width: 16, height: 16 }} />
                                    Creating...
                                </>
                            ) : (
                                'Create Project'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateProjectModal;
