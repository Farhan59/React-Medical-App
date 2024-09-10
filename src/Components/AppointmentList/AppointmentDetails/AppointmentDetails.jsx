import React, { useState } from 'react';
import './AppointmentDetails.css';
import AppointmentDetailsPopup from '../AppointmentDetailsPopup/AppointmentDetailsPopup';

const AppointmentDetails = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const appointments = [
    { 
      serial: 1, patientName: 'John Doe', patientId: 'P001', newPatient: 'Yes', 
      daysFacingProblem: 5, age: 30, gender: 'Male', weight: 70, 
      appointmentTime: '10:00 AM', appointmentDate: '2024-07-10',
      contact: '123-456-7890', address: '123 Main St', email: 'john@example.com',
      symptoms: 'Cough, Fever', diagnosis: 'Flu', treatment: 'Rest, Fluids',
      image: '/path/to/image1.jpg'
    },
    { 
      serial: 2, patientName: 'Jane Smith', patientId: 'P002', newPatient: 'No', 
      daysFacingProblem: 2, age: 25, gender: 'Female', weight: 60, 
      appointmentTime: '11:00 AM', appointmentDate: '2024-07-11',
      contact: '987-654-3210', address: '456 Maple Ave', email: 'jane@example.com',
      symptoms: 'Headache', diagnosis: 'Migraine', treatment: 'Medication',
      image: '/path/to/image2.jpg'
    },
    { 
      serial: 3, patientName: 'Mike Johnson', patientId: 'P003', newPatient: 'Yes', 
      daysFacingProblem: 3, age: 40, gender: 'Male', weight: 80, 
      appointmentTime: '01:00 PM', appointmentDate: '2024-07-12',
      contact: '321-654-0987', address: '789 Elm St', email: 'mike@example.com',
      symptoms: 'Back Pain', diagnosis: 'Strain', treatment: 'Physical Therapy',
      image: '/path/to/image3.jpg'
    },
    { 
        serial: 1, patientName: 'John Doe', patientId: 'P001', newPatient: 'Yes', 
        daysFacingProblem: 5, age: 30, gender: 'Male', weight: 70, 
        appointmentTime: '10:00 AM', appointmentDate: '2024-07-10',
        contact: '123-456-7890', address: '123 Main St', email: 'john@example.com',
        symptoms: 'Cough, Fever', diagnosis: 'Flu', treatment: 'Rest, Fluids',
        image: '/path/to/image1.jpg'
      },
      { 
        serial: 2, patientName: 'Jane Smith', patientId: 'P002', newPatient: 'No', 
        daysFacingProblem: 2, age: 25, gender: 'Female', weight: 60, 
        appointmentTime: '11:00 AM', appointmentDate: '2024-07-11',
        contact: '987-654-3210', address: '456 Maple Ave', email: 'jane@example.com',
        symptoms: 'Headache', diagnosis: 'Migraine', treatment: 'Medication',
        image: '/path/to/image2.jpg'
      },
      { 
        serial: 3, patientName: 'Mike Johnson', patientId: 'P003', newPatient: 'Yes', 
        daysFacingProblem: 3, age: 40, gender: 'Male', weight: 80, 
        appointmentTime: '01:00 PM', appointmentDate: '2024-07-12',
        contact: '321-654-0987', address: '789 Elm St', email: 'mike@example.com',
        symptoms: 'Back Pain', diagnosis: 'Strain', treatment: 'Physical Therapy',
        image: '/path/to/image3.jpg'
      },
      { 
        serial: 1, patientName: 'John Doe', patientId: 'P001', newPatient: 'Yes', 
        daysFacingProblem: 5, age: 30, gender: 'Male', weight: 70, 
        appointmentTime: '10:00 AM', appointmentDate: '2024-07-10',
        contact: '123-456-7890', address: '123 Main St', email: 'john@example.com',
        symptoms: 'Cough, Fever', diagnosis: 'Flu', treatment: 'Rest, Fluids',
        image: '/path/to/image1.jpg'
      },
      { 
        serial: 2, patientName: 'Jane Smith', patientId: 'P002', newPatient: 'No', 
        daysFacingProblem: 2, age: 25, gender: 'Female', weight: 60, 
        appointmentTime: '11:00 AM', appointmentDate: '2024-07-11',
        contact: '987-654-3210', address: '456 Maple Ave', email: 'jane@example.com',
        symptoms: 'Headache', diagnosis: 'Migraine', treatment: 'Medication',
        image: '/path/to/image2.jpg'
      },
      { 
        serial: 3, patientName: 'Mike Johnson', patientId: 'P003', newPatient: 'Yes', 
        daysFacingProblem: 3, age: 40, gender: 'Male', weight: 80, 
        appointmentTime: '01:00 PM', appointmentDate: '2024-07-12',
        contact: '321-654-0987', address: '789 Elm St', email: 'mike@example.com',
        symptoms: 'Back Pain', diagnosis: 'Strain', treatment: 'Physical Therapy',
        image: '/path/to/image3.jpg'
      },
      { 
        serial: 1, patientName: 'John Doe', patientId: 'P001', newPatient: 'Yes', 
        daysFacingProblem: 5, age: 30, gender: 'Male', weight: 70, 
        appointmentTime: '10:00 AM', appointmentDate: '2024-07-10',
        contact: '123-456-7890', address: '123 Main St', email: 'john@example.com',
        symptoms: 'Cough, Fever', diagnosis: 'Flu', treatment: 'Rest, Fluids',
        image: '/path/to/image1.jpg'
      },
      { 
        serial: 2, patientName: 'Jane Smith', patientId: 'P002', newPatient: 'No', 
        daysFacingProblem: 2, age: 25, gender: 'Female', weight: 60, 
        appointmentTime: '11:00 AM', appointmentDate: '2024-07-11',
        contact: '987-654-3210', address: '456 Maple Ave', email: 'jane@example.com',
        symptoms: 'Headache', diagnosis: 'Migraine', treatment: 'Medication',
        image: '/path/to/image2.jpg'
      },
      { 
        serial: 3, patientName: 'Mike Johnson', patientId: 'P003', newPatient: 'Yes', 
        daysFacingProblem: 3, age: 40, gender: 'Male', weight: 80, 
        appointmentTime: '01:00 PM', appointmentDate: '2024-07-12',
        contact: '321-654-0987', address: '789 Elm St', email: 'mike@example.com',
        symptoms: 'Back Pain', diagnosis: 'Strain', treatment: 'Physical Therapy',
        image: '/path/to/image3.jpg'
      },
      { 
        serial: 1, patientName: 'John Doe', patientId: 'P001', newPatient: 'Yes', 
        daysFacingProblem: 5, age: 30, gender: 'Male', weight: 70, 
        appointmentTime: '10:00 AM', appointmentDate: '2024-07-10',
        contact: '123-456-7890', address: '123 Main St', email: 'john@example.com',
        symptoms: 'Cough, Fever', diagnosis: 'Flu', treatment: 'Rest, Fluids',
        image: '/path/to/image1.jpg'
      },
      { 
        serial: 2, patientName: 'Jane Smith', patientId: 'P002', newPatient: 'No', 
        daysFacingProblem: 2, age: 25, gender: 'Female', weight: 60, 
        appointmentTime: '11:00 AM', appointmentDate: '2024-07-11',
        contact: '987-654-3210', address: '456 Maple Ave', email: 'jane@example.com',
        symptoms: 'Headache', diagnosis: 'Migraine', treatment: 'Medication',
        image: '/path/to/image2.jpg'
      },
      { 
        serial: 3, patientName: 'Mike Johnson', patientId: 'P003', newPatient: 'Yes', 
        daysFacingProblem: 3, age: 40, gender: 'Male', weight: 80, 
        appointmentTime: '01:00 PM', appointmentDate: '2024-07-12',
        contact: '321-654-0987', address: '789 Elm St', email: 'mike@example.com',
        symptoms: 'Back Pain', diagnosis: 'Strain', treatment: 'Physical Therapy',
        image: '/path/to/image3.jpg'
      },
  ];

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  const handleClosePopup = () => {
    setSelectedPatient(null);
  };

  return (
    <div className="appointment-details">
      <h2>Appointment List</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Serial</th>
              <th>Patient Name</th>
              <th>Patient ID</th>
              <th>New Patient</th>
              <th>Days Facing Problem</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Weight</th>
              <th>Appointment Time</th>
              <th>Appointment Date</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Email</th>
              <th>Symptoms</th>
       
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index} onClick={() => handlePatientClick(appointment)}>
                <td>{appointment.serial}</td>
                <td>{appointment.patientName}</td>
                <td>{appointment.patientId}</td>
                <td>{appointment.newPatient}</td>
                <td>{appointment.daysFacingProblem}</td>
                <td>{appointment.age}</td>
                <td>{appointment.gender}</td>
                <td>{appointment.weight}</td>
                <td>{appointment.appointmentTime}</td>
                <td>{appointment.appointmentDate}</td>
                <td>{appointment.contact}</td>
                <td>{appointment.address}</td>
                <td>{appointment.email}</td>
                <td>{appointment.symptoms}</td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedPatient && (
        <AppointmentDetailsPopup patient={selectedPatient} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default AppointmentDetails;
