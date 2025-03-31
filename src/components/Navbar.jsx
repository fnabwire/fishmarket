import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-[#29ABE2] p-4 text-white shadow-md"> {/* Light blue background */}
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#003366]">Fish Market Platform</h1> {/* Darker blue for title */}
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-[#FFC107] transition duration-300"> {/* Yellow hover for emphasis */}
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#FFC107] transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/fish-listings" className="hover:text-[#FFC107] transition duration-300">
              Fish Listings
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-[#FFC107] transition duration-300">
              Log In
            </Link>
          </li>
          <li>
            <Link to="/signup" className="hover:text-[#FFC107] transition duration-300">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;