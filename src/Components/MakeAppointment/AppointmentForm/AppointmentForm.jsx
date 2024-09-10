import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    specialty: '',
    date: '',
    time: '',
    problem: '',
    duration: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (you can replace this with actual submission logic)
    setTimeout(() => {
      setFormSubmitted(true);
    }, 500); // Simulating delay for better UX
  };

  const resetForm = () => {
    setFormData({
      name: '',
      age: '',
      specialty: '',
      date: '',
      time: '',
      problem: '',
      duration: '',
    });
    setFormSubmitted(false);
  };

  return (
    <div className="appointment-form-container">
      <h2>Make an Appointment</h2>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit} className="appointment-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Specialty:
            <select
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              required
            >
              <option value="">Select Specialty</option>
              <option value="cardiologist">Cardiologist</option>
              <option value="dermatologist">Dermatologist</option>
              <option value="neurologist">Neurologist</option>
              <option value="pediatrician">Pediatrician</option>
            </select>
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Time:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            What kind of problem are you facing?
            <textarea
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            How long have you been facing the problem?
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="success-message">
          <p>Appointment successful!</p>
          <button onClick={resetForm}>Make Another Appointment</button>
        </div>
      )}
    </div>
  );
};

export default AppointmentForm;
