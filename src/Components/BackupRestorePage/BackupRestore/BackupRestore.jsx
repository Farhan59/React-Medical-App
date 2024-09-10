import React, { useState } from 'react';
import './BackupRestore.css';

const BackupRestore = () => {
    const [backupInProgress, setBackupInProgress] = useState(false);
    const [restoreInProgress, setRestoreInProgress] = useState(false);

    const handleBackup = () => {
        setBackupInProgress(true);
        // Simulate backup process
        setTimeout(() => {
            setBackupInProgress(false);
            alert('Backup completed successfully!');
        }, 2000);
    };

    const handleRestore = () => {
        setRestoreInProgress(true);
        // Simulate restore process
        setTimeout(() => {
            setRestoreInProgress(false);
            alert('Restore completed successfully!');
        }, 3000);
    };

    return (
        <div className="backup-restore-container">
            <h2>Backup and Restore</h2>

            <div className="backup-restore-actions">
                <button
                    className={`backup-button ${backupInProgress ? 'disabled' : ''}`}
                    onClick={handleBackup}
                    disabled={backupInProgress}
                >
                    {backupInProgress ? 'Backing Up...' : 'Backup Data'}
                </button>
                <button
                    className={`restore-button ${restoreInProgress ? 'disabled' : ''}`}
                    onClick={handleRestore}
                    disabled={restoreInProgress}
                >
                    {restoreInProgress ? 'Restoring...' : 'Restore Data'}
                </button>
            </div>
        </div>
    );
};

export default BackupRestore;
