import React from 'react';
import './SchedulePlan.css';
import { useNavigate } from 'react-router-dom';

const SchedulePlan = () => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate('/DoctorSchedulePlan');
  };

  return (
    <div className="schedule-plan">
      <h2>Schedule Plan</h2>
      <div className="calendar">
        {/* Calendar logic or component can be added here */}
        <p>Current month's working hours</p>
      </div>
      <button onClick={handleDetails}>Details</button>
    </div>
  );
};

export default SchedulePlan;
