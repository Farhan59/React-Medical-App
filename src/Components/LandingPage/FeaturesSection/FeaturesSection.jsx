import React from 'react';
import './FeaturesSection.css';
import { FaRegClock, FaStethoscope, FaVideo, FaImage } from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaRegClock />,
      title: 'Appointment Scheduling',
      description: 'Easily schedule and manage your appointments with doctors online.',
    },
    {
      icon: <FaStethoscope />,
      title: 'Symptom Search',
      description: 'Search for symptoms and get connected with the right specialist.',
    },
    {
      icon: <FaVideo />,
      title: 'Video Consultations',
      description: 'Consult with doctors via video calls from the comfort of your home.',
    },
    {
      icon: <FaImage />,
      title: 'Skin Disease Detection',
      description: 'Upload images to detect skin diseases using advanced AI technology.',
    },
  ];

  return (
    <div className="features-section">
      <h2 className="features-title">Key Features</h2>
      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
