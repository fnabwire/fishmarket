import React from 'react'

function HeroSection() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen w-full bg-[#e9d8a6]">
        <h1 className="text-7xl text-[#001219] font-black text-center">Fresh Fish, Direct from the Ocean!</h1>
        <p className="text-3xl text-[#001219] text-center">Connect directly with local fishermen and get the freshest catch delivered to your door.</p>
        <div className="flex gap-4 items-center justify-center">
          <button className="bg-[#ee9b00] hover:bg-[#ca6702] text-white py-3 px-5 rounded-md">Explore Listings</button>
          <button className="border-2 border-[#ee9b00] text-[#ee9b00] hover:bg-[#ca6702] hover:text-white py-3 px-5 rounded-md">Sell your fish</button>
        </div>
      </div>
  )
}

export default HeroSection