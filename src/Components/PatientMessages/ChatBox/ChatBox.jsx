import React, { useState } from 'react';
import './ChatBox.css';

const doctors = [
  { id: 1, name: 'Dr. Smith' },
  { id: 2, name: 'Dr. Jones' },
  { id: 3, name: 'Dr. Williams' },
  { id: 1, name: 'Dr. Smith' },
  { id: 2, name: 'Dr. Jones' },
  { id: 3, name: 'Dr. Williams' },
  { id: 1, name: 'Dr. Smith' },
  { id: 2, name: 'Dr. Jones' },
  { id: 3, name: 'Dr. Williams' },
];

const ChatBox = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    setMessages([
      { id: 1, text: 'Previous message 1' },
      { id: 2, text: 'Previous message 2' },
    ]);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: message }]);
      setMessage('');
    }
  };

  return (
    <div className="chatbox-container">
      <div className="doctor-list">
        <h3>Doctors</h3>
        <ul>
          {doctors.map((doctor) => (
            <li
              key={doctor.id}
              onClick={() => handleDoctorClick(doctor)}
              className={selectedDoctor && selectedDoctor.id === doctor.id ? 'selected' : ''}
            >
              {doctor.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedDoctor && (
        <div className="chatbox">
          <h3>Chat with {selectedDoctor.name}</h3>
          <div className="messages">
            {messages.map((msg) => (
              <div key={msg.id} className="message">
                {msg.text}
              </div>
            ))}
          </div>
          <div className="message-input">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
