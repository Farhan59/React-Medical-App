import React, { useState } from 'react';
import './JoinCall.css';
import { useNavigate } from 'react-router-dom';

const JoinCall = ({ appointmentTime, appointmentDetails }) => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleJoinCall = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate('/StartVideoCall');
    }, 5000);
  };

  return (
    <div className="join-call-container">
      <div className="appointment-info">
        <p>Appointment Time: {appointmentTime}</p>
        <p>Details: {appointmentDetails}</p>
        {/* Add more relevant information here */}
      </div>
      <button className="join-call-button" onClick={handleJoinCall}>
        Start Video Call
      </button>
      {showPopup && (
        <div className="popup">
          <p>It's not time yet. Please wait until your appointment time.</p>
        </div>
      )}
    </div>
  );
};

export default JoinCall;
