import React from 'react';
import './Hero.css';
import image1 from '../../../Assets/image1.jpg'; // Make sure the path is correct

const Hero = () => {
  return (
    <div className="hero">
      <img src={image1} alt="Hero" className="hero-image" />
      <div className="hero-content">
        <h1>Welcome to the Patient Portal</h1>
        <p>Your health is our priority. Access your health records, book appointments, and stay connected with your doctors.</p>
      </div>
    </div>
  );
}

export default Hero;
