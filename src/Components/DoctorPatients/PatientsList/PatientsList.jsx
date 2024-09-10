import React, { useState } from 'react';
import './PatientsList.css';

const PatientsList = () => {
  // Dummy patient data (replace with actual patient data from your backend)
  const [patients] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      registrationId: 'P001',
      gender: 'Male',
      age: 35,
      lastSeenDisease: 'Fever',
      lastAppointmentDate: '2024-07-05',
      currentStatus: 'Ongoing treatment',
      totalAppointments: 5,
      lastBp: '120/80',
      bloodGroup: 'A+',
      diseases: ['Flu', 'Headache'],
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      registrationId: 'P002',
      gender: 'Female',
      age: 28,
      lastSeenDisease: 'Headache',
      lastAppointmentDate: '2024-07-08',
      currentStatus: 'Recovered',
      totalAppointments: 3,
      lastBp: '110/70',
      bloodGroup: 'B-',
      diseases: ['Migraine', 'Sinusitis'],
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      registrationId: 'P003',
      gender: 'Male',
      age: 42,
      lastSeenDisease: 'Back Pain',
      lastAppointmentDate: '2024-07-03',
      currentStatus: 'Ongoing treatment',
      totalAppointments: 7,
      lastBp: '130/90',
      bloodGroup: 'O+',
      diseases: ['Sciatica', 'Arthritis'],
    },
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        registrationId: 'P001',
        gender: 'Male',
        age: 35,
        lastSeenDisease: 'Fever',
        lastAppointmentDate: '2024-07-05',
        currentStatus: 'Ongoing treatment',
        totalAppointments: 5,
        lastBp: '120/80',
        bloodGroup: 'A+',
        diseases: ['Flu', 'Headache'],
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        registrationId: 'P002',
        gender: 'Female',
        age: 28,
        lastSeenDisease: 'Headache',
        lastAppointmentDate: '2024-07-08',
        currentStatus: 'Recovered',
        totalAppointments: 3,
        lastBp: '110/70',
        bloodGroup: 'B-',
        diseases: ['Migraine', 'Sinusitis'],
      },
      {
        id: 3,
        name: 'Mike Johnson',
        email: 'mike.johnson@example.com',
        registrationId: 'P003',
        gender: 'Male',
        age: 42,
        lastSeenDisease: 'Back Pain',
        lastAppointmentDate: '2024-07-03',
        currentStatus: 'Ongoing treatment',
        totalAppointments: 7,
        lastBp: '130/90',
        bloodGroup: 'O+',
        diseases: ['Sciatica', 'Arthritis'],
      },

      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        registrationId: 'P001',
        gender: 'Male',
        age: 35,
        lastSeenDisease: 'Fever',
        lastAppointmentDate: '2024-07-05',
        currentStatus: 'Ongoing treatment',
        totalAppointments: 5,
        lastBp: '120/80',
        bloodGroup: 'A+',
        diseases: ['Flu', 'Headache'],
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        registrationId: 'P002',
        gender: 'Female',
        age: 28,
        lastSeenDisease: 'Headache',
        lastAppointmentDate: '2024-07-08',
        currentStatus: 'Recovered',
        totalAppointments: 3,
        lastBp: '110/70',
        bloodGroup: 'B-',
        diseases: ['Migraine', 'Sinusitis'],
      },
      {
        id: 3,
        name: 'Mike Johnson',
        email: 'mike.johnson@example.com',
        registrationId: 'P003',
        gender: 'Male',
        age: 42,
        lastSeenDisease: 'Back Pain',
        lastAppointmentDate: '2024-07-03',
        currentStatus: 'Ongoing treatment',
        totalAppointments: 7,
        lastBp: '130/90',
        bloodGroup: 'O+',
        diseases: ['Sciatica', 'Arthritis'],
      },
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        registrationId: 'P001',
        gender: 'Male',
        age: 35,
        lastSeenDisease: 'Fever',
        lastAppointmentDate: '2024-07-05',
        currentStatus: 'Ongoing treatment',
        totalAppointments: 5,
        lastBp: '120/80',
        bloodGroup: 'A+',
        diseases: ['Flu', 'Headache'],
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        registrationId: 'P002',
        gender: 'Female',
        age: 28,
        lastSeenDisease: 'Headache',
        lastAppointmentDate: '2024-07-08',
        currentStatus: 'Recovered',
        totalAppointments: 3,
        lastBp: '110/70',
        bloodGroup: 'B-',
        diseases: ['Migraine', 'Sinusitis'],
      },
      {
        id: 3,
        name: 'Mike Johnson',
        email: 'mike.johnson@example.com',
        registrationId: 'P003',
        gender: 'Male',
        age: 42,
        lastSeenDisease: 'Back Pain',
        lastAppointmentDate: '2024-07-03',
        currentStatus: 'Ongoing treatment',
        totalAppointments: 7,
        lastBp: '130/90',
        bloodGroup: 'O+',
        diseases: ['Sciatica', 'Arthritis'],
      },
  ]);

  const [selectedPatient, setSelectedPatient] = useState(null);

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="patients-list-container">
      <div className="table-box">
        <h2>Patients List</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={patient.id} onClick={() => handlePatientClick(patient)}>
                  <td>{index + 1}</td>
                  <td>{patient.name}</td>
                  <td>{patient.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="details-box">
        <h2>Patient Details</h2>
        {selectedPatient && (
          <div className="patient-details">
            <p><strong>Name:</strong> {selectedPatient.name}</p>
            <p><strong>Registration ID:</strong> {selectedPatient.registrationId}</p>
            <p><strong>Gender:</strong> {selectedPatient.gender}</p>
            <p><strong>Age:</strong> {selectedPatient.age}</p>
            <p><strong>Last Seen for:</strong> {selectedPatient.lastSeenDisease}</p>
            <p><strong>Last Appointment Date:</strong> {selectedPatient.lastAppointmentDate}</p>
            <p><strong>Current Status:</strong> {selectedPatient.currentStatus}</p>
            <p><strong>Total Appointments:</strong> {selectedPatient.totalAppointments}</p>
            <p><strong>Last BP:</strong> {selectedPatient.lastBp}</p>
            <p><strong>Blood Group:</strong> {selectedPatient.bloodGroup}</p>
            <p><strong>Diseases:</strong> {selectedPatient.diseases.join(', ')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientsList;
