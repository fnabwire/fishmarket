import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FishListings from '../components/FishListings'
import Footer from '../components/Footer' 

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FishListings />
      <Footer />  
    </div>
  )
}

export default HomePage
