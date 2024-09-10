import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaHome, FaUserMd, FaCalendarAlt, FaComments, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/PatientPage" className="logo-link">
          <FaHome className="logo-icon" />
          <span>Patient Portal</span>
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/PatientPage"><FaHome /> Home</Link></li>
          <li><Link to="/MAkeAppointment"><FaCalendarAlt /> Appointments</Link></li>
          <li><Link to="/PatientMessages"><FaComments /> Messages</Link></li>
          <li><Link to="/"><FaSignOutAlt /> Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
