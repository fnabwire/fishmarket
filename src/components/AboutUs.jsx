import React from "react";

function AboutUs() {
  const primaryColor = "#E9D8A6"; // Light Yellow
  const secondaryColor = "#29ABE2"; // Bright Blue

  const teamMembers = [
    {
      name: "Local Fishermen",
      description:
        "The heart of our platform, providing the freshest catch daily.",
      icon: "fa-ship",
    },
    {
      name: "Our Community",
      description:
        "Buyers who value quality, sustainability, and supporting local economies.",
      icon: "fa-users",
    },
    {
      name: "Our Platform",
      description:
        "Connecting fishermen and buyers seamlessly with transparency and ease.",
      icon: "fa-globe",
    },
    {
      name: "Sustainability",
      description:
        "Committed to promoting responsible fishing practices for a healthy ocean.",
      icon: "fa-leaf",
    },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: primaryColor }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-semibold text-gray-800 mb-4"
            style={{ color: secondaryColor }}
          >
            About Our Fish Market Platform
          </h2>
          <p className="text-lg text-gray-700" style={{ color: primaryColor }}>
            Connecting you directly with the freshest seafood from local
            fisherfolks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
            <h3
              className="text-2xl font-semibold text-gray-800 mb-4"
              style={{ color: secondaryColor }}
            >
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to provide a sustainable and efficient platform
              that benefits both local fishermen and seafood enthusiasts. We
              strive to deliver the highest quality, freshest catch directly
              from the ocean to your doorstep. By connecting buyers and sellers
              directly, we aim to support local communities and promote
              responsible fishing practices.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
            <h3
              className="text-2xl font-semibold text-gray-800 mb-4"
              style={{ color: secondaryColor }}
            >
              Why Choose Us?
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>
                <strong style={{ color: secondaryColor }}>
                  Direct Access:
                </strong>{" "}
                Fresh seafood straight from local fisherfolks.
              </li>
              <li>
                <strong style={{ color: secondaryColor }}>
                  Sustainability:
                </strong>{" "}
                Supporting responsible fishing methods.
              </li>
              <li>
                <strong style={{ color: secondaryColor }}>Transparency:</strong>{" "}
                Reliable and clear transactions.
              </li>
              <li>
                <strong style={{ color: secondaryColor }}>Variety:</strong> A
                wide selection of the ocean's bounty.
              </li>
              <li>
                <strong style={{ color: secondaryColor }}>Convenience:</strong>{" "}
                Delivered fresh to your doorstep.
              </li>
            </ul>
          </div>
        </div>

        {/* Stylish Cards Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:scale-105 transition-transform duration-300"
              style={{ borderTop: `4px solid ${secondaryColor}` }}
            >
              <i
                className={`fas ${member.icon} text-3xl mb-4`}
                style={{ color: secondaryColor }}
              ></i>
              <h4
                className="text-lg font-semibold text-gray-800 mb-2"
                style={{ color: secondaryColor }}
              >
                {member.name}
              </h4>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3
            className="text-2xl font-semibold text-gray-800 mb-4"
            style={{ color: secondaryColor }}
          >
            Our Commitment
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We are committed to building a community where quality and
            sustainability are valued. Our platform is designed to ensure that
            every seafood lover can enjoy the freshest catch while supporting
            the livelihoods of local fisherfolks.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
