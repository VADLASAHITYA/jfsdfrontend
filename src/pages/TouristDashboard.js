// src/pages/TouristDashboard.js
import React from 'react';
import './sidebar.css'; // Include your CSS file for styling

const TouristDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Tourist Dashboard</h2>
        <ul>
          <li><a href="/homestays">Homestays</a></li>
          <li><a href="/Feedback">Feedback</a></li>
          <li><a href="/explore-attractions">Explore Attractions</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </div>

      <div className="main-content">
        <h3>Welcome, Tourist!</h3>
        <p>Search for homestays, view your bookings, and explore attractions here.</p>
        <h2>Explore Homestays and Attractions!</h2>
        <p>Use the navigation links to manage your bookings and explore more.</p>
      </div>
    </div>
  );
};

export default TouristDashboard;
