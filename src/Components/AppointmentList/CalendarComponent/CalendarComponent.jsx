import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarComponent.css';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const appointments = {
    '2024-07-10': [
      { time: '10:00 AM - 11:00 AM', details: 'John Doe (New Patient)' },
      { time: '11:00 AM - 12:00 PM', details: 'Jane Smith (Follow-up)' },
      { time: '12:00 PM - 01:00 PM', details: 'Lunch Break' },
      { time: '01:00 PM - 02:00 PM', details: 'Mike Johnson (New Patient)' },
      { time: '02:00 PM - 03:00 PM', details: 'Peter Parker (Follow-up)' },
      { time: '03:00 PM - 04:00 PM', details: 'Clark Kent (New Patient)' },
    ],
    '2024-07-11': [
      { time: '09:00 AM - 10:00 AM', details: 'Emily Davis (New Patient)' },
      { time: '10:00 AM - 11:00 AM', details: 'Chris Brown (Follow-up)' },
      { time: '12:00 PM - 01:00 PM', details: 'Lunch Break' },
      { time: '01:00 PM - 02:00 PM', details: 'Sarah Wilson (New Patient)' },
      { time: '02:00 PM - 03:00 PM', details: 'Tony Stark (Follow-up)' },
      { time: '03:00 PM - 04:00 PM', details: 'Bruce Wayne (New Patient)' },
    ],
    '2024-07-12': [
      { time: '09:00 AM - 10:00 AM', details: 'Daniel Lee (Follow-up)' },
      { time: '11:00 AM - 12:00 PM', details: 'Alice White (New Patient)' },
      { time: '12:00 PM - 01:00 PM', details: 'Lunch Break' },
      { time: '02:00 PM - 03:00 PM', details: 'David Green (Follow-up)' },
      { time: '03:00 PM - 04:00 PM', details: 'Natasha Romanoff (New Patient)' },
    ],
  };

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (`0${date.getMonth() + 1}`).slice(-2);
    const day = (`0${date.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
  };

  const selectedDateFormatted = formatDate(selectedDate);
  const dailyAppointments = appointments[selectedDateFormatted] || [];

  return (
    <div className="calendar-container">
      <div className="calendar-box">
        <h2>Calendar</h2>
        <Calendar onChange={onDateChange} value={selectedDate} />
      </div>
      <div className="schedule-box">
        <h2>{selectedDate.toDateString() === new Date().toDateString() ? "Today's Schedule" : `Schedule for ${selectedDate.toDateString()}`}</h2>
        {dailyAppointments.length === 0 ? (
          <p>No appointments scheduled for this day.</p>
        ) : (
          <ul>
            {dailyAppointments.map((appointment, index) => (
              <li key={index}>
                <span className="appointment-time">{appointment.time}</span>
                <span className="appointment-details">{appointment.details}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CalendarComponent;
