import React from 'react';
import './AppointmentDetailsPopup.css';

const AppointmentDetailsPopup = ({ patient, onClose }) => {
  if (!patient) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="patient-profile">
        <img src="Tesla.jpeg" alt="Patient" /> 
         {/* <img src={patient.image} alt={`${patient.patientName}`} />*/}
          <div className="patient-details">
            <h2>{patient.patientName}</h2>
            <p><strong>Patient ID:</strong> {patient.patientId}</p>
            <p><strong>New Patient:</strong> {patient.newPatient}</p>
            <p><strong>Days Facing Problem:</strong> {patient.daysFacingProblem}</p>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Gender:</strong> {patient.gender}</p>
            <p><strong>Weight:</strong> {patient.weight}</p>
            <p><strong>Appointment Time:</strong> {patient.appointmentTime}</p>
            <p><strong>Appointment Date:</strong> {patient.appointmentDate}</p>
            <p><strong>Contact:</strong> {patient.contact}</p>
            <p><strong>Address:</strong> {patient.address}</p>
            <p><strong>Email:</strong> {patient.email}</p>
            <p><strong>Symptoms:</strong> {patient.symptoms}</p>
            <p><strong>Diagnosis:</strong> {patient.diagnosis}</p>
            <p><strong>Treatment:</strong> {patient.treatment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailsPopup;
