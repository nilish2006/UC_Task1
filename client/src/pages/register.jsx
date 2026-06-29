import { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { UserContext } from '../context/userContext';

export default function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // Redirect to home if user is already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const response = await axios.post('/register', {
        name,
        email,
        password
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({ name: '', email: '', password: '' });
        toast.success('Registration successful! Welcome aboard.');
        navigate('/login');
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="page-container">
      <div className="card-container">
        <div className="card-body">
          <div className="form-header">
            <h2>Create an account</h2>
            <p>Enter your details below to create your account</p>
          </div>
          <form onSubmit={registerUser}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Enter Name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  required
                />
              </div>
            </div>
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
                  placeholder="••••••••"
                  value={data.password}
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn-submit">
              Sign up
            </button>
          </form>
        </div>
        <div className="form-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
