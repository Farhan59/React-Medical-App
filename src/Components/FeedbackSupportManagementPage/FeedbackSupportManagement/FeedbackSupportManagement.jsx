import React, { useState } from 'react';
import './FeedbackSupportManagement.css';

const FeedbackSupportManagement = () => {
    const [feedbackList, setFeedbackList] = useState([
        { id: 1, title: 'Feature Request: Dark Mode', status: 'Open', createdAt: '2024-07-15' },
        { id: 2, title: 'Bug Report: Error when uploading images', status: 'In Progress', createdAt: '2024-07-14' },
        { id: 3, title: 'General Inquiry: How to change profile picture?', status: 'Closed', createdAt: '2024-07-13' },
    ]);

    const handleStatusChange = (id, newStatus) => {
        const updatedFeedbackList = feedbackList.map(item =>
            item.id === id ? { ...item, status: newStatus } : item
        );
        setFeedbackList(updatedFeedbackList);
    };

    return (
        <div className="feedback-support-container">
            <h2>Feedback and Support Management</h2>

            <div className="feedback-list">
                {feedbackList.map(feedback => (
                    <div key={feedback.id} className="feedback-item">
                        <div className="feedback-header">
                            <h3>{feedback.title}</h3>
                            <span className={`status ${feedback.status.toLowerCase()}`}>
                                {feedback.status}
                            </span>
                        </div>
                        <p><strong>Created At:</strong> {feedback.createdAt}</p>
                        <div className="status-buttons">
                            <button onClick={() => handleStatusChange(feedback.id, 'Open')}>Open</button>
                            <button onClick={() => handleStatusChange(feedback.id, 'In Progress')}>In Progress</button>
                            <button onClick={() => handleStatusChange(feedback.id, 'Closed')}>Closed</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeedbackSupportManagement;
