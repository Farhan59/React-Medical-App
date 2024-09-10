import React from 'react'
import Header from '../Components/Patient/Header/Header'
import Footer from '../Components/Patient/Footer/Footer'
import VideoChat from '../Components/AppointmentList/VideoChat/VideoChat'

const StartVideoCall = () => {
  return (
    <div>
      <Header/>
      <VideoChat/>
      <Footer/>
    </div>
  )
}

export default StartVideoCall
