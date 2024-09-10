import React, { useState } from 'react';
import './UserManagement.css'; // Import your styles here if using CSS modules or external CSS

const UserManagement = () => {
    // Dummy data (replace with actual data fetching or state management)
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', role: 'Doctor' },
        { id: 2, name: 'Jane Smith', role: 'Patient' },
        { id: 3, name: 'Admin User', role: 'Admin' },
        { id: 1, name: 'John Doe', role: 'Doctor' },
        { id: 2, name: 'Jane Smith', role: 'Patient' },
        { id: 3, name: 'Admin User', role: 'Admin' },
    ]);

    const handleDeleteUser = (userId) => {
        // Implement delete user logic here
        const updatedUsers = users.filter(user => user.id !== userId);
        setUsers(updatedUsers);
    };

    return (
        <div className="user-management-container">
            <h2>User Management</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.role}</td>
                            <td>
                                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                {/* Add edit and view actions as needed */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Add additional UI for adding new users, editing users, etc. */}
        </div>
    );
};

export default UserManagement;
