import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Schedule.css';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [scheduleData, setScheduleData] = useState({});
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [breakTime, setBreakTime] = useState('');

  const handleDateChange = (date) => {
    if (date instanceof Date) {
      setSelectedDate(date);
      // Fetch schedule data for the selected date from backend if needed
      // For now, let's initialize with dummy data
      setScheduleData({
        startTime: '10:00 AM',
        endTime: '06:00 PM',
        breakTime: '01:00 PM - 02:00 PM',
      });
    }
  };

  const handleSaveSchedule = () => {
    // Save schedule data to backend or update state
    setScheduleData({
      startTime,
      endTime,
      breakTime,
    });
  };

  return (
    <div className="schedule-container">
      <div className="calendar-container">
        <h3>Calendar</h3>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="react-calendar"
        />
      </div>
      <div className="schedule-details">
        <h3>Schedule Details</h3>
        {selectedDate && (
          <>
            <div className="input-group">
              <label>Start Time:</label>
              <input
                type="text"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>End Time:</label>
              <input
                type="text"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Break Time:</label>
              <input
                type="text"
                value={breakTime}
                onChange={(e) => setBreakTime(e.target.value)}
              />
            </div>
            <button className="save-button" onClick={handleSaveSchedule}>
              Save Schedule
            </button>
            <div className="saved-schedule">
              <h4>Saved Schedule for {selectedDate.toLocaleDateString()}</h4>
              <p>Start Time: {scheduleData.startTime}</p>
              <p>End Time: {scheduleData.endTime}</p>
              <p>Break Time: {scheduleData.breakTime}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Schedule;
