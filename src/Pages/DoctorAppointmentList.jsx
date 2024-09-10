import React, { useState } from 'react';
import Header from '../Components/AppointmentList/Header/Header'
import Footer from '../Components/Patient/Footer/Footer'
import AppointmentDetails from '../Components/AppointmentList/AppointmentDetails/AppointmentDetails'
import CalendarComponent from '../Components/AppointmentList/CalendarComponent/CalendarComponent'
import VideoChat from '../Components/AppointmentList/VideoChat/VideoChat'



const DoctorAppointmentList = () => {
  const [patientName] = useState('John Doe');
  const [isOnline] = useState(true);
  return (
    <div>
      <Header />
      <VideoChat patientName={patientName} isOnline={isOnline} />
      <AppointmentDetails />
      <CalendarComponent />
      <Footer />

    </div>
  )
}

export default DoctorAppointmentList
