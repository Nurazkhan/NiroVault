import { useState } from 'react';
import { useStore } from '../lib/store';
import { CheckSquare, Square, Check, Plus, Trash2, GripVertical } from 'lucide-react';
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

                            <span className="todo-text">{todo.text}</span>

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
