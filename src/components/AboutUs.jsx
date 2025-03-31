import React from "react";

function AboutUs() {
  return (
    <div class="bg-gray-100 text-gray-800">
      <div class="max-w-4xl mx-auto p-6 sm:p-10 bg-white shadow-lg rounded-lg mt-10">
        <h1 class="text-3xl sm:text-4xl font-bold text-blue-700 text-center">
          About Our Fish Market Platform
        </h1>
        <p class="mt-4 text-lg text-center text-gray-600">
          Connecting you directly with the freshest seafood from local
          fishermen.
        </p>

        <section class="mt-6">
          <h2 class="text-2xl font-semibold text-blue-600">Our Mission</h2>
          <p class="mt-2 text-gray-700 leading-relaxed">
            Our mission is to provide a sustainable and efficient platform that
            benefits both local fishermen and seafood enthusiasts. We strive to
            deliver the highest quality, freshest catch directly from the ocean
            to your doorstep. By connecting buyers and sellers directly, we aim
            to support local communities and promote responsible fishing
            practices.
          </p>
        </section>

        <section class="mt-6">
          <h2 class="text-2xl font-semibold text-blue-600">Why Choose Us?</h2>
          <ul class="mt-2 text-gray-700 list-disc list-inside space-y-2">
            <li>Direct access to fresh seafood from local fishermen.</li>
            <li>Support for sustainable and responsible fishing practices.</li>
            <li>Transparent and reliable transactions.</li>
            <li>Wide variety of seafood options.</li>
            <li>Convenient delivery to your home.</li>
          </ul>
        </section>

        <section class="mt-6">
          <h2 class="text-2xl font-semibold text-blue-600">Our Commitment</h2>
          <p class="mt-2 text-gray-700 leading-relaxed">
            We are committed to building a community where quality and
            sustainability are valued. Our platform is designed to ensure that
            every seafood lover can enjoy the freshest catch while supporting
            the livelihoods of local fishermen.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
