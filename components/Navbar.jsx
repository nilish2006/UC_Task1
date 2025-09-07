import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

export default function Navbar() {
  return (
    <nav> 
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}
