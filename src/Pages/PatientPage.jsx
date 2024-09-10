import React from 'react'
import Header from '../Components/Patient/Header/Header';
import Hero from '../Components/Patient/Hero/Hero';
import Slider from '../Components/Patient/Slider/Slider';
import Value from '../Components/Patient/Value/Value';
import Contact from '../Components/Patient/Contact/Contact';
import GetStart from '../Components/Patient/GetStart/GetStart';
import Footer from '../Components/Patient/Footer/Footer';
import ImageUpload from '../Components/Patient/ImageUpload/ImageUpload';
import BMICalculator from '../Components/Patient/BMICalculator/BMICalculator';
import JoinCall from '../Components/Patient/JoinCall/JoinCall';
import './PatientPage.css';

const PatientPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="row-container">
        <JoinCall />
        <ImageUpload />
      </div>
      <div className="row-container">
        <BMICalculator />
        <Value />
      </div>

      <Contact />
      <GetStart />
      <Footer />
    </div>
  )
}

export default PatientPage
