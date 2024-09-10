import React from 'react';
import './AppointmentList.css';
import { useNavigate } from 'react-router-dom';

const AppointmentList = () => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate('/DoctorAppointmentList');
  };

  return (
    <div className="appointment-list">
      <h2>Today's Appointments</h2>
      <ul>
        <li>Patient 1: 10:00 AM - 10:30 AM</li>
        <li>Patient 2: 11:00 AM - 11:30 AM</li>
        <li>Patient 3: 12:00 PM - 12:30 PM</li>
      </ul>
      <button onClick={handleSeeMore}>See More</button>
    </div>
  );
};

export default AppointmentList;
