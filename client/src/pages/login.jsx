import { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { UserContext } from '../context/userContext';

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Redirect to home if user is already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post('/login', {
        email,
        password
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setUser(response.data);
        toast.success('Welcome back!');
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Failed to log in. Please check your credentials.');
    }
  };

  return (
    <div className="page-container">
      <div className="card-container">
        <div className="card-body">
          <div className="form-header">
            <h2>Welcome back</h2>
            <p>Enter your email and password to sign in to your account</p>
          </div>
          <form onSubmit={loginUser}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="name@example.com"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  type="password"
                  id="password"
                  className="form-input"
                  placeholder="********"
                  value={data.password}
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn-submit">
              Sign in
            </button>
          </form>
        </div>
        <div className="form-footer">
          Don't have an account? <Link to="/register">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
