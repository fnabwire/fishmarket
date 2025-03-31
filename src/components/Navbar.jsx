import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-[#005f73] p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fish Market Platform</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
          
          <li>
            <Link to="/fish-listings" className="hover:underline">
              Fish Listings
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:underline">
              Log In
            </Link>
          </li>
          <li>
            <Link to="/signup" className="hover:underline">
              Sign Up
            </Link>
          </li>
         </ul>
      </div>
    </nav>
  );
}

export default Navbar;