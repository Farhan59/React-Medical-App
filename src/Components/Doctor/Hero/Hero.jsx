import React from 'react';
import './Hero.css';
import doctorImage from '../../../Assets/image1.jpg'; // Ensure this path is correct

const Hero = () => {
  return (
    <div className="hero">
      <img src={doctorImage} alt="Doctor Hero" className="hero-image" />
      <div className="hero-content">
        <h1>Welcome to the Doctor Portal</h1>
        <p>Manage your appointments, review patient records, and stay connected with your patients.</p>
      </div>
    </div>
  );
}

export default Hero;
