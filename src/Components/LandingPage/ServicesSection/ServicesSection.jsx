import React from 'react';
import './ServicesSection.css';
import { FaRegClock, FaStethoscope, FaVideo, FaImage, FaPrescriptionBottle, FaUserMd } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
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
    {
      icon: <FaPrescriptionBottle />,
      title: 'Prescription Management',
      description: 'Manage and access your prescriptions conveniently online.',
    },
    {
      icon: <FaUserMd />,
      title: 'Expert Advice',
      description: 'Get advice from experienced healthcare professionals.',
    },
  ];

  return (
    <div className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
