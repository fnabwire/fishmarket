import React from 'react';

function AboutUs() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-[#ee9b00]"> {/* Orange title */}
            About Our Fish Market Platform
          </h2>
          <p className="text-lg text-gray-600">
            Connecting you directly with the freshest seafood from local fishermen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-[#ee9b00]"> {/* Orange title */}
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to provide a sustainable and efficient platform that benefits both local fishermen and seafood enthusiasts. We strive to deliver the highest quality, freshest catch directly from the ocean to your doorstep. By connecting buyers and sellers directly, we aim to support local communities and promote responsible fishing practices.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-[#ee9b00]"> {/* Orange title */}
              Why Choose Us?
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>Direct access to fresh seafood from local fishermen.</li>
              <li>Support for sustainable and responsible fishing practices.</li>
              <li>Transparent and reliable transactions.</li>
              <li>Wide variety of seafood options.</li>
              <li>Convenient delivery to your home.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-[#ee9b00]"> {/* Orange title */}
            Our Commitment
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We are committed to building a community where quality and sustainability are valued. Our platform is designed to ensure that every seafood lover can enjoy the freshest catch while supporting the livelihoods of local fishermen.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;