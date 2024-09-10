import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SkinDiseasesDetection.css';

const SkinDiseasesDetection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate('/SkinDiseasesDetectionResult');
    }, 3000);
  };

  return (
    <div className="skin-diseases-detection">
      <h2>Skin Diseases Detection</h2>
      <p>Upload an image to detect the following skin diseases:</p>
      <ul>
        <li>Eczema</li>
        <li>Psoriasis</li>
        <li>Acne</li>
      </ul>
      <input type="file" accept="image/*" />
      <p className="note">Note: Image upload functionality will be implemented here.</p>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
      {showPopup && <div className="popup">Analyzing... Please wait.</div>}
    </div>
  );
};

export default SkinDiseasesDetection;
