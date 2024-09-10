import React from 'react';
import Header from '../Components/Doctor/Header/Header';
import Hero from '../Components/Doctor/Hero/Hero';
import SearchDisease from '../Components/Doctor/SearchDiseas/SearchDisease';
import AppointmentList from '../Components/Doctor/AppointmentList/AppointmentList';
import SchedulePlan from '../Components/Doctor/SchedulePlan/SchedulePlan';
import './DoctorPage.css'
import PreviousCaseHistory from '../Components/Doctor/PreviousCaseHistory/PreviousCaseHistory';
import SkinDiseasesDetection from '../Components/Doctor/SkinDiseasesDetection/SkinDiseasesDetection';
import Footer from '../Components/Patient/Footer/Footer';


const DoctorPage = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <SearchDisease />
      <div className="doctor-page-content">
        <div className="doctor-box">
          <AppointmentList />
        </div>
        <div className="doctor-box">
          <SchedulePlan />
        </div>
      </div>
      <div className="doctor-page-content">
        <div className="doctor-box">
          <PreviousCaseHistory />
        </div>
        <div className="doctor-box">
          <SkinDiseasesDetection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DoctorPage;
