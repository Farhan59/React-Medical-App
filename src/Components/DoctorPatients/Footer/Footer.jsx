import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">Medicare</h3>
          <p>Our vision is to make all people the best place to live for them.</p>
        </div>
        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#how">How We Work</a></li>
            <li><a href="#capital">Capital</a></li>
            <li><a href="#security">Security</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>You can reach us anytime via</p>
          <a href="mailto:homyz@example.com" className="footer-email">medicare@example.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Medicare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;