import React from 'react';
import './sidebar.css';
import '../Style/HostDashboard.css'; // Include your CSS file for styling

const HostDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Guide Dashboard</h2>
        <ul>
          <li><a href="/HostInsights">Host Insights</a></li>
          <li><a href="/reviews">Reviews</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h3>Welcome, Host!</h3>
        <p>Manage tours, interact with tourists, and handle reviews here.</p>
        <h2>Manage Your Tours and Interactions</h2>
        <p>Use the navigation links to manage your tours and respond to tourist requests.</p>

        {/* Content for Attracting Tourists */}
        <div className="attraction-section">
          {/* Featured Destinations */}
          <div className="featured-destinations">
            <h3>🌍 Featured Destinations</h3>
            <ul>
              <li>🏔️ Explore the Himalayas – Adventure Awaits!</li>
              <li>🏝️ Sun, Sand, and Serenity in Goa.</li>
              <li>🏰 Discover Royal Rajasthan's Heritage.</li>
            </ul>
          </div>

          {/* Success Stats */}
          <div className="success-stats">
            <h3>✨ Success Stories</h3>
            <p>🌟 200+ tours conducted successfully.</p>
            <p>🌟 95% positive feedback from tourists.</p>
            <p>🌟 Trusted by travelers from 30+ countries.</p>
          </div>

          {/* Testimonials */}
          <div className="testimonials">
            <h3>💬 What Our Tourists Say</h3>
            <blockquote>
              "Our guide made our trip unforgettable! Highly recommend." – Sarah, USA
            </blockquote>
            <blockquote>
              "Amazing local insights and great hospitality!" – Akash, India
            </blockquote>
          </div>

          {/* Call-to-Action */}
          <div className="call-to-action">
            <h3>🚀 Get More Bookings</h3>
            <p>Update your availability and language skills to attract more tourists!</p>
            <button className="cta-button">Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostDashboard;
