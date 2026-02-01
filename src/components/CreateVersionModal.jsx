import { useState } from 'react';
import { useStore } from '../lib/store';
import { X, GitBranch, Copy } from 'lucide-react';
import './styles/Modal.css';

function CreateVersionModal({ onClose, projectId, parentVersion, versions }) {
    const { createVersion, selectVersion } = useStore();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [parentId, setParentId] = useState(parentVersion?.id || null);
    const [copyResources, setCopyResources] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Generate suggested version name
    const getSuggestedName = () => {
        if (!versions.length) return 'v1.0';

        // Find versions with same parent
        const siblingVersions = versions.filter(v => v.parentVersionId === parentId);
        const parentVersionObj = versions.find(v => v.id === parentId);

        if (parentVersionObj) {
            // Increment minor version
            const match = parentVersionObj.name.match(/v?(\d+)\.(\d+)/);
            if (match) {
                const major = parseInt(match[1]);
                const minor = parseInt(match[2]);

                // Check if it's a branch (has siblings)
                if (siblingVersions.length > 0) {
                    return `v${major}.${minor}-branch${siblingVersions.length + 1}`;
                }
                return `v${major}.${minor + 1}`;
            }
        }

        // Fallback
        return `v1.${versions.length}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        setIsSubmitting(true);
        try {
            const versionId = await createVersion(projectId, {
                name: name.trim(),
                description: description.trim(),
                parentVersionId: parentId,
                copyResources,
                todos: [],
                errors: []
            });

            // Switch to the new version
            await selectVersion(versionId);
            onClose();
        } catch (error) {
            console.error('Failed to create version:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Create New Version</h2>
                    <button className="btn btn-icon btn-ghost" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="modal-content">
                    <div className="form-group">
                        <label className="label">Version Name *</label>
                        <input
                            type="text"
                            className="input"
                            placeholder={getSuggestedName()}
                            value={name}
                            onChange={e => setName(e.target.value)}
                            autoFocus
                            required
                        />
                        <span className="form-hint">
                            Suggested: {getSuggestedName()}
                        </span>
                    </div>

                    <div className="form-group">
                        <label className="label">Description</label>
                        <textarea
                            className="input textarea"
                            placeholder="What changes in this version?"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            rows={2}
                        />
                    </div>

                    <div className="form-group">
                        <label className="label">Branch From</label>
                        <select
                            className="input"
                            value={parentId || ''}
                            onChange={e => setParentId(e.target.value ? Number(e.target.value) : null)}
                        >
                            <option value="">None (New Root)</option>
                            {versions.map(v => (
                                <option key={v.id} value={v.id}>
                                    {v.name} {v.id === parentVersion?.id ? '(current)' : ''}
                                </option>
                            ))}
                        </select>
                    </div>

                    {parentId && (
                        <div className="form-group">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={copyResources}
                                    onChange={e => setCopyResources(e.target.checked)}
                                />
                                <Copy size={16} />
                                <span>Copy files from parent version</span>
                            </label>
                        </div>
                    )}

                    <div className="version-preview">
                        <GitBranch size={16} />
                        <span>
                            {parentId ? (
                                <>Creating branch from <strong>{versions.find(v => v.id === parentId)?.name}</strong></>
                            ) : (
                                <>Creating new root version</>
                            )}
                        </span>
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
                                <>
                                    <GitBranch size={16} />
                                    Create Version
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateVersionModal;
