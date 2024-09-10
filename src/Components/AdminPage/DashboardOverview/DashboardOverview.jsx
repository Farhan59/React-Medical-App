import React from 'react';
import './DashboardOverview.css'; // Import your styles here if using CSS modules or external CSS

const DashboardOverview = () => {
    // Dummy data (replace with actual data fetching or state management)
    const metricsData = {
        totalUsers: 1234,
        activeUsers: 789,
        newUsersToday: 23,
        appointmentsToday: 45,
        revenueToday: '45600.78 BDT',
    };

    return (
        <div className="dashboard-overview-container">
            <h2>Dashboard Overview</h2>
            <div className="metrics">
                <div className="metric">
                    <h3>Total Users</h3>
                    <p>{metricsData.totalUsers}</p>
                </div>
                <div className="metric">
                    <h3>Active Users</h3>
                    <p>{metricsData.activeUsers}</p>
                </div>
                <div className="metric">
                    <h3>New Users Today</h3>
                    <p>{metricsData.newUsersToday}</p>
                </div>
                <div className="metric">
                    <h3>Appointments Today</h3>
                    <p>{metricsData.appointmentsToday}</p>
                </div>
                {<div className="metric">
                    <h3>Revenue Today</h3>
                    <p>{metricsData.revenueToday}</p>
    </div>}
            </div>
        </div>
    );
};

export default DashboardOverview;
