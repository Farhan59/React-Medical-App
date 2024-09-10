import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaUserMd, FaHome, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/DoctorPage">
          <FaUserMd className="logo-icon" />
          <span>Doctor's Portal</span>
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/DoctorPage"><FaHome /> Home</Link></li>
          <li><Link to="/DoctorPatients"><FaClipboardList /> Patients</Link></li>
          <li><Link to="/"><FaSignOutAlt /> Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
