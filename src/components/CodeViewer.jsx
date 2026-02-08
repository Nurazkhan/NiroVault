import { useState } from 'react';
import { useStore } from '../lib/store';
import { FileCode, Download, Trash2, Plus, FileType, File } from 'lucide-react';
import './styles/CodeViewer.css';

function CodeViewer({ resources, onAdd }) {
    const { deleteResource } = useStore();
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileContent, setFileContent] = useState('');

    const binFiles = resources.filter(r => r.type === 'bin');
    const inoFiles = resources.filter(r => r.type === 'ino');

    const handleFileClick = async (resource) => {
        setSelectedFile(resource);

        if (resource.type === 'ino') {
            try {
                if (resource.url) {
                    const response = await fetch(resource.url);
                    const text = await response.text();
                    setFileContent(text);
                } else if (resource.data instanceof File) {
                    // Fallback for potential local-only state before sync?
                    const text = await resource.data.text();
                    setFileContent(text);
                } else {
                    setFileContent('Error: File content unavailable.');
                }
            } catch (error) {
                console.error("Failed to load file content:", error);
                setFileContent("Error loading file content.");
            }
        } else {
            setFileContent('');
        }
    };

    const handleDownload = (resource) => {
        const url = resource.url || (resource.data ? URL.createObjectURL(resource.data) : null);
        if (!url) return;

        const a = document.createElement('a');
        a.href = url;
        a.download = resource.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        if (!resource.url) URL.revokeObjectURL(url);
    };

    const formatFileSize = (bytes) => {
        if (!bytes && bytes !== 0) return 'Unknown';
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    };

    if (resources.length === 0) {
        return (
            <div className="code-empty">
                <FileCode size={48} />
                <h3>No code files yet</h3>
                <p>Add .bin (compiled firmware) or .ino (Arduino source) files</p>
                <button className="btn btn-primary" onClick={onAdd}>
                    <Plus size={18} />
                    Add Code Files
                </button>
            </div>
        );
    }

    return (
        <div className="code-viewer">
            <div className="code-sidebar">
                <div className="code-section">
                    <h4 className="code-section-title">
                        <File size={14} />
                        Compiled (.bin)
                    </h4>
                    <ul className="code-list">
                        {binFiles.map(file => (
                            <li key={file.id}>
                                <button
                                    className={`code-file ${selectedFile?.id === file.id ? 'active' : ''}`}
                                    onClick={() => handleFileClick(file)}
                                >
                                    <span className="badge badge-accent">BIN</span>
                                    <span className="code-file-name truncate">{file.name}</span>
                                    <span className="code-file-size">
                                        {formatFileSize(file.metadata?.size || file.data?.size)}
                                    </span>
                                </button>
                            </li>
                        ))}
                        {binFiles.length === 0 && (
                            <li className="code-empty-section">No .bin files</li>
                        )}
                    </ul>
                </div>

                <div className="code-section">
                    <h4 className="code-section-title">
                        <FileType size={14} />
                        Source (.ino)
                    </h4>
                    <ul className="code-list">
                        {inoFiles.map(file => (
                            <li key={file.id}>
                                <button
                                    className={`code-file ${selectedFile?.id === file.id ? 'active' : ''}`}
                                    onClick={() => handleFileClick(file)}
                                >
                                    <span className="badge badge-success">INO</span>
                                    <span className="code-file-name truncate">{file.name}</span>
                                    <span className="code-file-size">
                                        {formatFileSize(file.metadata?.size || file.data?.size)}
                                    </span>
                                </button>
                            </li>
                        ))}
                        {inoFiles.length === 0 && (
                            <li className="code-empty-section">No .ino files</li>
                        )}
                    </ul>
                </div>

                <button className="btn btn-secondary code-add" onClick={onAdd}>
                    <Plus size={16} />
                    Add Files
                </button>
            </div>

            <div className="code-content">
                {selectedFile ? (
                    <>
                        <div className="code-header">
                            <div className="code-file-info">
                                <h3>{selectedFile.name}</h3>
                                <span className="text-muted">
                                    {formatFileSize(selectedFile.metadata?.size || selectedFile.data?.size)}
                                </span>
                            </div>
                            <div className="code-actions">
                                <button
                                    className="btn btn-sm btn-secondary"
                                    onClick={() => handleDownload(selectedFile)}
                                >
                                    <Download size={14} />
                                    Download
                                </button>
                                <button
                                    className="btn btn-sm btn-ghost text-error"
                                    onClick={() => {
                                        deleteResource(selectedFile.id);
                                        setSelectedFile(null);
                                    }}
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        </div>

                        {selectedFile.type === 'ino' && fileContent ? (
                            <pre className="code-preview">
                                <code>{fileContent}</code>
                            </pre>
                        ) : (
                            <div className="code-binary-info">
                                <File size={64} />
                                <h4>Binary File</h4>
                                <p>This is a compiled firmware file ready for flashing.</p>
                                <p className="text-muted">
                                    Use the "USB Flash" tab to upload this file to your board.
                                </p>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="code-placeholder">
                        <FileCode size={48} />
                        <p>Select a file to view details</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CodeViewer;
