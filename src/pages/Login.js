/*// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Redirect based on the selected role
    switch (role) {
      case 'admin':
        navigate('/admin');  // Replace with actual route if different
        break;
      case 'host':
        navigate('/hostdashboard');  // Replace with actual route if different
        break;
      case 'tourist':
        navigate('/tourist');  // Replace with actual route if different
        break;
      case 'guide':
        navigate('/guide');  // Replace with actual route if different
        break;
      default:
        alert('Please select a role.');  // Provide feedback if no role is selected
    }
  };

  return (
    <div className="login-container">
      <header>
        <h1>Login to Travel Homestays</h1>
      </header>

      <main>
        <form id="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="host">Host</option>
            <option value="tourist">Tourist</option>
            <option value="guide">Guide</option>
          </select>
          <button type="submit">Login</button>
          <p>Don't have an account? <a href="/register">Register here</a></p>
        </form>
      </main>

      <footer>
        <p>&copy; 2024 Travel Homestays</p>
      </footer>
    </div>
  );
}

export default Login;*/


// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [role, setRole] = useState('');
  const navigate = useNavigate();

  // Backend API URL (replace with your actual backend URL)
  const LOGIN_API_URL = 'http://localhost:8080/Login';

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object with user data
    const userData = {
      email,
      password,
     
    };

    try {
      // Send a POST request to the backend
       axios.get(LOGIN_API_URL,{ params:
        {
          email:userData.email,
          password:userData.password,

        }
      }

       ).then((res)=>{
        console.log(res);
        if (res.data !== "No") {
          // Redirect based on the selected role
          switch (res.data) {
            case 1:
              navigate('/admin');
              break;
            case 2:
              navigate('/hostdashboard');
              break;
            case 3:
              navigate('/tourist');
              break;
            case 4:
              navigate('/guide');
              break;
            default:
              alert('Please select a role.');
          }
         
        } else {
          alert('Invalid credentials. Please try again.');
        }
      })

       

      // Check the response status
      
      
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please check your credentials or try again later.');
    }
  };

  return (
    <div className="login-container">
      <header>
        <h1>WELCOME TO STAY & EXPLORE</h1>
      </header>

      <main>
        <form id="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
         
          <button type="submit">Login</button>
          <p>Don't have an account? <a href="/register">Register here</a></p>
        </form>
      </main>

      <footer>
        <p>&copy; 2024 Travel Homestays</p>
      </footer>
    </div>
  );
}

export default Login;

