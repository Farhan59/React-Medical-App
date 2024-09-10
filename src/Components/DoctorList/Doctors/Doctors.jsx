import React, { useState } from 'react';
import './Doctors.css';

const doctorsData = [
  {
    image: '/image0.jpg',
    name: 'Dr. John Doe',
    education: 'MD, Harvard Medical School',
    degrees: ['MD', 'PhD'],
    specialty: 'Cardiology',
    daysOfWeek: ['Monday', 'Wednesday', 'Friday'],
    appointmentLink: 'https://example.com/book-appointment',
    experienceYears: 15,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum.'
  },
  {
    image: '/image0.jpg',
    name: 'Dr. Jane Smith',
    education: 'MD, Stanford University',
    degrees: ['MD'],
    specialty: 'Neurology',
    daysOfWeek: ['Tuesday', 'Thursday'],
    appointmentLink: 'https://example.com/book-appointment',
    experienceYears: 12,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum.'
  },
  {
    image: '/image0.jpg',
    name: 'Dr. Alice Johnson',
    education: 'MD, Johns Hopkins University',
    degrees: ['MD', 'MPH'],
    specialty: 'Pediatrics',
    daysOfWeek: ['Monday', 'Wednesday', 'Thursday'],
    appointmentLink: 'https://example.com/book-appointment',
    experienceYears: 10,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum.'
  },
  {
    image: '/image0.jpg',
    name: 'Dr. John Doe',
    education: 'MD, Harvard Medical School',
    degrees: ['MD', 'PhD'],
    specialty: 'Cardiology',
    daysOfWeek: ['Monday', 'Wednesday', 'Friday'],
    appointmentLink: 'https://example.com/book-appointment',
    experienceYears: 15,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum.'
  },
  {
    image: '/image0.jpg',
    name: 'Dr. Jane Smith',
    education: 'MD, Stanford University',
    degrees: ['MD'],
    specialty: 'Neurology',
    daysOfWeek: ['Tuesday', 'Thursday'],
    appointmentLink: 'https://example.com/book-appointment',
    experienceYears: 12,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum.'
  },
  {
    image: '/image0.jpg',
    name: 'Dr. Alice Johnson',
    education: 'MD, Johns Hopkins University',
    degrees: ['MD', 'MPH'],
    specialty: 'Pediatrics',
    daysOfWeek: ['Monday', 'Wednesday', 'Thursday'],
    appointmentLink: 'https://example.com/book-appointment',
    experienceYears: 10,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum.'
  },
  {
    image: '/image0.jpg',
    name: 'Dr. John Doe',
    education: 'MD, Harvard Medical School',
    degrees: ['MD', 'PhD'],
    specialty: 'Cardiology',
    daysOfWeek: ['Monday', 'Wednesday', 'Friday'],
    appointmentLink: 'https://example.com/book-appointment',
    experienceYears: 15,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum.'
  },
  {
    image: '/image0.jpg',
    name: 'Dr. Jane Smith',
    education: 'MD, Stanford University',
    degrees: ['MD'],
    specialty: 'Neurology',
    daysOfWeek: ['Tuesday', 'Thursday'],
    appointmentLink: 'https://example.com/book-appointment',
    experienceYears: 12,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum.'
  },
  {
    image: '/image0.jpg',
    name: 'Dr. Alice Johnson',
    education: 'MD, Johns Hopkins University',
    degrees: ['MD', 'MPH'],
    specialty: 'Pediatrics',
    daysOfWeek: ['Monday', 'Wednesday', 'Thursday'],
    appointmentLink: 'https://example.com/book-appointment',
    experienceYears: 10,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum.'
  },
  {
    image: '/image0.jpg',
    name: 'Dr. John Doe',
    education: 'MD, Harvard Medical School',
    degrees: ['MD', 'PhD'],
    specialty: 'Cardiology',
    daysOfWeek: ['Monday', 'Wednesday', 'Friday'],
    appointmentLink: 'https://example.com/book-appointment',
    experienceYears: 15,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum.'
  },
  {
    image: '/image0.jpg',
    name: 'Dr. Jane Smith',
    education: 'MD, Stanford University',
    degrees: ['MD'],
    specialty: 'Neurology',
    daysOfWeek: ['Tuesday', 'Thursday'],
    appointmentLink: 'https://example.com/book-appointment',
    experienceYears: 12,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum.'
  },
  {
    image: '/image0.jpg',
    name: 'Dr. Alice Johnson',
    education: 'MD, Johns Hopkins University',
    degrees: ['MD', 'MPH'],
    specialty: 'Pediatrics',
    daysOfWeek: ['Monday', 'Wednesday', 'Thursday'],
    appointmentLink: 'https://example.com/book-appointment',
    experienceYears: 10,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum.'
  },
];

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorSelect = (index) => {
    setSelectedDoctor(index === selectedDoctor ? null : index);
  };

  return (
    <div className="doctors-container">
      <h2>Our Doctors</h2>
      <div className="doctors-slider">
        {doctorsData.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} className="doctor-image" onClick={() => handleDoctorSelect(index)} />
            <h3>{doctor.name}</h3>
            <p>{doctor.education}</p>
          </div>
        ))}
      </div>
      {selectedDoctor !== null && (
        <div className="doctor-details">
          <img src={doctorsData[selectedDoctor].image} alt={doctorsData[selectedDoctor].name} className="selected-doctor-image" />
          <div className="details-section">
            <h3>{doctorsData[selectedDoctor].name}</h3>
            <p>{doctorsData[selectedDoctor].education}</p>
            <h4>Degrees:</h4>
            <ul>
              {doctorsData[selectedDoctor].degrees.map((degree, index) => (
                <li key={index}>{degree}</li>
              ))}
            </ul>
            <h4>Specialty:</h4>
            <p>{doctorsData[selectedDoctor].specialty}</p>
            <h4>Days Available:</h4>
            <p>{doctorsData[selectedDoctor].daysOfWeek.join(', ')}</p>
            <a href={doctorsData[selectedDoctor].appointmentLink} target="_blank" rel="noopener noreferrer">Schedule Appointment</a>
            <h4>Years of Experience:</h4>
            <p>{doctorsData[selectedDoctor].experienceYears} years</p>
            <p>{doctorsData[selectedDoctor].details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;
