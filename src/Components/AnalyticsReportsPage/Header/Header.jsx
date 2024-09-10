import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaHome, FaUserMd, FaCalendarAlt, FaComments, FaUsersCog, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/AdminPage" className="logo-link">
          <FaHome className="logo-icon" />
          <span>Admin Portal</span>
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/AdminPage"><FaHome /> Home</Link></li>
          <li><Link to="/ManageDoctors"><FaUserMd /> Manage Doctors</Link></li>
          <li><Link to="/ManageAppointments"><FaCalendarAlt /> Manage Appointments</Link></li>
          <li><Link to="/AdminMessages"><FaComments /> Messages</Link></li>
          <li><Link to="/ManageUsers"><FaUsersCog /> Manage Users</Link></li>
          <li><Link to="/"><FaSignOutAlt /> Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
