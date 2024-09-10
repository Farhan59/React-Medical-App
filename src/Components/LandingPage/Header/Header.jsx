import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaHome, FaInfoCircle, FaHandsHelping, FaUserAlt, FaSignInAlt } from 'react-icons/fa'; // Updated icons

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <FaHome className="logo-icon" />
          <span>Medicare</span>
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/features"><FaInfoCircle /> Features</Link></li>
          <li><Link to="/services"><FaHandsHelping /> Services</Link></li>
          <li><Link to="/about"><FaUserAlt /> About</Link></li>
          <li><Link to="/LoginForm"><FaSignInAlt /> Log In</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
