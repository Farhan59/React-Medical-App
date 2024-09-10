import React, { useState } from 'react';
import './IntegrationManagement.css';

const IntegrationManagement = () => {
    const [integrations, setIntegrations] = useState([
        { id: 1, name: 'Payment Gateway', status: 'Active', apiKey: 'XXXXXXXXXXXXX' },
        { id: 2, name: 'SMS Notifications', status: 'Inactive', apiKey: 'YYYYYYYYYYYYY' },
        { id: 3, name: 'Email Service', status: 'Active', apiKey: 'ZZZZZZZZZZZZZ' },
    ]);

    const toggleIntegrationStatus = (id) => {
        const updatedIntegrations = integrations.map(integration =>
            integration.id === id ? { ...integration, status: integration.status === 'Active' ? 'Inactive' : 'Active' } : integration
        );
        setIntegrations(updatedIntegrations);
    };

    return (
        <div className="integration-management-container">
            <h2>Integration Management</h2>

            <div className="integration-list">
                {integrations.map(integration => (
                    <div key={integration.id} className="integration-item">
                        <div className="integration-header">
                            <h3>{integration.name}</h3>
                            <button
                                className={`status-toggle ${integration.status.toLowerCase()}`}
                                onClick={() => toggleIntegrationStatus(integration.id)}
                            >
                                {integration.status}
                            </button>
                        </div>
                        <p><strong>API Key:</strong> {integration.apiKey}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IntegrationManagement;
