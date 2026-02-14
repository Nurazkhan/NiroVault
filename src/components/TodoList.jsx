import { useState } from 'react';
import { useStore } from '../lib/store';
import { CheckSquare, Square, Check, Plus, Trash2 } from 'lucide-react';
import './styles/TodoList.css';

function TodoList({ version }) {
    const { updateVersion } = useStore();
    const [newTodo, setNewTodo] = useState('');

    const todos = version?.todos || [];

    const addTodo = () => {
        if (!newTodo.trim() || !version) return;

        const newTodoItem = {
            id: Date.now(),
            text: newTodo.trim(),
            completed: false,
            createdAt: new Date()
        };

        updateVersion(version.id, {
            todos: [...todos, newTodoItem]
        });

        setNewTodo('');
    };

    const toggleTodo = (todoId) => {
        // Optimistic: update store immediately without awaiting
        updateVersion(version.id, {
            todos: todos.map(t =>
                t.id === todoId ? { ...t, completed: !t.completed } : t
            )
        });
    };

    const deleteTodo = (todoId) => {
        updateVersion(version.id, {
            todos: todos.filter(t => t.id !== todoId)
        });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
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

    const completedCount = todos.filter(t => t.completed).length;
    const progress = todos.length > 0 ? (completedCount / todos.length) * 100 : 0;

    return (
        <div className="todo-list">
            <div className="todo-header">
                <div className="todo-stats">
                    <span className="todo-count">
                        {completedCount} / {todos.length} completed
                    </span>
                    {todos.length > 0 && (
                        <div className="progress-bar todo-progress">
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className="todo-input-wrapper">
                <input
                    type="text"
                    className="input todo-input"
                    placeholder="Add a new task..."
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button
                    className="btn btn-primary"
                    onClick={addTodo}
                    disabled={!newTodo.trim()}
                >
                    <Plus size={18} />
                    Add
                </button>
            </div>

            {todos.length === 0 ? (
                <div className="todo-empty">
                    <CheckSquare size={48} />
                    <h3>No tasks yet</h3>
                    <p>Add tasks to track what needs to be done for this version</p>
                </div>
            ) : (
                <ul className="todo-items">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className={`todo-item ${todo.completed ? 'completed' : ''}`}
                        >
                            <button
                                className="todo-checkbox"
                                onClick={() => toggleTodo(todo.id)}
                            >
                                {todo.completed ? (
                                    <Check size={16} />
                                ) : (
                                    <Square size={16} />
                                )}
                            </button>

                            <div className="todo-text-wrapper">
                                <span className="todo-text">{todo.text}</span>
                                {todo.createdAt && (
                                    <span className="todo-time">{formatTimeAgo(todo.createdAt)}</span>
                                )}
                            </div>

                            <button
                                className="btn btn-icon btn-ghost btn-sm todo-delete"
                                onClick={() => deleteTodo(todo.id)}
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

export default TodoList;
