import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Do not render navbar if user is not logged in
  if (!user) return null;

  const handleLogout = async () => {
    try {
      const { data } = await axios.post('/logout');
      setUser(null);
      toast.success('Logged out successfully');
      navigate('/login');
    } catch (err) {
      console.error('Logout error:', err);
      toast.error('Failed to log out');
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"/>
        </svg>
        <span>AuthGate</span>
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <div className="user-widget">
          <div className="user-avatar" title={user.email}>
            {user.name ? user.name[0].toUpperCase() : 'U'}
          </div>
          <span className="user-name">{user.name}</span>
          <button onClick={handleLogout} className="nav-btn-secondary">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
