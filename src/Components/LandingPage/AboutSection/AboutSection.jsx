import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          Our mission is to revolutionize healthcare by providing seamless, accessible, and efficient online medical consultations. We aim to connect patients with the best healthcare professionals, leveraging technology to enhance the quality of care and make it more convenient for everyone.
        </p>
        <p className="about-description">
          With our platform, you can easily schedule appointments, consult with doctors via video calls, and access advanced diagnostic tools, all from the comfort of your home. Our team is dedicated to ensuring that you receive the best possible care, whenever and wherever you need it.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
