import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ImpactDiaagram from '../components/ImpactDiagram'
import Footer from '../components/Footer' 

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ImpactDiaagram />
      <Footer />  
    </div>
  )
}

export default HomePage
