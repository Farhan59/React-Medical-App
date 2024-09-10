import React, { useState } from 'react';
import './ContentManagement.css'; // Import your styles here if using CSS modules or external CSS

const ContentManagement = () => {
    // Dummy data (replace with actual data fetching or state management)
    const [contentItems, setContentItems] = useState([
        { id: 1, title: 'About Us', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...'},
        { id: 2, title: 'FAQs', content: '1. How do I reset my password?\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit...\n\n2. How do I contact support?\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit...'},
        { id: 3, title: 'Privacy Policy', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...'},
    ]);

    const handleEditContent = (contentId) => {
        // Implement edit content logic here
        // Placeholder alert for demonstration
        alert(`Editing content with ID ${contentId}`);
    };

    const handleDeleteContent = (contentId) => {
        // Implement delete content logic here
        const updatedContentItems = contentItems.filter(item => item.id !== contentId);
        setContentItems(updatedContentItems);
    };

    return (
        <div className="content-management-container">
            <h2>Content Management</h2>
            <div className="content-list">
                {contentItems.map(content => (
                    <div key={content.id} className="content-item">
                        <h3>{content.title}</h3>
                        <p>{content.content}</p>
                        <div className="content-actions">
                            <button onClick={() => handleEditContent(content.id)}>Edit</button>
                            <button onClick={() => handleDeleteContent(content.id)}>Delete</button>
                            {/* Add more actions as needed (e.g., view details) */}
                        </div>
                    </div>
                ))}
            </div>
            {/* Add additional UI for adding new content items, editing content, etc. */}
        </div>
    );
};

export default ContentManagement;
