import { useState, useRef } from 'react';
import { useStore } from '../lib/store';
import {
    exportAllData,
    downloadExportFile,
    readImportFile,
    importAllData
} from '../lib/exportImport';
import {
    X,
    Download,
    Upload,
    CheckCircle,
    AlertTriangle,
    Loader,
    FileJson,
    FolderDown,
    FolderUp,
    Package
} from 'lucide-react';
import './styles/ExportImportModal.css';

function ExportImportModal({ onClose }) {
    const {
        loadProjects,
        loadFolders,
        loadInspirations,
        loadGlobalTasks,
        loadGlobalNotes
    } = useStore();

    const [mode, setMode] = useState(null); // null | 'export' | 'import'
    const [status, setStatus] = useState('idle'); // idle | working | success | error
    const [progress, setProgress] = useState({ step: '', detail: '' });
    const [error, setError] = useState('');
    const [importPreview, setImportPreview] = useState(null);
    const fileInputRef = useRef(null);

    const handleExport = async () => {
        setMode('export');
        setStatus('working');
        setError('');

        try {
            const data = await exportAllData((p) => setProgress(p));
            downloadExportFile(data);
            setStatus('success');
        } catch (err) {
            console.error('Export failed:', err);
            setError(err.message);
            setStatus('error');
        }
    };

    const handleFileSelect = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const data = await readImportFile(file);
            setImportPreview(data);
            setError('');
        } catch (err) {
            setError(err.message);
            setImportPreview(null);
        }
    };

    const handleImport = async () => {
        if (!importPreview) return;

        setStatus('working');
        setError('');

        try {
            await importAllData(importPreview, (p) => setProgress(p));

            // Reload all store data
            await Promise.all([
                loadProjects(),
                loadFolders(),
                loadInspirations(),
                loadGlobalTasks(),
                loadGlobalNotes()
            ]);

            setStatus('success');
        } catch (err) {
            console.error('Import failed:', err);
            setError(err.message);
            setStatus('error');
        }
    };

    const resetState = () => {
        setMode(null);
        setStatus('idle');
        setProgress({ step: '', detail: '' });
        setError('');
        setImportPreview(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const renderChoiceScreen = () => (
        <div className="eim-choices">
            <button className="eim-choice-card" onClick={handleExport}>
                <div className="eim-choice-icon export">
                    <FolderDown size={32} />
                </div>
                <h3>Export Data</h3>
                <p>Download all your projects, versions, tasks, notes, and inspirations as a backup file.</p>
            </button>

            <button className="eim-choice-card" onClick={() => setMode('import')}>
                <div className="eim-choice-icon import">
                    <FolderUp size={32} />
                </div>
                <h3>Import Data</h3>
                <p>Restore data from a previously exported <code>.nirovault.json</code> backup file.</p>
            </button>
        </div>
    );

    const renderImportPicker = () => (
        <div className="eim-import-picker">
            <div
                className="eim-dropzone"
                onClick={() => fileInputRef.current?.click()}
            >
                <FileJson size={48} className="eim-dropzone-icon" />
                <p className="eim-dropzone-label">
                    Click to select a <code>.nirovault.json</code> file
                </p>
                <p className="eim-dropzone-hint">or drag and drop here</p>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".json"
                    onChange={handleFileSelect}
                    style={{ display: 'none' }}
                />
            </div>

            {error && (
                <div className="eim-error">
                    <AlertTriangle size={16} />
                    <span>{error}</span>
                </div>
            )}

            {importPreview && (
                <div className="eim-preview">
                    <h4 className="eim-preview-title">
                        <Package size={16} />
                        Backup Contents
                    </h4>
                    <div className="eim-preview-meta">
                        <span>Exported: {new Date(importPreview._exportDate).toLocaleDateString()}</span>
                        <span>By: {importPreview._exportedBy}</span>
                    </div>
                    <div className="eim-preview-grid">
                        <div className="eim-preview-stat">
                            <span className="eim-stat-value">{importPreview.projects?.length || 0}</span>
                            <span className="eim-stat-label">Projects</span>
                        </div>
                        <div className="eim-preview-stat">
                            <span className="eim-stat-value">{importPreview.folders?.length || 0}</span>
                            <span className="eim-stat-label">Folders</span>
                        </div>
                        <div className="eim-preview-stat">
                            <span className="eim-stat-value">{importPreview.inspirations?.length || 0}</span>
                            <span className="eim-stat-label">Inspirations</span>
                        </div>
                        <div className="eim-preview-stat">
                            <span className="eim-stat-value">{importPreview.globalTasks?.length || 0}</span>
                            <span className="eim-stat-label">Tasks</span>
                        </div>
                        <div className="eim-preview-stat">
                            <span className="eim-stat-value">{importPreview.globalNotes?.length || 0}</span>
                            <span className="eim-stat-label">Notes</span>
                        </div>
                        <div className="eim-preview-stat">
                            <span className="eim-stat-value">
                                {(importPreview.projects || []).reduce(
                                    (sum, p) => sum + (p.versions || []).length, 0
                                )}
                            </span>
                            <span className="eim-stat-label">Versions</span>
                        </div>
                    </div>

                    <div className="eim-warning">
                        <AlertTriangle size={14} />
                        <span>Importing will <strong>add</strong> data alongside your existing data (no duplicates will be removed).</span>
                    </div>

                    <button className="btn btn-primary eim-import-btn" onClick={handleImport}>
                        <Upload size={16} />
                        Import All Data
                    </button>
                </div>
            )}
        </div>
    );

    const renderWorking = () => (
        <div className="eim-status-screen">
            <div className="eim-spinner">
                <Loader size={48} className="spin" />
            </div>
            <h3>{mode === 'export' ? 'Exporting…' : 'Importing…'}</h3>
            <p className="eim-progress-detail">{progress.detail}</p>
            <div className="eim-progress-bar">
                <div className="eim-progress-fill" />
            </div>
        </div>
    );

    const renderSuccess = () => (
        <div className="eim-status-screen">
            <div className="eim-success-icon">
                <CheckCircle size={56} />
            </div>
            <h3>{mode === 'export' ? 'Export Complete!' : 'Import Complete!'}</h3>
            <p className="text-secondary">
                {mode === 'export'
                    ? 'Your backup file has been downloaded.'
                    : 'All data has been restored successfully. Your projects are ready!'
                }
            </p>
            <div className="eim-actions">
                <button className="btn btn-secondary" onClick={onClose}>Close</button>
                {mode === 'export' && (
                    <button className="btn btn-ghost" onClick={resetState}>Export Again</button>
                )}
            </div>
        </div>
    );

    const renderError = () => (
        <div className="eim-status-screen">
            <div className="eim-error-icon">
                <AlertTriangle size={56} />
            </div>
            <h3>Something Went Wrong</h3>
            <p className="eim-error-text">{error}</p>
            <div className="eim-actions">
                <button className="btn btn-secondary" onClick={resetState}>Try Again</button>
                <button className="btn btn-ghost" onClick={onClose}>Close</button>
            </div>
        </div>
    );

    const renderContent = () => {
        if (status === 'working') return renderWorking();
        if (status === 'success') return renderSuccess();
        if (status === 'error') return renderError();
        if (mode === 'import') return renderImportPicker();
        return renderChoiceScreen();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal eim-modal" onClick={e => e.stopPropagation()}>
                <div className="eim-header">
                    <h2>
                        <Package size={20} />
                        {mode === 'export' ? 'Export Data' : mode === 'import' ? 'Import Data' : 'Export / Import'}
                    </h2>
                    <button className="btn btn-icon btn-ghost" onClick={onClose}>
                        <X size={18} />
                    </button>
                </div>

                <div className="eim-body">
                    {mode && status === 'idle' && (
                        <button className="btn btn-ghost btn-sm eim-back-btn" onClick={resetState}>
                            ← Back
                        </button>
                    )}
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default ExportImportModal;
