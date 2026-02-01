import { useState } from 'react';
import { useStore } from '../lib/store';
import { AlertTriangle, Plus, Trash2, CheckCircle, Circle, Bug } from 'lucide-react';
import './styles/ErrorList.css';

function ErrorList({ version }) {
    const { updateVersion } = useStore();
    const [newError, setNewError] = useState('');
    const [newErrorDescription, setNewErrorDescription] = useState('');
    const [showForm, setShowForm] = useState(false);

    const errors = version?.errors || [];

    const addError = () => {
        if (!newError.trim() || !version) return;

        const newErrorItem = {
            id: Date.now(),
            title: newError.trim(),
            description: newErrorDescription.trim(),
            resolved: false,
            createdAt: new Date()
        };

        updateVersion(version.id, {
            errors: [...errors, newErrorItem]
        });

        setNewError('');
        setNewErrorDescription('');
        setShowForm(false);
    };

    const toggleResolved = (errorId) => {
        updateVersion(version.id, {
            errors: errors.map(e =>
                e.id === errorId ? { ...e, resolved: !e.resolved } : e
            )
        });
    };

    const deleteError = (errorId) => {
        updateVersion(version.id, {
            errors: errors.filter(e => e.id !== errorId)
        });
    };

    const unresolvedCount = errors.filter(e => !e.resolved).length;

    return (
        <div className="error-list">
            <div className="error-header">
                <div className="error-stats">
                    {unresolvedCount > 0 ? (
                        <span className="badge badge-error">
                            {unresolvedCount} unresolved
                        </span>
                    ) : (
                        <span className="badge badge-success">
                            All resolved
                        </span>
                    )}
                </div>

                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setShowForm(!showForm)}
                >
                    <Plus size={16} />
                    Log Error
                </button>
            </div>

            {showForm && (
                <div className="error-form">
                    <input
                        type="text"
                        className="input"
                        placeholder="Error title..."
                        value={newError}
                        onChange={(e) => setNewError(e.target.value)}
                        autoFocus
                    />
                    <textarea
                        className="input textarea"
                        placeholder="Description (optional)..."
                        value={newErrorDescription}
                        onChange={(e) => setNewErrorDescription(e.target.value)}
                        rows={3}
                    />
                    <div className="error-form-actions">
                        <button
                            className="btn btn-ghost"
                            onClick={() => setShowForm(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={addError}
                            disabled={!newError.trim()}
                        >
                            Add Error
                        </button>
                    </div>
                </div>
            )}

            {errors.length === 0 ? (
                <div className="error-empty">
                    <Bug size={48} />
                    <h3>No errors logged</h3>
                    <p>Track bugs and issues for this version here</p>
                </div>
            ) : (
                <ul className="error-items">
                    {errors.map((error) => (
                        <li
                            key={error.id}
                            className={`error-item ${error.resolved ? 'resolved' : ''}`}
                        >
                            <button
                                className="error-status"
                                onClick={() => toggleResolved(error.id)}
                                title={error.resolved ? 'Mark as unresolved' : 'Mark as resolved'}
                            >
                                {error.resolved ? (
                                    <CheckCircle size={20} />
                                ) : (
                                    <AlertTriangle size={20} />
                                )}
                            </button>

                            <div className="error-content">
                                <h4 className="error-title">{error.title}</h4>
                                {error.description && (
                                    <p className="error-description">{error.description}</p>
                                )}
                                <span className="error-date">
                                    {new Date(error.createdAt).toLocaleDateString()}
                                </span>
                            </div>

                            <button
                                className="btn btn-icon btn-ghost btn-sm error-delete"
                                onClick={() => deleteError(error.id)}
                            >
                                <Trash2 size={14} />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ErrorList;
