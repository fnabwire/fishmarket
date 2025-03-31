import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#005f73] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFC107]">Fish Market Platform</h3> {/* Yellow-orange title */}
            <p className="text-sm">
              Connecting you directly with local fishermen for the freshest seafood.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFC107]">Quick Links</h3> {/* Yellow-orange title */}
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/fish-listings" className="hover:text-gray-300">
                  Fish Listings
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFC107]">Contact Us</h3> {/* Yellow-orange title */}
            <p className="text-sm">
              Email: info@fishmarket.com
              <br />
              Phone: +1 123 456 7890
              <br />
              Address: 123 Ocean View, Coastal City
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Fish Market Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;