import React from 'react';
import './PreviousCaseHistory.css';

import { useNavigate } from 'react-router-dom';

const PreviousCaseHistory = () => {

  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate('/DoctorPatients');
  };


  return (
    <div className="previous-case-history">
      <h2>Previous Case History</h2>
      <p>Summary of recent cases handled by the doctor.</p>
      <button onClick={handleSeeMore}>See More</button>
    </div>
  );
}

export default PreviousCaseHistory;
