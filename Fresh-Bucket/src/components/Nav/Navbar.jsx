import React, { useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu toggle

  return (
    <nav className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo techserve4u */}
        <img
          src="/images/fresh-bucket-images/logo_white 1.png"
          alt="TechServe4U Logo"
        />

        {/* Desktop Navigation Menu (Hidden on small screens) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="/profile" className="text-white hover:text-gray-300">
            Profile
          </Link>
          <Link to="/products" className="text-white hover:text-gray-400">
            Products
          </Link>
          <Link to="/service" className="text-white hover:text-gray-400">
            Service
          </Link>
          <Link to="/portfolio" className="text-white hover:text-gray-400">
            Portfolio
          </Link>
          <Link to="/pages" className="text-white hover:text-gray-400">
            Pages
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-400">
            Contact
          </Link>
        </div>

        {/* Search Box & Profile Icon (Visible on desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {/* Search Icon Inside Input */}
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Profile Icon */}
          <FaUserCircle className="text-3xl text-white cursor-pointer hover:text-gray-400" />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {/* If isOpen is true, it shows "✖" (cross icon) .
//            If isOpen is false, it shows "☰" (hamburger icon) . */}
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu (Visible when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          {/* Clicking this link will navigate the user to the home page ("/") */}
          <Link to="/" className="block px-4 py-2 text-white hover:bg-gray-800">
            Home
          </Link>
          <Link
            to="/Products"
            className="block px-4 py-2 text-white hover:bg-gray-800"
          >
            Products
          </Link>
          <Link
            to="/service"
            className="block px-4 py-2 text-white hover:bg-gray-800"
          >
            Service
          </Link>
          <Link
            to="/portfolio"
            className="block px-4 py-2 text-white hover:bg-gray-800"
          >
            Portfolio
          </Link>
          <Link
            to="/pages"
            className="block px-4 py-2 text-white hover:bg-gray-800"
          >
            Pages
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-white hover:bg-gray-800"
          >
            Contact
          </Link>

          {/* Search Box for Mobile */}
          <div className="flex items-center px-4 py-2">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-3 py-2 bg-gray-800 text-white border border-gray-700 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Profile Icon in Mobile Menu */}
          <div className="px-4 py-2">
            <FaUserCircle className="text-3xl text-white cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
