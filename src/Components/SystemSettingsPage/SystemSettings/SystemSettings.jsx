import React, { useState } from 'react';
import './SystemSettings.css';

const SystemSettings = () => {
    const [emailTemplates, setEmailTemplates] = useState({
        welcomeEmail: 'Welcome to our platform!',
        appointmentConfirmation: 'Your appointment is confirmed.',
        passwordReset: 'Reset your password here.',
    });

    const handleEmailTemplateChange = (event, templateKey) => {
        setEmailTemplates({
            ...emailTemplates,
            [templateKey]: event.target.value,
        });
    };

    const saveSettings = () => {
        // Logic to save settings
        console.log('Settings saved:', emailTemplates);
    };

    return (
        <div className="system-settings-container">
            <h2>System Settings</h2>

            <div className="setting-section">
                <h3>Email Templates</h3>
                <div className="email-template">
                    <label htmlFor="welcomeEmail">Welcome Email:</label>
                    <textarea
                        id="welcomeEmail"
                        value={emailTemplates.welcomeEmail}
                        onChange={(e) => handleEmailTemplateChange(e, 'welcomeEmail')}
                        rows="4"
                    />
                </div>
                <div className="email-template">
                    <label htmlFor="appointmentConfirmation">Appointment Confirmation:</label>
                    <textarea
                        id="appointmentConfirmation"
                        value={emailTemplates.appointmentConfirmation}
                        onChange={(e) => handleEmailTemplateChange(e, 'appointmentConfirmation')}
                        rows="4"
                    />
                </div>
                <div className="email-template">
                    <label htmlFor="passwordReset">Password Reset:</label>
                    <textarea
                        id="passwordReset"
                        value={emailTemplates.passwordReset}
                        onChange={(e) => handleEmailTemplateChange(e, 'passwordReset')}
                        rows="4"
                    />
                </div>
            </div>

            <div className="button-container">
                <button className="save-button" onClick={saveSettings}>Save Settings</button>
            </div>
        </div>
    );
};

export default SystemSettings;
