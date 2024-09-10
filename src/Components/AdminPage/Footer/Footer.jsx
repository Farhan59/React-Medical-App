import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="admin-footer-2">
            <div className="footer-content">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
                <nav>
                    <ul className="footer-links">
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-of-service">Terms of Service</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
