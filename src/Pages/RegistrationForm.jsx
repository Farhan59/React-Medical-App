import React, { useState } from 'react';
import './RegistrationForm.css';
import { Link } from 'react-router-dom';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    status: '',
    specialization: '',
    educationLevel: '',
    membershipNumber: '',
    phoneNumber: '',
    dateOfBirth: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to a server
  };

  return (
    <div className="App">
      <div className="registration-form">
        <h1>Registration Form</h1>
        <div className="form-content">
          <div className="form-type">
            <button className="active">Patient</button>
            <button>Doctor</button>
          </div>
          <p className="account-link1"> <Link to="/LoginForm">Already have an account?</Link></p>
          <form onSubmit={handleSubmit}>
            <h2>Doctor Profile</h2>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" />
              </div>
              <div className="form-group">
                <label>Education Level</label>
                <select name="educationLevel" value={formData.educationLevel} onChange={handleChange}>
                  <option value="">Select Education</option>
                  {/* Add education options */}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" />
              </div>
              <div className="form-group">
                <label>Membership Number</label>
                <input type="text" name="membershipNumber" value={formData.membershipNumber} onChange={handleChange} placeholder="BPA membership number" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email ID</label>
                <input type="email" name="emailId" value={formData.emailId} onChange={handleChange} placeholder="example@domain.com" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="+880" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Status</label>
                <select name="status" value={formData.status} onChange={handleChange}>
                  <option value="">Select Status</option>
                  {/* Add status options */}
                </select>
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} placeholder="dd----yyyy" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Specialization</label>
                <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password" />
              </div>
            </div>
            <button type="submit" className="submit-btn">SUBMIT</button>
          </form>
          <p className="form-note">* You must fill all blank spaces.</p>
        </div>
      </div>
    </div>
  );
}

export default App;