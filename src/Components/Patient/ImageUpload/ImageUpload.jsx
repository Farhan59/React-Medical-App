import React, { useState, useRef } from 'react';
import './ImageUpload.css';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [specialist, setSpecialist] = useState('');
  const [doctor, setDoctor] = useState('');
  const [description, setDescription] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file && file.type.substr(0, 5) === 'image') {
      setImage(URL.createObjectURL(file));
    } else {
      setImage(null);
    }
  };

  const handleSend = () => {
    // Add your send logic here
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="form-container">
      <h2>Upload Image for Diagnosis</h2>
      <div className="form-group">
        <label>Specialist:</label>
        <select value={specialist} onChange={(e) => setSpecialist(e.target.value)}>
          <option value="">Select Specialist</option>
          <option value="dermatologist">Dermatologist</option>
          <option value="cardiologist">Cardiologist</option>
          <option value="neurologist">Neurologist</option>
        </select>
      </div>
      <div className="form-group">
        <label>Doctor:</label>
        <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
          <option value="">Select Doctor</option>
          <option value="dr_smith">Dr. Smith</option>
          <option value="dr_jones">Dr. Jones</option>
          <option value="dr_williams">Dr. Williams</option>
        </select>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the image (optional)"
        />
      </div>
      <div
        className="image-upload-container"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInput}
          style={{ display: 'none' }}
          accept="image/*"
        />
        {image ? (
          <img src={image} alt="Uploaded" className="uploaded-image" />
        ) : (
          <div className="upload-content">
            <i className="fas fa-cloud-upload-alt"></i>
            <p>Drag and drop an image here, or click to select a file</p>
          </div>
        )}
      </div>
      <button className="send-button" onClick={handleSend}>Send</button>
      {showPopup && (
        <div className="popup">
          <p>Image Send Successful</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
