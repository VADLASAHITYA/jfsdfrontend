import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'; // Include your CSS file for styling

const GuideDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Guide Dashboard</h2>
        <ul>
          <li><Link to="/tourism-insights">Tourism Insights</Link></li>
         
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </div>

      <div className="main-content">
        <h3>Welcome, Guide!</h3>
        <p>Manage tours, interact with tourists, and handle reviews here.</p>
        <h2>Manage Your Tours and Interactions</h2>
        <p>Use the navigation links to manage your tours and respond to tourist requests.</p>
      </div>
    </div>
  );
};

export default GuideDashboard;
