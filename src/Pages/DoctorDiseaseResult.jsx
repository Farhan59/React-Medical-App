import React from 'react';
import Header from '../Components/DoctorDiseaseResult/Header/Header';
import Footer from '../Components/DoctorDiseaseResult/Footer/Footer';
import DiseasePrediction from '../Components/DoctorDiseaseResult/DiseasePrediction/DiseasePrediction';

const DoctorDiseaseResult = () => {
  return (
    <div>
      <Header />
      <DiseasePrediction />
      <Footer />
    </div>
  );
}

export default DoctorDiseaseResult;
