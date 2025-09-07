import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const { data: responseData } = await axios.post('/login', {
        email,
        password,
      });

      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData({ email: '', password: '' }); // Reset form fields
        toast.success('Login successful. Welcome!');
        navigate('/dashboard'); // Redirect to dashboard page
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email..."
          name="email"
          value={data.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password..."
          name="password"
          value={data.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
