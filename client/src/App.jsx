import './App.css';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import Navbar  from './components/navbar';
import { UserContextProvider } from './context/userContext';

axios.defaults.baseURL = 'http://localhost:8080'; 
axios.defaults.withCredentials = true; 
function App() {
  return (
    
    <UserContextProvider>
      <Navbar />
      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </UserContextProvider>
    
  )
  
    
}
export default App;
