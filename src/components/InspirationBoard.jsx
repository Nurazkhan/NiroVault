import { useState, useCallback, useEffect } from 'react';
import { useStore } from '../lib/store';
import {
    Lightbulb, Plus, Trash2, Search, X, Tag, Image as ImageIcon,
    ExternalLink, Clipboard, ArrowLeft
} from 'lucide-react';
import './styles/InspirationBoard.css';

function InspirationBoard() {
    const {
        inspirations,
        addInspiration,
        deleteInspiration,
        setCurrentView
    } = useStore();

    const [searchQuery, setSearchQuery] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form state
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tagInput, setTagInput] = useState('');
    const [tags, setTags] = useState([]);
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [url, setUrl] = useState('');
    const [isDragging, setIsDragging] = useState(false);

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setTagInput('');
        setTags([]);
        setImage(null);
        setImagePreview(null);
        setUrl('');
        setShowAddForm(false);
    };

    const addTag = () => {
        const tag = tagInput.trim().toLowerCase();
        if (tag && !tags.includes(tag)) {
            setTags([...tags, tag]);
        }
        setTagInput('');
    };

    const removeTag = (tagToRemove) => {
        setTags(tags.filter(t => t !== tagToRemove));
    };

    const handleTagKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag();
        } else if (e.key === 'Backspace' && !tagInput && tags.length > 0) {
            setTags(tags.slice(0, -1));
        }
    };

    const handleImageChange = (file) => {
        if (file && file.type.startsWith('image/')) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
    const handleDragLeave = (e) => { e.preventDefault(); setIsDragging(false); };
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files.length > 0) {
            handleImageChange(e.dataTransfer.files[0]);
        }
    };

    // Paste support
    const handlePaste = useCallback((e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        const items = e.clipboardData?.items;
        if (!items) return;
        for (let i = 0; i < items.length; i++) {
            if (items[i].kind === 'file' && items[i].type.startsWith('image/')) {
                const file = items[i].getAsFile();
                if (file) {
                    e.preventDefault();
                    handleImageChange(new File([file], `inspiration-${Date.now()}.png`, { type: file.type }));
                    break;
                }
            }
        }
    }, []);

    useEffect(() => {
        if (showAddForm) {
            document.addEventListener('paste', handlePaste);
            return () => document.removeEventListener('paste', handlePaste);
        }
    }, [showAddForm, handlePaste]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        setIsSubmitting(true);
        try {
            await addInspiration({
                title: title.trim(),
                description: description.trim(),
                tags,
                image,
                url: url.trim()
            });
            resetForm();
        } catch (error) {
            console.error('Failed to add inspiration:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (id) => {
        if (confirm('Delete this inspiration?')) {
            await deleteInspiration(id);
        }
    };

    // Filter by search (title, description, or tags)
    const filteredInspirations = inspirations.filter(item => {
        const q = searchQuery.toLowerCase();
        if (!q) return true;
        return (
            item.title?.toLowerCase().includes(q) ||
            item.description?.toLowerCase().includes(q) ||
            item.tags?.some(t => t.toLowerCase().includes(q))
        );
    });

    // Collect all unique tags for quick filter
    const allTags = [...new Set(inspirations.flatMap(i => i.tags || []))];

    const formatDate = (date) => {
        if (!date) return '';
        return new Intl.DateTimeFormat('en-US', {
            month: 'short', day: 'numeric', year: 'numeric'
        }).format(date);
    };

    return (
        <div className="inspiration-board">
            <div className="inspiration-header">
                <div className="inspiration-header-left">
                    <button
                        className="btn btn-icon btn-ghost"
                        onClick={() => setCurrentView('projects')}
                        title="Back to Projects"
                    >
                        <ArrowLeft size={18} />
                    </button>
                    <h2>
                        <Lightbulb size={22} />
                        Inspiration Board
                    </h2>
                </div>
                <div className="inspiration-header-right">
                    <div className="inspiration-search">
                        <Search size={14} />
                        <input
                            type="text"
                            placeholder="Search by title, tag..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                    </div>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={() => setShowAddForm(true)}
                    >
                        <Plus size={16} />
                        Add
                    </button>
                </div>
            </div>

            {/* Quick tag filters */}
            {allTags.length > 0 && (
                <div className="inspiration-tags-filter">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            className={`tag-chip ${searchQuery === tag ? 'active' : ''}`}
                            onClick={() => setSearchQuery(searchQuery === tag ? '' : tag)}
                        >
                            <Tag size={10} />
                            {tag}
                        </button>
                    ))}
                </div>
            )}

            {/* Add form overlay */}
            {showAddForm && (
                <div className="inspiration-form-overlay" onClick={() => resetForm()}>
                    <div className="inspiration-form" onClick={e => e.stopPropagation()}>
                        <div className="form-header">
                            <h3>Add Inspiration</h3>
                            <button className="btn btn-icon btn-ghost" onClick={() => resetForm()}>
                                <X size={18} />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="label">Title *</label>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="What inspired you?"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    autoFocus
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="label">Description</label>
                                <textarea
                                    className="input textarea"
                                    placeholder="Notes or details..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={3}
                                />
                            </div>

                            <div className="form-group">
                                <label className="label">URL</label>
                                <input
                                    type="url"
                                    className="input"
                                    placeholder="https://..."
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label className="label">Tags</label>
                                <div className="tags-input-wrapper">
                                    {tags.map(tag => (
                                        <span key={tag} className="tag-chip">
                                            {tag}
                                            <button type="button" onClick={() => removeTag(tag)}>
                                                <X size={10} />
                                            </button>
                                        </span>
                                    ))}
                                    <input
                                        type="text"
                                        className="tag-text-input"
                                        placeholder={tags.length === 0 ? 'Type and press Enter...' : ''}
                                        value={tagInput}
                                        onChange={(e) => setTagInput(e.target.value)}
                                        onKeyDown={handleTagKeyDown}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="label">Image</label>
                                {imagePreview ? (
                                    <div className="image-preview">
                                        <img src={imagePreview} alt="Preview" />
                                        <button
                                            type="button"
                                            className="btn btn-icon btn-ghost image-remove"
                                            onClick={() => { setImage(null); setImagePreview(null); }}
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                ) : (
                                    <label
                                        className={`dropzone ${isDragging ? 'active' : ''}`}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                    >
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleImageChange(e.target.files[0])}
                                            hidden
                                        />
                                        <ImageIcon size={20} />
                                        <span>Click, drag, or <strong>paste</strong></span>
                                        <div className="dropzone-hint">
                                            <Clipboard size={12} />
                                            <span>Ctrl+V</span>
                                        </div>
                                    </label>
                                )}
                            </div>

                            <div className="form-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => resetForm()}>
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={!title.trim() || isSubmitting}
                                >
                                    {isSubmitting ? 'Adding...' : 'Add Inspiration'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Grid of cards */}
            <div className="inspiration-content">
                {filteredInspirations.length === 0 ? (
                    <div className="inspiration-empty">
                        <Lightbulb size={48} />
                        <h3>{searchQuery ? 'No matching inspirations' : 'No inspirations yet'}</h3>
                        <p>{searchQuery ? 'Try different search terms.' : 'Collect ideas, references, and resources that inspire you.'}</p>
                    </div>
                ) : (
                    <div className="inspiration-grid">
                        {filteredInspirations.map(item => (
                            <div key={item.id} className="inspiration-card">
                                {item.imageUrl && (
                                    <div className="inspiration-card-image">
                                        <img src={item.imageUrl} alt={item.title} loading="lazy" />
                                    </div>
                                )}
                                <div className="inspiration-card-body">
                                    <div className="inspiration-card-top">
                                        <h4>{item.title}</h4>
                                        <button
                                            className="btn btn-icon btn-ghost btn-xs inspiration-delete"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            <Trash2 size={13} />
                                        </button>
                                    </div>
                                    {item.description && (
                                        <p className="inspiration-card-desc">{item.description}</p>
                                    )}
                                    {item.url && (
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inspiration-card-link"
                                        >
                                            <ExternalLink size={12} />
                                            {new URL(item.url).hostname}
                                        </a>
                                    )}
                                    {item.tags?.length > 0 && (
                                        <div className="inspiration-card-tags">
                                            {item.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="tag-chip tag-chip-sm"
                                                    onClick={() => setSearchQuery(tag)}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <span className="inspiration-card-date">
                                        {formatDate(item.createdAt)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InspirationBoard;
