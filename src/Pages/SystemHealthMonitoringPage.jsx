import React from 'react'
import Header from '../Components/AdminPage/Header/Header'
import SystemHealthMonitoring from '../Components/SystemHealthMonitoringPage/SystemHealthMonitoring/SystemHealthMonitoring'
import Footer from '../Components/AppointmentManagementPage/Footer/Footer'

const SystemHealthMonitoringPage = () => {
  return (
    <div>
      <Header/>
      <SystemHealthMonitoring/>
      <Footer/>
    </div>
  )
}

export default SystemHealthMonitoringPage
