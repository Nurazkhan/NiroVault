import { useState, useCallback } from 'react';
import { useStore } from '../lib/store';
import { getAllProjectTasksAndNotes } from '../lib/db';
import {
    CheckSquare, Square, Check, Plus, Trash2, FileText,
    ChevronDown, ChevronRight, ArrowLeft, Layers, Edit2, X
} from 'lucide-react';
import './styles/GlobalTasksPage.css';

function GlobalTasksPage() {
    const {
        globalTasks,
        globalNotes,
        addGlobalTask,
        toggleGlobalTask,
        deleteGlobalTask,
        addGlobalNote,
        updateGlobalNote,
        deleteGlobalNote,
        setCurrentView
    } = useStore();

    const [activeTab, setActiveTab] = useState('tasks'); // 'tasks' | 'notes'
    const [newTask, setNewTask] = useState('');
    const [newNote, setNewNote] = useState('');

    // Project aggregation state (loaded on-demand)
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [projectData, setProjectData] = useState([]);
    const [isLoadingProjects, setIsLoadingProjects] = useState(false);
    const [expandedProjects, setExpandedProjects] = useState({});

    // Note editing state
    const [editingNoteId, setEditingNoteId] = useState(null);
    const [editNoteContent, setEditNoteContent] = useState('');

    // ─── Task helpers ───
    const handleAddTask = async () => {
        if (!newTask.trim()) return;
        await addGlobalTask(newTask.trim());
        setNewTask('');
    };

    const handleTaskKeyDown = (e) => {
        if (e.key === 'Enter') handleAddTask();
    };

    // ─── Note helpers ───
    const handleAddNote = async () => {
        if (!newNote.trim()) return;
        await addGlobalNote(newNote.trim());
        setNewNote('');
    };

    const handleNoteKeyDown = (e) => {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) handleAddNote();
    };

    const startEditNote = (note) => {
        setEditingNoteId(note.id);
        setEditNoteContent(note.content);
    };

    const saveEditNote = async () => {
        if (editNoteContent.trim() && editingNoteId) {
            await updateGlobalNote(editingNoteId, editNoteContent.trim());
        }
        setEditingNoteId(null);
        setEditNoteContent('');
    };

    // ─── Project aggregation ───
    const handleToggleShowAll = useCallback(async () => {
        if (showAllProjects) {
            setShowAllProjects(false);
            return;
        }
        setIsLoadingProjects(true);
        try {
            const data = await getAllProjectTasksAndNotes();
            setProjectData(data);
            setShowAllProjects(true);
        } catch (err) {
            console.error('Failed to load project data:', err);
        } finally {
            setIsLoadingProjects(false);
        }
    }, [showAllProjects]);

    const toggleProjectExpanded = (projectId) => {
        setExpandedProjects(prev => ({
            ...prev,
            [projectId]: !prev[projectId]
        }));
    };

    const formatTimeAgo = (date) => {
        if (!date) return '';
        const d = date instanceof Date ? date : new Date(date?.seconds ? date.seconds * 1000 : date);
        if (isNaN(d.getTime())) return '';
        const now = new Date();
        const diffMs = now - d;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);
        if (diffMins < 1) return 'just now';
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 30) return `${diffDays}d ago`;
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    const completedCount = globalTasks.filter(t => t.completed).length;
    const progress = globalTasks.length > 0 ? (completedCount / globalTasks.length) * 100 : 0;

    return (
        <div className="global-tasks-page">
            {/* Header */}
            <div className="gtp-header">
                <div className="gtp-header-left">
                    <button
                        className="btn btn-icon btn-ghost"
                        onClick={() => setCurrentView('projects')}
                        title="Back to Projects"
                    >
                        <ArrowLeft size={18} />
                    </button>
                    <h2>
                        <CheckSquare size={22} />
                        Tasks & Notes
                    </h2>
                </div>
            </div>

            {/* Tabs */}
            <div className="gtp-tabs">
                <button
                    className={`gtp-tab ${activeTab === 'tasks' ? 'active' : ''}`}
                    onClick={() => setActiveTab('tasks')}
                >
                    <CheckSquare size={15} />
                    Tasks
                    {globalTasks.length > 0 && (
                        <span className="gtp-tab-badge">{globalTasks.length}</span>
                    )}
                </button>
                <button
                    className={`gtp-tab ${activeTab === 'notes' ? 'active' : ''}`}
                    onClick={() => setActiveTab('notes')}
                >
                    <FileText size={15} />
                    Notes
                    {globalNotes.length > 0 && (
                        <span className="gtp-tab-badge">{globalNotes.length}</span>
                    )}
                </button>
            </div>

            <div className="gtp-content">
                {/* ─── Tasks Tab ─── */}
                {activeTab === 'tasks' && (
                    <div className="gtp-section">
                        {/* Add task input */}
                        <div className="gtp-input-wrapper">
                            <input
                                type="text"
                                className="input gtp-input"
                                placeholder="Add a general task..."
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                onKeyDown={handleTaskKeyDown}
                            />
                            <button
                                className="btn btn-primary"
                                onClick={handleAddTask}
                                disabled={!newTask.trim()}
                            >
                                <Plus size={18} />
                                Add
                            </button>
                        </div>

                        {/* Progress */}
                        {globalTasks.length > 0 && (
                            <div className="gtp-stats">
                                <span className="gtp-count">
                                    {completedCount} / {globalTasks.length} completed
                                </span>
                                <div className="progress-bar gtp-progress">
                                    <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
                                </div>
                            </div>
                        )}

                        {/* Task list */}
                        {globalTasks.length === 0 ? (
                            <div className="gtp-empty">
                                <CheckSquare size={40} />
                                <h3>No general tasks yet</h3>
                                <p>Add tasks that aren't tied to any project.</p>
                            </div>
                        ) : (
                            <ul className="gtp-task-list">
                                {globalTasks.map(task => (
                                    <li key={task.id} className={`gtp-task-item ${task.completed ? 'completed' : ''}`}>
                                        <button
                                            className="gtp-task-checkbox"
                                            onClick={() => toggleGlobalTask(task.id, task.completed)}
                                        >
                                            {task.completed ? <Check size={16} /> : <Square size={16} />}
                                        </button>
                                        <div className="gtp-task-text-wrapper">
                                            <span className="gtp-task-text">{task.text}</span>
                                            {task.createdAt && (
                                                <span className="gtp-task-time">{formatTimeAgo(task.createdAt)}</span>
                                            )}
                                        </div>
                                        <button
                                            className="btn btn-icon btn-ghost btn-sm gtp-task-delete"
                                            onClick={() => deleteGlobalTask(task.id)}
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Show all project tasks */}
                        <div className="gtp-show-all">
                            <button
                                className={`btn btn-secondary gtp-show-all-btn ${showAllProjects ? 'active' : ''}`}
                                onClick={handleToggleShowAll}
                                disabled={isLoadingProjects}
                            >
                                <Layers size={16} />
                                {isLoadingProjects
                                    ? 'Loading...'
                                    : showAllProjects
                                        ? 'Hide Project Tasks'
                                        : 'Show All Project Tasks'
                                }
                            </button>
                        </div>

                        {showAllProjects && (
                            <div className="gtp-project-sections">
                                {projectData.length === 0 ? (
                                    <p className="gtp-no-project-data">No project tasks found.</p>
                                ) : (
                                    projectData.filter(p => p.todos.length > 0).map(project => (
                                        <div key={project.projectId} className="gtp-project-group">
                                            <button
                                                className="gtp-project-header"
                                                onClick={() => toggleProjectExpanded(project.projectId)}
                                            >
                                                {expandedProjects[project.projectId]
                                                    ? <ChevronDown size={16} />
                                                    : <ChevronRight size={16} />
                                                }
                                                <span className="gtp-project-name">{project.projectName}</span>
                                                <span className="gtp-project-count">
                                                    {project.todos.filter(t => t.completed).length}/{project.todos.length}
                                                </span>
                                            </button>
                                            {expandedProjects[project.projectId] && (
                                                <ul className="gtp-task-list gtp-task-list-nested">
                                                    {project.todos.map(todo => (
                                                        <li
                                                            key={todo.id}
                                                            className={`gtp-task-item ${todo.completed ? 'completed' : ''}`}
                                                        >
                                                            <span className="gtp-task-checkbox read-only">
                                                                {todo.completed ? <Check size={14} /> : <Square size={14} />}
                                                            </span>
                                                            <span className="gtp-task-text">{todo.text}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* ─── Notes Tab ─── */}
                {activeTab === 'notes' && (
                    <div className="gtp-section">
                        {/* Add note input */}
                        <div className="gtp-input-wrapper gtp-note-input-wrapper">
                            <textarea
                                className="input gtp-textarea"
                                placeholder="Write a general note... (Ctrl+Enter to add)"
                                value={newNote}
                                onChange={(e) => setNewNote(e.target.value)}
                                onKeyDown={handleNoteKeyDown}
                                rows={3}
                            />
                            <button
                                className="btn btn-primary gtp-note-add-btn"
                                onClick={handleAddNote}
                                disabled={!newNote.trim()}
                            >
                                <Plus size={18} />
                                Add
                            </button>
                        </div>

                        {/* Notes list */}
                        {globalNotes.length === 0 ? (
                            <div className="gtp-empty">
                                <FileText size={40} />
                                <h3>No general notes yet</h3>
                                <p>Jot down notes that aren't tied to any project.</p>
                            </div>
                        ) : (
                            <div className="gtp-notes-list">
                                {globalNotes.map(note => (
                                    <div key={note.id} className="gtp-note-card">
                                        {editingNoteId === note.id ? (
                                            <div className="gtp-note-editing">
                                                <textarea
                                                    className="input gtp-textarea"
                                                    value={editNoteContent}
                                                    onChange={(e) => setEditNoteContent(e.target.value)}
                                                    autoFocus
                                                    rows={3}
                                                />
                                                <div className="gtp-note-edit-actions">
                                                    <button className="btn btn-primary btn-sm" onClick={saveEditNote}>
                                                        <Check size={14} /> Save
                                                    </button>
                                                    <button
                                                        className="btn btn-secondary btn-sm"
                                                        onClick={() => setEditingNoteId(null)}
                                                    >
                                                        <X size={14} /> Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <p className="gtp-note-content">{note.content}</p>
                                                <div className="gtp-note-footer">
                                                    <span className="gtp-note-time">
                                                        {formatTimeAgo(note.createdAt)}
                                                    </span>
                                                    <div className="gtp-note-actions">
                                                        <button
                                                            className="btn btn-icon btn-ghost btn-xs"
                                                            onClick={() => startEditNote(note)}
                                                        >
                                                            <Edit2 size={13} />
                                                        </button>
                                                        <button
                                                            className="btn btn-icon btn-ghost btn-xs"
                                                            onClick={() => deleteGlobalNote(note.id)}
                                                        >
                                                            <Trash2 size={13} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Show all project notes */}
                        <div className="gtp-show-all">
                            <button
                                className={`btn btn-secondary gtp-show-all-btn ${showAllProjects ? 'active' : ''}`}
                                onClick={handleToggleShowAll}
                                disabled={isLoadingProjects}
                            >
                                <Layers size={16} />
                                {isLoadingProjects
                                    ? 'Loading...'
                                    : showAllProjects
                                        ? 'Hide Project Notes'
                                        : 'Show All Project Notes'
                                }
                            </button>
                        </div>

                        {showAllProjects && (
                            <div className="gtp-project-sections">
                                {projectData.length === 0 ? (
                                    <p className="gtp-no-project-data">No project notes found.</p>
                                ) : (
                                    projectData.filter(p => p.notes.length > 0).map(project => (
                                        <div key={project.projectId} className="gtp-project-group">
                                            <button
                                                className="gtp-project-header"
                                                onClick={() => toggleProjectExpanded(project.projectId)}
                                            >
                                                {expandedProjects[project.projectId]
                                                    ? <ChevronDown size={16} />
                                                    : <ChevronRight size={16} />
                                                }
                                                <span className="gtp-project-name">{project.projectName}</span>
                                                <span className="gtp-project-count">
                                                    {project.notes.length} note{project.notes.length !== 1 ? 's' : ''}
                                                </span>
                                            </button>
                                            {expandedProjects[project.projectId] && (
                                                <div className="gtp-notes-list gtp-notes-list-nested">
                                                    {project.notes.map(note => (
                                                        <div key={note.id} className="gtp-note-card gtp-note-card-readonly">
                                                            <p className="gtp-note-content">
                                                                {note.metadata?.content || note.content || ''}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default GlobalTasksPage;
