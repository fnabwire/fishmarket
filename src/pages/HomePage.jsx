import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FishListings from '../components/FishListings'

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FishListings />  
    </div>
  )
}

export default HomePage
