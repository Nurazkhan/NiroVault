import { useState, useCallback, useEffect, useRef } from 'react';
import { useStore } from '../lib/store';
import { X, Upload, File, Image, Video, FileCode, CircuitBoard, Clipboard } from 'lucide-react';
import './styles/Modal.css';

const FILE_TYPES = [
    { id: 'image', label: 'Image', icon: Image, accept: 'image/*' },
    { id: 'video', label: 'Video', icon: Video, accept: 'video/*' },
    { id: 'schematic', label: 'Schematic', icon: CircuitBoard, accept: 'image/*' },
    { id: 'bin', label: 'Firmware (.bin)', icon: FileCode, accept: '.bin' },
    { id: 'ino', label: 'Source (.ino)', icon: FileCode, accept: '.ino' },
];

function FileUploader({ onClose, versionId, defaultType = 'image' }) {
    const { addResource } = useStore();
    const [selectedType, setSelectedType] = useState(defaultType);
    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const dropzoneRef = useRef(null);

    // Handle paste events
    const handlePaste = useCallback((e) => {
        const items = e.clipboardData?.items;
        if (!items) return;

        const pastedFiles = [];
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.kind === 'file') {
                const file = item.getAsFile();
                if (file) {
                    // Generate a name for pasted images
                    let fileName = file.name;
                    if (fileName === 'image.png' || !fileName) {
                        fileName = `pasted-image-${Date.now()}.png`;
                    }
                    // Create a new file with proper name
                    const namedFile = new File([file], fileName, { type: file.type });
                    pastedFiles.push(namedFile);
                }
            }
        }

        if (pastedFiles.length > 0) {
            e.preventDefault();
            setFiles(prev => [...prev, ...pastedFiles]);
        }
    }, []);

    // Add global paste listener when modal is open
    useEffect(() => {
        document.addEventListener('paste', handlePaste);
        return () => {
            document.removeEventListener('paste', handlePaste);
        };
    }, [handlePaste]);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);

        const droppedFiles = Array.from(e.dataTransfer.files);
        setFiles(prev => [...prev, ...droppedFiles]);
    }, []);

    const handleFileSelect = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(prev => [...prev, ...selectedFiles]);
    };

    const removeFile = (index) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleUpload = async () => {
        if (!versionId || files.length === 0) return;

        setIsUploading(true);

        try {
            for (const file of files) {
                await addResource(versionId, {
                    type: selectedType,
                    name: file.name,
                    data: file,
                    metadata: {
                        mimeType: file.type,
                        size: file.size,
                        lastModified: file.lastModified
                    }
                });
            }

            onClose();
        } catch (error) {
            console.error('Upload failed:', error);
        } finally {
            setIsUploading(false);
        }
    };

    const currentTypeConfig = FILE_TYPES.find(t => t.id === selectedType);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Add Files</h2>
                    <button className="btn btn-icon btn-ghost" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="modal-content">
                    {/* File Type Selector */}
                    <div className="form-group">
                        <label className="label">File Type</label>
                        <div className="file-type-selector">
                            {FILE_TYPES.map(type => {
                                const Icon = type.icon;
                                return (
                                    <button
                                        key={type.id}
                                        type="button"
                                        className={`file-type-btn ${selectedType === type.id ? 'active' : ''}`}
                                        onClick={() => setSelectedType(type.id)}
                                    >
                                        <Icon size={18} />
                                        <span>{type.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Dropzone */}
                    <div className="form-group">
                        <label className="label">Files</label>
                        <div
                            ref={dropzoneRef}
                            className={`dropzone ${isDragging ? 'active' : ''}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <input
                                type="file"
                                multiple
                                accept={currentTypeConfig?.accept}
                                onChange={handleFileSelect}
                                style={{ display: 'none' }}
                                id="file-input"
                            />
                            <label htmlFor="file-input" style={{ cursor: 'pointer', display: 'contents' }}>
                                <Upload className="dropzone-icon" />
                                <p>Drag files, click to browse, or <strong>paste from clipboard</strong></p>
                                <div className="dropzone-hint">
                                    <Clipboard size={14} />
                                    <span>Ctrl+V to paste images</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* File List */}
                    {files.length > 0 && (
                        <div className="form-group">
                            <label className="label">Selected Files ({files.length})</label>
                            <ul className="file-list">
                                {files.map((file, index) => (
                                    <li key={index} className="file-item">
                                        <File size={16} />
                                        <span className="file-name truncate">{file.name}</span>
                                        <span className="file-size">
                                            {(file.size / 1024).toFixed(1)} KB
                                        </span>
                                        <button
                                            type="button"
                                            className="btn btn-icon btn-ghost btn-sm"
                                            onClick={() => removeFile(index)}
                                        >
                                            <X size={14} />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleUpload}
                            disabled={files.length === 0 || isUploading}
                        >
                            {isUploading ? (
                                <>
                                    <span className="loading-spinner" style={{ width: 16, height: 16 }} />
                                    Uploading...
                                </>
                            ) : (
                                <>
                                    <Upload size={16} />
                                    Upload {files.length} File{files.length !== 1 ? 's' : ''}
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FileUploader;
