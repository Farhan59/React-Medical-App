import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <div className="cta-section">
      <h2 className="cta-title">Join Us Today!</h2>
      <p className="cta-text">Discover the future of healthcare with our revolutionary platform.</p>
      <button className="cta-button"><Link to="/RegistrationForm">Sign Up Now</Link></button>
    </div>
  );
};

export default CallToAction;
