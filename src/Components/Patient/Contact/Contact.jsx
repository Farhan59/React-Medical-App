import React from 'react';
import './Contact.css'; // You'll need to create this CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2 className="contact-title">Our Contact Us</h2>
        <h3 className="contact-subtitle">Easy to contact us</h3>
        <p className="contact-description">
          We are always ready to help by providing the best services for you. We believe a good health to live can make your life better.
        </p>
        <div className="contact-options">
          <div className="contact-option">
            <i className="fas fa-phone"></i>
            <h4>Call</h4>
            <p>021 123 145 14</p>
            <button className="contact-button">Call now</button>
          </div>
          <div className="contact-option">
            <i className="fas fa-comment-dots"></i>
            <h4>Chat</h4>
            <p></p>
            <button className="contact-button">Chat now</button>
          </div>
          <div className="contact-option">
            <i className="fas fa-video"></i>
            <h4>Video Call</h4>
            <p>021 123 145 14</p>
            <button className="contact-button">Video Call now</button>
          </div>
          <div className="contact-option">
            <i className="fas fa-envelope"></i>
            <h4>Message</h4>
            <p>021 123 145 14</p>
            <button className="contact-button">Message now</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;