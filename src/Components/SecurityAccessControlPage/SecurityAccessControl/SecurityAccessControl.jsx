import React, { useState } from 'react';
import './SecurityAccessControl.css';

const SecurityAccessControl = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', role: 'Admin' },
        { id: 2, name: 'Jane Smith', role: 'Doctor' },
        { id: 3, name: 'Emma Johnson', role: 'Patient' },
    ]);

    const handleRoleChange = (id, newRole) => {
        const updatedUsers = users.map(user =>
            user.id === id ? { ...user, role: newRole } : user
        );
        setUsers(updatedUsers);
    };

    return (
        <div className="security-access-control-container">
            <h2>Security and Access Control</h2>

            <div className="user-list">
                {users.map(user => (
                    <div key={user.id} className="user-item">
                        <h3>{user.name}</h3>
                        <div className="role-select">
                            <label htmlFor={`roleSelect-${user.id}`}>Role:</label>
                            <select
                                id={`roleSelect-${user.id}`}
                                value={user.role}
                                onChange={(e) => handleRoleChange(user.id, e.target.value)}
                            >
                                <option value="Admin">Admin</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Patient">Patient</option>
                            </select>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecurityAccessControl;
