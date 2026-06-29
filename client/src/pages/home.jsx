import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import Login from './login';

export default function Home() {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <div className="page-container">
        <p style={{ color: 'var(--text-muted)' }}>Loading session...</p>
      </div>
    );
  }

  // If not logged in, render the Login component directly
  if (!user) {
    return <Login />;
  }

  return (
    <div className="home-container">
      <h1 className="welcome-title">Welcome, {user.name}!</h1>
      <p className="welcome-subtitle">
        You have successfully authenticated. Here is your active session profile data.
      </p>

      <div className="profile-card">
        <div className="profile-avatar-big">
          {user.name ? user.name[0].toUpperCase() : 'U'}
        </div>
        
        <div className="profile-info">
          <div className="info-item">
            <span className="info-label">Account Name</span>
            <span className="info-value">{user.name}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email Address</span>
            <span className="info-value">{user.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">User ID (DB)</span>
            <span className="info-value" style={{ fontSize: '0.85rem', fontFamily: 'monospace' }}>{user.id || user._id}</span>
          </div>
        </div>
      </div>

      <div className="edu-card">
        <div className="edu-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <span>Educational Note</span>
        </div>
        <p className="edu-text">
          You are viewing a protected route. Your browser attached a JWT token to the request that loaded this profile data. If you log out, that token is deleted and you'll be redirected back to the login page.
        </p>
      </div>
    </div>
  );
}
