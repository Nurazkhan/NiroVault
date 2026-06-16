import { useState, useMemo, useRef } from 'react';
import { useStore } from '../lib/store';
import {
    StickyNote, Plus, Trash2, Clock, Search, Edit2, Check, X,
    ArrowLeft, ImagePlus, Tag, FolderGit2, ChevronDown, ChevronRight
} from 'lucide-react';
import './styles/GlobalNotesPage.css';

// Renders plain text with clickable, highlighted URLs.
function renderContentWithLinks(text) {
    if (!text) return null;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, i) => {
        if (part.match(urlRegex)) {
            return (
                <a
                    key={i}
                    href={part}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gn-link"
                    onClick={(e) => e.stopPropagation()}
                >
                    {part}
                </a>
            );
        }
        return part;
    });
}

function formatTime(date) {
    if (!date) return '';
    const d = date instanceof Date ? date : new Date(date?.seconds ? date.seconds * 1000 : date);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });
}

const COLLAPSE_THRESHOLD = 320; // chars before a note collapses by default

// Shared editor used for both creating and editing a note (inline — never a modal).
function NoteEditor({ initial, projects, onSubmit, onCancel, submitLabel }) {
    const [content, setContent] = useState(initial?.content || '');
    const [tagInput, setTagInput] = useState('');
    const [tags, setTags] = useState(initial?.tags || []);
    const [projectIds, setProjectIds] = useState(initial?.projectIds || []);
    const [imageUrls, setImageUrls] = useState(initial?.imageUrls || []);
    const [pendingFiles, setPendingFiles] = useState([]);
    const [showProjects, setShowProjects] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const fileRef = useRef(null);

    const addTag = () => {
        const t = tagInput.trim().replace(/^#/, '');
        if (t && !tags.includes(t)) setTags([...tags, t]);
        setTagInput('');
    };

    const handleTagKey = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addTag();
        }
    };

    const toggleProject = (id) => {
        setProjectIds((prev) =>
            prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
        );
    };

    const handleFiles = (e) => {
        const files = Array.from(e.target.files || []);
        setPendingFiles((prev) => [...prev, ...files]);
        e.target.value = '';
    };

    const handleSubmit = async () => {
        if (!content.trim() && !pendingFiles.length && !imageUrls.length) return;
        setIsSaving(true);
        try {
            await onSubmit({
                content: content.trim(),
                tags,
                projectIds,
                imageUrls,
                images: pendingFiles
            });
            setContent('');
            setTags([]);
            setProjectIds([]);
            setImageUrls([]);
            setPendingFiles([]);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="gn-editor">
            <textarea
                className="input gn-textarea"
                placeholder="Write a note... paste links and they'll be highlighted. (Ctrl+Enter to save)"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) handleSubmit(); }}
                rows={4}
                autoFocus
            />

            {/* Existing + pending images */}
            {(imageUrls.length > 0 || pendingFiles.length > 0) && (
                <div className="gn-editor-images">
                    {imageUrls.map((url, i) => (
                        <div key={`u-${i}`} className="gn-thumb">
                            <img src={url} alt="" />
                            <button
                                className="gn-thumb-remove"
                                onClick={() => setImageUrls(imageUrls.filter((_, idx) => idx !== i))}
                                title="Remove image"
                            >
                                <X size={12} />
                            </button>
                        </div>
                    ))}
                    {pendingFiles.map((file, i) => (
                        <div key={`p-${i}`} className="gn-thumb gn-thumb-pending">
                            <img src={URL.createObjectURL(file)} alt="" />
                            <button
                                className="gn-thumb-remove"
                                onClick={() => setPendingFiles(pendingFiles.filter((_, idx) => idx !== i))}
                                title="Remove image"
                            >
                                <X size={12} />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Tags */}
            {tags.length > 0 && (
                <div className="gn-tag-row">
                    {tags.map((tag) => (
                        <span key={tag} className="gn-tag gn-tag-editable">
                            #{tag}
                            <button onClick={() => setTags(tags.filter((t) => t !== tag))}>
                                <X size={10} />
                            </button>
                        </span>
                    ))}
                </div>
            )}

            {/* Linked projects */}
            {projectIds.length > 0 && (
                <div className="gn-tag-row">
                    {projectIds.map((id) => {
                        const project = projects.find((p) => p.id === id);
                        if (!project) return null;
                        return (
                            <span key={id} className="gn-chip gn-chip-editable">
                                <FolderGit2 size={11} />
                                {project.name}
                                <button onClick={() => toggleProject(id)}>
                                    <X size={10} />
                                </button>
                            </span>
                        );
                    })}
                </div>
            )}

            {/* Toolbar */}
            <div className="gn-editor-toolbar">
                <div className="gn-tag-input">
                    <Tag size={14} />
                    <input
                        type="text"
                        placeholder="Add tag + Enter"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={handleTagKey}
                        onBlur={addTag}
                    />
                </div>

                <button
                    type="button"
                    className="btn btn-ghost btn-sm gn-tool-btn"
                    onClick={() => fileRef.current?.click()}
                >
                    <ImagePlus size={15} />
                    Image
                </button>
                <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    multiple
                    hidden
                    onChange={handleFiles}
                />

                <button
                    type="button"
                    className={`btn btn-ghost btn-sm gn-tool-btn ${showProjects ? 'active' : ''}`}
                    onClick={() => setShowProjects((s) => !s)}
                >
                    <FolderGit2 size={15} />
                    Link projects
                    {showProjects ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
                </button>

                <div className="gn-editor-actions">
                    {onCancel && (
                        <button className="btn btn-secondary btn-sm" onClick={onCancel}>
                            <X size={14} /> Cancel
                        </button>
                    )}
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={handleSubmit}
                        disabled={isSaving || (!content.trim() && !pendingFiles.length && !imageUrls.length)}
                    >
                        <Check size={15} />
                        {isSaving ? 'Saving…' : submitLabel}
                    </button>
                </div>
            </div>

            {/* Collapsible project picker */}
            {showProjects && (
                <div className="gn-project-picker">
                    {projects.length === 0 ? (
                        <span className="gn-picker-empty">No projects yet.</span>
                    ) : (
                        projects.map((p) => (
                            <button
                                key={p.id}
                                className={`gn-picker-chip ${projectIds.includes(p.id) ? 'active' : ''}`}
                                onClick={() => toggleProject(p.id)}
                            >
                                {projectIds.includes(p.id) && <Check size={12} />}
                                {p.name}
                            </button>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

function NoteCard({ note, projects, onUpdate, onDelete, onOpenProject }) {
    const [editing, setEditing] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const content = note.content || '';
    const isLong = content.length > COLLAPSE_THRESHOLD;
    const shownContent = !isLong || expanded ? content : content.slice(0, COLLAPSE_THRESHOLD) + '…';

    const linkedProjects = (note.projectIds || [])
        .map((id) => projects.find((p) => p.id === id))
        .filter(Boolean);

    if (editing) {
        return (
            <div className="gn-card gn-card-editing">
                <NoteEditor
                    initial={note}
                    projects={projects}
                    submitLabel="Save"
                    onCancel={() => setEditing(false)}
                    onSubmit={async (data) => {
                        await onUpdate(note.id, data);
                        setEditing(false);
                    }}
                />
            </div>
        );
    }

    return (
        <div className="gn-card">
            <div className="gn-card-body">
                {content && (
                    <div className="gn-card-content">
                        {renderContentWithLinks(shownContent)}
                    </div>
                )}

                {isLong && (
                    <button className="gn-expand-btn" onClick={() => setExpanded((e) => !e)}>
                        {expanded ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
                        {expanded ? 'Show less' : 'Show more'}
                    </button>
                )}

                {(note.imageUrls || []).length > 0 && (
                    <div className="gn-card-images">
                        {note.imageUrls.map((url, i) => (
                            <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="gn-card-image">
                                <img src={url} alt="" loading="lazy" />
                            </a>
                        ))}
                    </div>
                )}

                {(note.tags || []).length > 0 && (
                    <div className="gn-tag-row">
                        {note.tags.map((tag) => (
                            <span key={tag} className="gn-tag">#{tag}</span>
                        ))}
                    </div>
                )}

                {linkedProjects.length > 0 && (
                    <div className="gn-tag-row">
                        {linkedProjects.map((p) => (
                            <button key={p.id} className="gn-chip gn-chip-link" onClick={() => onOpenProject(p.id)}>
                                <FolderGit2 size={11} />
                                {p.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="gn-card-footer">
                <span className="gn-time">
                    <Clock size={12} />
                    {formatTime(note.createdAt)}
                </span>
                <div className="gn-card-actions">
                    <button className="btn btn-icon btn-ghost btn-xs" onClick={() => setEditing(true)} title="Edit">
                        <Edit2 size={13} />
                    </button>
                    <button className="btn btn-icon btn-ghost btn-xs" onClick={() => onDelete(note.id)} title="Delete">
                        <Trash2 size={13} />
                    </button>
                </div>
            </div>
        </div>
    );
}

function GlobalNotesPage() {
    const {
        globalNotes, projects,
        addGlobalNote, updateGlobalNote, deleteGlobalNote,
        setCurrentView, selectProject
    } = useStore();

    const [search, setSearch] = useState('');
    const [activeTag, setActiveTag] = useState(null);
    const [composerOpen, setComposerOpen] = useState(false);

    const allTags = useMemo(() => {
        const set = new Set();
        globalNotes.forEach((n) => (n.tags || []).forEach((t) => set.add(t)));
        return Array.from(set).sort();
    }, [globalNotes]);

    const filtered = useMemo(() => {
        const q = search.toLowerCase();
        return globalNotes.filter((n) => {
            const matchesSearch = !q
                || (n.content || '').toLowerCase().includes(q)
                || (n.tags || []).some((t) => t.toLowerCase().includes(q));
            const matchesTag = !activeTag || (n.tags || []).includes(activeTag);
            return matchesSearch && matchesTag;
        });
    }, [globalNotes, search, activeTag]);

    const openProject = (id) => {
        selectProject(id);
        setCurrentView('projects');
    };

    return (
        <div className="gn-page">
            <div className="gn-header">
                <div className="gn-header-left">
                    <button
                        className="btn btn-icon btn-ghost"
                        onClick={() => setCurrentView('projects')}
                        title="Back to Projects"
                    >
                        <ArrowLeft size={18} />
                    </button>
                    <h2>
                        <StickyNote size={22} />
                        Notes
                    </h2>
                    {globalNotes.length > 0 && (
                        <span className="gn-count-badge">{globalNotes.length}</span>
                    )}
                </div>
                <div className="gn-header-right">
                    <div className="gn-search">
                        <Search size={15} />
                        <input
                            type="text"
                            placeholder="Search notes…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    {!composerOpen && (
                        <button className="btn btn-primary btn-sm" onClick={() => setComposerOpen(true)}>
                            <Plus size={16} />
                            New Note
                        </button>
                    )}
                </div>
            </div>

            <div className="gn-content">
                {/* Inline composer (collapsible, not a modal) */}
                {composerOpen && (
                    <div className="gn-card gn-composer">
                        <NoteEditor
                            projects={projects}
                            submitLabel="Add Note"
                            onCancel={() => setComposerOpen(false)}
                            onSubmit={async (data) => {
                                await addGlobalNote(data);
                            }}
                        />
                    </div>
                )}

                {/* Tag filter bar */}
                {allTags.length > 0 && (
                    <div className="gn-tag-filter">
                        <button
                            className={`gn-filter-chip ${!activeTag ? 'active' : ''}`}
                            onClick={() => setActiveTag(null)}
                        >
                            All
                        </button>
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                className={`gn-filter-chip ${activeTag === tag ? 'active' : ''}`}
                                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                            >
                                #{tag}
                            </button>
                        ))}
                    </div>
                )}

                {filtered.length === 0 ? (
                    <div className="gn-empty">
                        <StickyNote size={44} />
                        <h3>{search || activeTag ? 'No matching notes' : 'No notes yet'}</h3>
                        <p>
                            {search || activeTag
                                ? 'Try a different search or tag.'
                                : 'Capture ideas, links, and images that aren’t tied to any project.'}
                        </p>
                        {!search && !activeTag && !composerOpen && (
                            <button className="btn btn-primary" onClick={() => setComposerOpen(true)}>
                                <Plus size={16} /> Write your first note
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="gn-grid">
                        {filtered.map((note) => (
                            <NoteCard
                                key={note.id}
                                note={note}
                                projects={projects}
                                onUpdate={updateGlobalNote}
                                onDelete={deleteGlobalNote}
                                onOpenProject={openProject}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default GlobalNotesPage;
