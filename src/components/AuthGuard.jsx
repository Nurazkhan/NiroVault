import { useStore } from '../lib/store';
import { CircuitBoard, LogIn } from 'lucide-react';
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
                    <p className="auth-subtitle">Sync your electronics projects with Vercel storage</p>

                    <button className="btn btn-primary btn-lg auth-btn" onClick={login}>
                        <LogIn size={20} />
                        Continue to Vault
                    </button>

                    <div className="auth-features">
                        <div className="feature-item">
                            <span>Cloud</span>
                            <p>Vercel API Sync</p>
                        </div>
                        <div className="feature-item">
                            <span>DB</span>
                            <p>Neon Records</p>
                        </div>
                        <div className="feature-item">
                            <span>Blob</span>
                            <p>Vercel File Storage</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return children;
}

export default AuthGuard;
