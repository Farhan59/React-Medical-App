import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaUserMd, FaCalendarAlt, FaClipboardList, FaSignOutAlt, FaPills } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/DoctorPage" className="logo-link">
          <FaUserMd className="logo-icon" />
          <span>Doctor's Portal</span>
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/DoctorAppointmentList"><FaCalendarAlt /> Appointments</Link></li>
          <li><Link to="/Doctorpatients"><FaClipboardList /> Patients</Link></li>
          <li><Link to="/DrugsPage"><FaPills /> Drugs</Link></li>
          <li><Link to="/"><FaSignOutAlt /> Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
