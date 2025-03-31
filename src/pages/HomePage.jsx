import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
// import FishListings from '../components/FishListings'
import Featured from '../components/Featured'

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <FishListings /> */}
      <Featured/>
    </div>
  )
}

export default HomePage
