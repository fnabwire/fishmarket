import React from 'react';

function HeroSection() {
  const primaryColor = '#E9D8A6'; // Light Yellow
  const textColorDark = '#001219'; // Dark Teal
  const accentColor = '#29ABE2'; // Bright Blue
  const accentColorHover = '#0077BE'; // Darker Blue

  return (
    <div
      className="flex flex-col gap-8 justify-center items-center w-full py-24"
      style={{ backgroundColor: primaryColor }}
    >
      <div className="text-center p-8">
        <h1 className="text-5xl md:text-7xl font-black mb-4" style={{ color: textColorDark }}>
          Fresh Fish, Direct from the Ocean!
        </h1>
        <p className="text-xl md:text-3xl mb-6" style={{ color: textColorDark }}>
          Connect directly with local fisherfolks in Mombasa and get the freshest catch delivered right to your door.
        </p>
        <div className="flex gap-4 items-center justify-center">
          <button
            className="bg-white hover:bg-gray-200 text-accentColor py-3 px-6 rounded-full font-semibold transition duration-300 shadow-md"
            style={{ backgroundColor: accentColor, color: 'white', ':hover': { backgroundColor: accentColorHover } }}
          >
            Explore Listings
          </button>
          <button
            className="border-2 border-accentColor text-accentColor hover:bg-accentColor hover:text-white py-3 px-6 rounded-full font-semibold transition duration-300 shadow-md"
            style={{ borderColor: accentColor, color: accentColor, ':hover': { backgroundColor: accentColorHover, color: 'white' } }}
          >
            Sell Your Fish
          </button>
        </div>
      </div>
      {/* Decorative Waves (Optional) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ pointerEvents: 'none' }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-white text-primaryColor">
          <path d="M1200 120L0 120 600 0z"></path>
        </svg>
      </div>
    </div>
  );
}

export default HeroSection;