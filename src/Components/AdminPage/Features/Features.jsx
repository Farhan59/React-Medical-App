import React from 'react';
import './Features.css';

const Features = () => {
    const features = [
        { name: 'Appointment Details', description: 'View detailed information about appointments.', component: 'AppointmentDetailsPage' },
        { name: 'Appointment Management', description: 'Manage appointments for all doctors and patients.', component: 'AppointmentManagementPage' },
        { name: 'Analytics Reports', description: 'Get insights into usage statistics and trends.', component: 'AnalyticsReportsPage' },
        { name: 'Audit Logs', description: 'Track actions performed by admins and users.', component: 'AuditLogsPage' },
        { name: 'Backup & Restore', description: 'Options for data backup and restoration procedures.', component: 'BackupRestorePage' },
        { name: 'Content Management', description: 'Manage static content and FAQs.', component: 'ContentManagementPage' },
        { name: 'User Management', description: 'View, add, edit, and delete user accounts.', component: 'UserManagementPage' },
        { name: 'System Settings', description: 'Configure email templates, notifications, and settings.', component: 'SystemSettingsPage' },
        { name: 'System Health Monitoring', description: 'Monitor system performance and errors.', component: 'SystemHealthMonitoringPage' },
        { name: 'Security Access Control', description: 'Manage roles and permissions.', component: 'SecurityAccessControlPage' },
        { name: 'Integration Management', description: 'Integrate external services or APIs.', component: 'IntegrationManagementPage' },
        { name: 'Feedback & Support Management', description: 'Handle user feedback and support tickets.', component: 'FeedbackSupportManagementPage' },
    ];

    return (
        <div className="features-container">
            {features.map((feature, index) => (
                <div key={index} className="feature-box">
                    <div className="feature-header">
                        <h3>{feature.name}</h3>
                    </div>
                    <div className="feature-body">
                        <p>{feature.description}</p>
                    </div>
                    <div className="feature-footer">
                        <a href={`/${feature.component}`} className="details-link">Details</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Features;
