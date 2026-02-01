import { useState } from 'react';
import { useStore } from '../lib/store';
import { Link, Plus, Trash2, ExternalLink, MessageSquare, Bot } from 'lucide-react';
import './styles/AILinksManager.css';

function AILinksManager({ resources }) {
    const { addResource, deleteResource, currentVersion } = useStore();
    const [showForm, setShowForm] = useState(false);
    const [newLink, setNewLink] = useState({ name: '', url: '', description: '' });

    const handleAddLink = async () => {
        if (!newLink.url.trim() || !currentVersion) return;

        await addResource(currentVersion.id, {
            type: 'link',
            name: newLink.name.trim() || getDefaultName(newLink.url),
            url: newLink.url.trim(),
            metadata: {
                description: newLink.description.trim(),
                platform: detectPlatform(newLink.url)
            }
        });

        setNewLink({ name: '', url: '', description: '' });
        setShowForm(false);
    };

    const getDefaultName = (url) => {
        try {
            const hostname = new URL(url).hostname;
            return `Chat - ${hostname}`;
        } catch {
            return 'AI Chat Link';
        }
    };

    const detectPlatform = (url) => {
        const urlLower = url.toLowerCase();
        if (urlLower.includes('chat.openai') || urlLower.includes('chatgpt')) return 'chatgpt';
        if (urlLower.includes('claude.ai')) return 'claude';
        if (urlLower.includes('gemini.google') || urlLower.includes('bard')) return 'gemini';
        if (urlLower.includes('copilot')) return 'copilot';
        if (urlLower.includes('perplexity')) return 'perplexity';
        return 'other';
    };

    const getPlatformIcon = (platform) => {
        const icons = {
            chatgpt: '🤖',
            claude: '🧠',
            gemini: '✨',
            copilot: '💻',
            perplexity: '🔍',
            other: '💬'
        };
        return icons[platform] || icons.other;
    };

    const getPlatformColor = (platform) => {
        const colors = {
            chatgpt: '#10a37f',
            claude: '#cc785c',
            gemini: '#8e44ad',
            copilot: '#0078d4',
            perplexity: '#1db954',
            other: 'var(--color-accent)'
        };
        return colors[platform] || colors.other;
    };

    return (
        <div className="ai-links">
            <div className="ai-links-header">
                <h3>
                    <MessageSquare size={18} />
                    AI Chat Links
                </h3>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setShowForm(!showForm)}
                >
                    <Plus size={16} />
                    Add Link
                </button>
            </div>

            {showForm && (
                <div className="ai-link-form">
                    <input
                        type="url"
                        className="input"
                        placeholder="https://chat.openai.com/..."
                        value={newLink.url}
                        onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                        autoFocus
                    />
                    <input
                        type="text"
                        className="input"
                        placeholder="Name (optional)"
                        value={newLink.name}
                        onChange={(e) => setNewLink({ ...newLink, name: e.target.value })}
                    />
                    <textarea
                        className="input textarea"
                        placeholder="What was this chat about? (optional)"
                        value={newLink.description}
                        onChange={(e) => setNewLink({ ...newLink, description: e.target.value })}
                        rows={2}
                    />
                    <div className="form-actions">
                        <button className="btn btn-ghost" onClick={() => setShowForm(false)}>
                            Cancel
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={handleAddLink}
                            disabled={!newLink.url.trim()}
                        >
                            Add Link
                        </button>
                    </div>
                </div>
            )}

            {resources.length === 0 ? (
                <div className="ai-links-empty">
                    <Bot size={48} />
                    <h3>No AI chat links yet</h3>
                    <p>Save links to AI conversations you used for this project</p>
                </div>
            ) : (
                <div className="ai-links-grid">
                    {resources.map((link) => {
                        const platform = link.metadata?.platform || 'other';
                        return (
                            <a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ai-link-card"
                                style={{ '--platform-color': getPlatformColor(platform) }}
                            >
                                <div className="ai-link-icon">
                                    {getPlatformIcon(platform)}
                                </div>

                                <div className="ai-link-content">
                                    <h4 className="ai-link-name">{link.name}</h4>
                                    {link.metadata?.description && (
                                        <p className="ai-link-description truncate">
                                            {link.metadata.description}
                                        </p>
                                    )}
                                    <span className="ai-link-url truncate">{link.url}</span>
                                </div>

                                <div className="ai-link-actions">
                                    <ExternalLink size={16} />
                                    <button
                                        className="btn btn-icon btn-ghost btn-sm"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            deleteResource(link.id);
                                        }}
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default AILinksManager;
