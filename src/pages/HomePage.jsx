import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Featured from '../components/Featured'
import Footer from '../components/Footer'


function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <FishListings /> */}
      <Featured/>
      <Footer/>
    </div>
  )
}

export default HomePage
