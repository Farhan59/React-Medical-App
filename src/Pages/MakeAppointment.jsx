import React from 'react'
import Header from '../Components/MakeAppointment/Header/Header'
import Footer from '../Components/Patient/Footer/Footer'
import AppointmentForm from '../Components/MakeAppointment/AppointmentForm/AppointmentForm'

const MakeAppointment = () => {
  return (
    <div>
      <Header/>
      <AppointmentForm/>
      <Footer/>
    </div>
  )
}

export default MakeAppointment
