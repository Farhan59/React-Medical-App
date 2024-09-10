import React from 'react';
import './GetStart.css';
import { useNavigate } from 'react-router-dom';

const GetStart = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/MakeAppointment');
    };

    return (
        <div className="get-start-container">
            <h2 className="get-start-title">Get started</h2>
            <p className="get-start-description">
                Start your journey towards better health and convenient medical care.
                <br />
                Find your healthcare soon
            </p>
            <button className="get-start-button" onClick={handleGetStarted}>Get Started</button>
        </div>
    );
};

export default GetStart;
