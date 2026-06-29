import React, { useState } from 'react';
import axios from 'axios'; 
import { toast } from 'react-hot-toast'; 
import { useNavigate } from 'react-router-dom'; 
export default function Register() {
  const navigate = useNavigate(); 

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value }); // Use spread operator for object updates
  };

  // Handle form submission
  const registerUser = async (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)
    const { name, email, password } = data; // Destructure data for payload

    try {
      const { data: responseData } = await axios.post('/register', {
        name,
        email,
        password,
      });

      if (responseData.error) {
        toast.error(responseData.error); // Display error message from backend
      } else {
        setData({ name: '', email: '', password: '' }); // Reset form fields
        toast.success('Registration successful. Welcome!'); // Success notification
        navigate('/login'); // Redirect to login page
      }
    } catch (error) {
      console.log(error); // Log any unexpected errors
    }
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter name..."
          name="name"
          value={data.name}
          onChange={handleChange}
        />

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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
