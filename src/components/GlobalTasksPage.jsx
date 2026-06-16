import { useState, useCallback } from 'react';
import { useStore } from '../lib/store';
import { getAllProjectTasksAndNotes } from '../lib/db';
import {
    CheckSquare, Square, Check, Plus, Trash2,
    ChevronDown, ChevronRight, ArrowLeft, Layers
} from 'lucide-react';
import './styles/GlobalTasksPage.css';

function GlobalTasksPage() {
    const {
        globalTasks,
        addGlobalTask,
        toggleGlobalTask,
        deleteGlobalTask,
        setCurrentView
    } = useStore();

    const [newTask, setNewTask] = useState('');

    // Project aggregation state (loaded on-demand)
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [projectData, setProjectData] = useState([]);
    const [isLoadingProjects, setIsLoadingProjects] = useState(false);
    const [expandedProjects, setExpandedProjects] = useState({});

    // ─── Task helpers ───
    const handleAddTask = async () => {
        if (!newTask.trim()) return;
        await addGlobalTask(newTask.trim());
        setNewTask('');
    };

    const handleTaskKeyDown = (e) => {
        if (e.key === 'Enter') handleAddTask();
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
                        Tasks
                    </h2>
                </div>
            </div>

            <div className="gtp-content">
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
            </div>
        </div>
    );
}

export default GlobalTasksPage;
