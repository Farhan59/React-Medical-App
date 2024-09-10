// src/Components/Patient/Value/Value.jsx

import React, { useState } from 'react';
import './Value.css';

const Value = () => {
  const [activeItem, setActiveItem] = useState(null);

  const valueItems = [
    {
      icon: '🛡️',
      title: 'Consultation Services',
      description: 'Online Doctor Consultation, Video and Audio Appointments, Prescription Renewal'
    },
    {
      icon: '🛡️',
      title: 'Diagnostic Services',
      description: 'Symptom Checker, Lab Test Scheduling, Skin Disease Detection'
    },
    {
      icon: '💰',
      title: 'Health Management',
      description: 'Personalized Treatment Plans, Health Records Management, Appointment Reminders'
    }
  ];

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <div className="value-container">
      <div className="value-content">
        <h2 className="value-title">Our Service</h2>
        <h3 className="value-subtitle">Value We Give to You</h3>
        <p className="value-description">
          We always ready to help by providing the best services for you.
          We believe a good health to live can make your life better.
        </p>
        
        <div className="value-items">
          {valueItems.map((item, index) => (
            <div key={index}>
              <div className="value-item" onClick={() => toggleItem(index)}>
                <span className="value-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <button className="expand-btn">{activeItem === index ? '▲' : '▼'}</button>
              </div>
              {activeItem === index && (
                <div className="value-item-expanded">
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
     
    </div>
  );
};

export default Value;