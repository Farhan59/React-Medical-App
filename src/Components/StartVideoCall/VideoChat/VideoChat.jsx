import React, { useState } from 'react';
import './VideoChat.css';

const VideoChat = ({ patientName, isOnline }) => {
  const [isCallActive, setIsCallActive] = useState(false);

  const handleCallToggle = () => {
    setIsCallActive(!isCallActive);
  };

  return (
    <div className="video-chat-container">
      <div className="video-screen">
        {/* Placeholder for the video call screen */}
        <div className="video-placeholder">
          {isCallActive ? "Video Call Screen" : "No Active Call"}
        </div>
      </div>
      <div className="video-chat-info">
        <h2>{patientName}</h2>
        <p className={`online-status ${isOnline ? 'online' : 'offline'}`}>
          {isOnline ? 'Online' : 'Offline'}
        </p>
        <button className="call-button" onClick={handleCallToggle}>
          {isCallActive ? 'Cancel Call' : 'Join Call'}
        </button>
      </div>
    </div>
  );
}

export default VideoChat;
