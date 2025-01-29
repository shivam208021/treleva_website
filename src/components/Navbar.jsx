import React, { useState } from "react";
import logo from "../assets/TrelevaLogo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-primary font-bold text-2xl tracking-wider flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-28 h-14 md:w-56 md:h-14" />
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li className="hover:text-blue-500 cursor-pointer font-medium">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer font-medium">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer font-medium">
            <a href="#work">Work</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer font-medium">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Login Button for Desktop */}
        <button
          className="bg-primary hover:bg-blue-600 text-white px-4 py-1 rounded-md font-medium hidden md:block"
          onClick={() => (window.location.href = "#login")}
        >
          Login
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-blue-500 focus:outline-none"
            onClick={handleMobileMenuToggle}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden transition-all duration-300 transform bg-white text-gray-700 ease-in-out">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="hover:text-blue-500 cursor-pointer font-medium">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-blue-500 cursor-pointer font-medium">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-blue-500 cursor-pointer font-medium">
              <a href="#work">Work</a>
            </li>
            <li className="hover:text-blue-500 cursor-pointer font-medium">
              <a href="#contact">Contact</a>
            </li>
            <li>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md font-medium"
                onClick={() => (window.location.href = "#login")}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
