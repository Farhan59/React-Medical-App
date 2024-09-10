import React, { useState } from 'react';
import './AppointmentManagement.css'; // Import your styles here if using CSS modules or external CSS

const AppointmentManagement = () => {
    // Dummy data (replace with actual data fetching or state management)
    const [appointments, setAppointments] = useState([
        { id: 1, doctor: 'Dr. Smith', patient: 'John Doe', date: '2024-07-15', time: '10:00 AM', status: 'Scheduled' },
        { id: 2, doctor: 'Dr. Johnson', patient: 'Jane Smith', date: '2024-07-16', time: '11:30 AM', status: 'Completed' },
        { id: 3, doctor: 'Dr. Brown', patient: 'Robert Johnson', date: '2024-07-17', time: '02:00 PM', status: 'Scheduled' },
    ]);

    const handleCancelAppointment = (appointmentId) => {
        // Implement cancel appointment logic here
        const updatedAppointments = appointments.map(appointment =>
            appointment.id === appointmentId ? { ...appointment, status: 'Cancelled' } : appointment
        );
        setAppointments(updatedAppointments);
    };

    return (
        <div className="appointment-management-container">
            <h2>Appointment Management</h2>
            <table className="appointment-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Doctor</th>
                        <th>Patient</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => (
                        <tr key={appointment.id}>
                            <td>{appointment.id}</td>
                            <td>{appointment.doctor}</td>
                            <td>{appointment.patient}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.time}</td>
                            <td>{appointment.status}</td>
                            <td>
                                {appointment.status !== 'Cancelled' && (
                                    <button onClick={() => handleCancelAppointment(appointment.id)}>Cancel</button>
                                )}
                                {/* Add edit and view actions as needed */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Add additional UI for filtering, sorting, and other management functionalities */}
        </div>
    );
};

export default AppointmentManagement;
