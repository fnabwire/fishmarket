import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../contexts/CartContext";
import { userAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleCart, cartItems } = useContext(CartContext);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const { loggedInUser, signOut } = userAuth();

  const navLinks = () => (
    <>
      <li>
        <Link
          to="/"
          className="hover:text-[#FFC107] transition duration-300 block"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/fish-listings"
          className="hover:text-[#FFC107] transition duration-300 block"
        >
          Fish Listings
        </Link>
      </li>
      <li>
        {loggedInUser?.role === "fisherman" ? (
          <Link
            to="/fisherman-dashboard"
            className="hover:text-[#FFC107] transition duration-300 block"
          >
            Dashboard
          </Link>
        ) : (
          ""
        )}
      </li>
      <li>
        {/* return buyer conditionaly if the role is buyer  */}
        {loggedInUser?.role === "buyer" ? (
          <Link
            to="/buyer-dashboard"
            className="hover:text-[#FFC107] transition duration-300 block"
          >
            Dashboard
          </Link>
        ) : (
          ""
        )}
      </li>
      <li>
        <Link
          to="/about"
          className="hover:text-[#FFC107] transition duration-300 block"
        >
          About
        </Link>
      </li>
      <li>
        {!loggedInUser ? (
          <Link
            to="/signup"
            className="hover:text-[#FFC107] transition duration-300 block"
          >
            Sign Up
          </Link>
        ) : (
          ""
        )}
      </li>
      <li>
        {loggedInUser ? (
          <Link
            to="/signup"
            className="hover:text-[#FFC107] transition duration-300 block"
          >
            {/* user profile icon with react iconx */}
            <i className="fa fa-user text-md" aria-hidden="true"></i>
          </Link>
        ) : (
          ""
        )}
      </li>
      <li>
        <div className="relative cursor-pointer" onClick={toggleCart}>
          <i className="fa fa-shopping-cart text-md" aria-hidden="true"></i>
          <span className="absolute top-0 text-xs font-bold px-2">
            {cartItems.length}
          </span>
        </div>
      </li>
      <li>
        {!loggedInUser ? (
          <Link
            to="/login"
            className="hover:text-[#FFC107] transition duration-300 block"
          >
            Log In
          </Link>
        ) : (
          <Link
            to="/"
            className="hover:text-[#FFC107] transition duration-300 block"
            onClick={() => {
              console.log("Logging out...");
              
              signOut();
            }}
          >
            Log Out
          </Link>
        )}
      </li>
    </>
  );
  return (
    <nav className="bg-[#29ABE2] p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-[#003366]">
          Fish Market Platform
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">{navLinks()}</ul>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-4 px-4">{navLinks(true)}</ul>
      )}
    </nav>
  );
}
