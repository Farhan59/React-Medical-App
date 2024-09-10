import React, { useState } from 'react';
import './AuditLogs.css';

const AuditLogs = () => {
    const [logs, setLogs] = useState([
        { id: 1, user: 'John Doe', action: 'Created new user (Jane Smith)', timestamp: '2024-07-15 10:30 AM' },
        { id: 2, user: 'Emma Johnson', action: 'Updated patient record for ID: 12345', timestamp: '2024-07-14 3:45 PM' },
        { id: 3, user: 'Jane Smith', action: 'Deleted appointment on July 13th, 2024', timestamp: '2024-07-13 2:00 PM' },
    ]);

    return (
        <div className="audit-logs-container">
            <h2>Audit Logs</h2>

            <div className="log-list">
                {logs.map(log => (
                    <div key={log.id} className="log-item">
                        <div className="log-header">
                            <span className="user">{log.user}</span>
                            <span className="timestamp">{log.timestamp}</span>
                        </div>
                        <p className="action">{log.action}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AuditLogs;
