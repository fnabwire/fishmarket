import React from 'react'
import Navbar from '../components/Navbar'
import FishListings from '../components/FishListings'
import FishermanDashboard from '../components/FisherManDashboard'

export default function FishListingsPage() {
  return (
    <div>
      <Navbar/>
      <FishListings/>
      <FishermanDashboard/>
    </div>
  )
}

