// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Create a CSS file for styling if needed

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h4>Support</h4>
        <ul>
          <li>Help Centre</li>
          <li>AirCover</li>
          <li>Anti-discrimination</li>
          <li>Disability support</li>
          <li>Cancellation options</li>
          <li>Report neighbourhood concern</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Hosting</h4>
        <ul>
          <li>Airbnb your home</li>
          <li>AirCover for Hosts</li>
          <li>Hosting resources</li>
          <li>Community forum</li>
          <li>Hosting responsibly</li>
          <li>Join a free Hosting class</li>
          <li>Find a co-host</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Airbnb</h4>
        <ul>
          <li>Newsroom</li>
          <li>New features</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Airbnb.org emergency stays</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details</p>
        <div className="footer-icons">
          <span>🌐 English (IN)</span>
          <span>₹ INR</span>
          <span>🌍</span>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

