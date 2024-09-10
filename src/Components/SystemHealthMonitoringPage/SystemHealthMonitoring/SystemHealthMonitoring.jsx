import React, { useState, useEffect } from 'react';
import './SystemHealthMonitoring.css';

const SystemHealthMonitoring = () => {
    const [systemStatus, setSystemStatus] = useState('Loading...');
    const [uptime, setUptime] = useState(0);
    const [errors, setErrors] = useState([]);

    // Simulate fetching system status, uptime, and errors
    useEffect(() => {
        // Simulate API call to fetch system status
        setTimeout(() => {
            setSystemStatus('Operational');
        }, 1000);

        // Simulate API call to fetch system uptime
        setTimeout(() => {
            setUptime(99.8);
        }, 1500);

        // Simulate API call to fetch system errors
        setTimeout(() => {
            setErrors([
                { id: 1, timestamp: '2024-07-15 08:30 AM', message: 'Database connection timeout' },
                { id: 2, timestamp: '2024-07-14 10:15 AM', message: 'Server overload detected' },
            ]);
        }, 2000);
    }, []);

    return (
        <div className="system-health-monitoring-container">
            <h2>System Health Monitoring</h2>

            <div className="system-status">
                <h3>System Status: <span className="status">{systemStatus}</span></h3>
            </div>

            <div className="uptime">
                <h3>Uptime: <span className="uptime-percentage">{uptime}%</span></h3>
            </div>

            <div className="errors">
                <h3>Recent Errors:</h3>
                <ul className="error-list">
                    {errors.map(error => (
                        <li key={error.id} className="error-item">
                            <span className="timestamp">{error.timestamp}</span>
                            <p className="error-message">{error.message}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SystemHealthMonitoring;
