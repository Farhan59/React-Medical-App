import React from 'react'
import Header from '../Components/DoctorPatients/Header/Header'
import Footer from '../Components/Patient/Footer/Footer'
import PatientsList from '../Components/DoctorPatients/PatientsList/PatientsList'

const DoctorPatients = () => {
  return (
    <div>
      <Header/>
      <PatientsList/>
      <Footer/>
    </div>
  )
}

export default DoctorPatients
