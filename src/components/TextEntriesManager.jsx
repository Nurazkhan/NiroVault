import { useState, useEffect } from 'react';
import { useStore } from '../lib/store';
import { FileText, Plus, Trash2, Clock, Search, Edit2, Check, X } from 'lucide-react';
import './styles/TextEntriesManager.css';

function TextEntriesManager({ resources }) {
    const { addResource, deleteResource, updateResource, currentVersion } = useStore();
    const [newEntry, setNewEntry] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleAddEntry = async () => {
        if (!newEntry.trim() || !currentVersion) return;

        setIsSubmitting(true);
        try {
            await addResource(currentVersion.id, {
                type: 'note',
                name: 'Note',
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

    const startEditing = (entry) => {
        setEditingId(entry.id);
        setEditText(entry.metadata?.content || '');
    };

    const cancelEditing = () => {
        setEditingId(null);
        setEditText('');
    };

    const saveEdit = async (id) => {
        if (!editText.trim()) return;
        try {
            await updateResource(id, {
                metadata: { content: editText.trim() }
            });
            setEditingId(null);
            setEditText('');
        } catch (error) {
            console.error('Failed to update note:', error);
        }
    };

    const handleEditKeyDown = (e, id) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            saveEdit(id);
        } else if (e.key === 'Escape') {
            cancelEditing();
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

    // Filter notes by search query
    const filteredResources = resources.filter(entry => {
        const content = entry.metadata?.content || entry.metadata?.text || '';
        return content.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className="text-entries">
            <div className="entries-header">
                <h3>
                    <FileText size={18} />
                    Project Notes
                </h3>
                <div className="entries-search">
                    <Search size={14} />
                    <input
                        type="text"
                        placeholder="Search notes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>
            </div>

            <div className="entries-input-wrapper">
                <textarea
                    className="input entry-textarea"
                    placeholder="Type a note... (Ctrl+Enter to add)"
                    value={newEntry}
                    onChange={(e) => setNewEntry(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <div className="entries-input-actions">
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

            <div className="entries-content">
                {filteredResources.length === 0 ? (
                    <div className="entries-empty">
                        <FileText size={48} />
                        <h3>{searchQuery ? 'No matching notes' : 'No notes yet'}</h3>
                        <p>{searchQuery ? 'Try a different search term.' : 'Add notes, ideas, or logs for this version.'}</p>
                    </div>
                ) : (
                    <div className="entries-list">
                        {filteredResources.map((entry) => (
                            <div key={entry.id} className={`entry-card ${editingId === entry.id ? 'editing' : ''}`}>
                                <div className="entry-header">
                                    <span className="entry-timestamp">
                                        <Clock size={12} />
                                        {formatDate(entry.createdAt)}
                                    </span>
                                    <div className="entry-actions">
                                        {editingId === entry.id ? (
                                            <>
                                                <button
                                                    className="btn btn-icon btn-ghost btn-sm text-success"
                                                    onClick={() => saveEdit(entry.id)}
                                                    title="Save (Ctrl+Enter)"
                                                >
                                                    <Check size={14} />
                                                </button>
                                                <button
                                                    className="btn btn-icon btn-ghost btn-sm"
                                                    onClick={cancelEditing}
                                                    title="Cancel (Esc)"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    className="btn btn-icon btn-ghost btn-sm"
                                                    onClick={() => startEditing(entry)}
                                                    title="Edit note"
                                                >
                                                    <Edit2 size={14} />
                                                </button>
                                                <button
                                                    className="btn btn-icon btn-ghost btn-sm text-error"
                                                    onClick={() => deleteResource(entry.id)}
                                                    title="Delete note"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                                {editingId === entry.id ? (
                                    <textarea
                                        className="input entry-edit-textarea"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        onKeyDown={(e) => handleEditKeyDown(e, entry.id)}
                                        autoFocus
                                    />
                                ) : (
                                    <div
                                        className="entry-content"
                                        onClick={() => startEditing(entry)}
                                    >
                                        {entry.metadata?.content || entry.metadata?.text || ''}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TextEntriesManager;
