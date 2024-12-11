// src/pages/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo" onClick={() => navigate('/')}>
        Stay & Explore
      </div>

      {/* Navigation Links */}
     

      {/* Authentication Links */}
      <div className="auth-links">
        <button className="login-button" onClick={() => navigate('/login')}>Login</button>
        <button className="register-button" onClick={() => navigate('/register')}>Register</button>
        
        <button className="nav-button globe-icon" onClick={() => navigate('/map')}>🌐 Map</button>

      </div>

      {/* About Us */}
      <div className="about-us" onClick={() => navigate('/about')}>
        About Us
      </div>
    </header>
  );
};

export default Header;
