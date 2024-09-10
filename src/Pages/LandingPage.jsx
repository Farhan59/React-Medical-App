import React from 'react'
import Header from '../Components/LandingPage/Header/Header'
import Hero from '../Components/LandingPage/Hero/Hero'
import FeaturesSection from '../Components/LandingPage/FeaturesSection/FeaturesSection'
import AboutSection from '../Components/LandingPage/AboutSection/AboutSection'
import ServicesSection from '../Components/LandingPage/ServicesSection/ServicesSection'
import TestimonialsSection from '../Components/LandingPage/TestimonialsSection/TestimonialsSection'
import CallToAction from '../Components/LandingPage/CallToAction/CallToAction'
import BenefitsSection from '../Components/LandingPage/BenefitsSection/BenefitsSection'
import FAQSection from '../Components/LandingPage/FAQSection/FAQSection'
import Footer from '../Components/LandingPage/Footer/Footer'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <CallToAction />
      <AboutSection />
      <BenefitsSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default LandingPage
