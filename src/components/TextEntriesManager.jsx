
import { useState } from 'react';
import { useStore } from '../lib/store';
import { FileText, Plus, Trash2, Clock } from 'lucide-react';
import './styles/TextEntriesManager.css';

function TextEntriesManager({ resources }) {
    const { addResource, deleteResource, currentVersion } = useStore();
    const [newEntry, setNewEntry] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleAddEntry = async () => {
        if (!newEntry.trim() || !currentVersion) return;

        setIsSubmitting(true);
        try {
            await addResource(currentVersion.id, {
                type: 'note',
                name: 'Note', // Generic name, actual content is in metadata
                metadata: {
                    content: newEntry.trim()
                }
            });
            setNewEntry('');
        } catch (error) {
            console.error('Failed to add note:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            handleAddEntry();
        }
    };

    const formatDate = (date) => {
        if (!date) return '';
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    };

    return (
        <div className="text-entries">
            <div className="entries-header">
                <h3>
                    <FileText size={18} />
                    Project Notes
                </h3>
            </div>

            <div className="entries-input-wrapper">
                <textarea
                    className="input entry-textarea"
                    placeholder="Type a note... (Ctrl+Enter to add)"
                    value={newEntry}
                    onChange={(e) => setNewEntry(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={handleAddEntry}
                        disabled={!newEntry.trim() || isSubmitting}
                    >
                        <Plus size={16} />
                        Add Note
                    </button>
                </div>
            </div>

            {resources.length === 0 ? (
                <div className="entries-empty">
                    <FileText size={48} />
                    <h3>No notes yet</h3>
                    <p>Add notes, ideas, or logs for this version.</p>
                </div>
            ) : (
                <div className="entries-list">
                    {resources.map((entry) => (
                        <div key={entry.id} className="entry-card">
                            <div className="entry-header">
                                <span className="entry-timestamp">
                                    <Clock size={12} />
                                    {formatDate(entry.createdAt)}
                                </span>
                                <div className="entry-actions">
                                    <button
                                        className="btn btn-icon btn-ghost btn-sm text-error"
                                        onClick={() => deleteResource(entry.id)}
                                        title="Delete note"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>
                            <div className="entry-content">
                                {entry.metadata?.content || entry.metadata?.text || ''}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TextEntriesManager;
