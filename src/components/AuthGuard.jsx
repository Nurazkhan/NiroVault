import { useStore } from '../lib/store';
import { LogIn, CircuitBoard } from 'lucide-react';
import './styles/AuthGuard.css';

function AuthGuard({ children }) {
    const { user, authLoading, login } = useStore();

    if (authLoading) {
        return (
            <div className="auth-loading">
                <div className="loading-spinner"></div>
                <p>Connecting to NiroVault Cloud...</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-logo">
                        <CircuitBoard size={48} />
                        <h1>NiroVault</h1>
                    </div>
                    <p className="auth-subtitle">Sync your electronics projects across all devices</p>

                    <button className="btn btn-primary btn-lg auth-btn" onClick={login}>
                        <LogIn size={20} />
                        Sign in with Google
                    </button>

                    <div className="auth-features">
                        <div className="feature-item">
                            <span>☁️</span>
                            <p>Real-time Cloud Sync</p>
                        </div>
                        <div className="feature-item">
                            <span>📱</span>
                            <p>Mobile Accessible</p>
                        </div>
                        <div className="feature-item">
                            <span>🔒</span>
                            <p>Secure Storage</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return children;
}

export default AuthGuard;
