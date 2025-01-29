import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/TrelevaLogo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLoginClick = () => {
    navigate("/login");
    setIsMobileMenuOpen(false); // Close the menu on login click
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4  py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-primary font-bold text-2xl tracking-wider flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-28 h-14 md:w-56 md:h-14" />
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li className="hover:text-blue-500 cursor-pointer font-medium">
            Home
          </li>
          <li className="hover:text-blue-500 cursor-pointer font-medium">
            Services
          </li>
          <li className="hover:text-blue-500 cursor-pointer font-medium">
            Pricing
          </li>
          <li className="hover:text-blue-500 cursor-pointer font-medium">
            Resources
          </li>
        </ul>

        {/* Login Button for Desktop */}
        <button
          className="bg-primary hover:bg-blue-600 text-white px-4 py-1 rounded-md font-medium hidden md:block"
          onClick={handleLoginClick}
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

      {/* Mobile Navigation Links with Slide-in Effect */}
      {isMobileMenuOpen && (
        <div className="md:hidden transition-all duration-300 transform bg-white text-gray-700 ease-in-out">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="hover:text-blue-500 cursor-pointer font-medium">
              Home
            </li>
            <li className="hover:text-blue-500 cursor-pointer font-medium">
              Services
            </li>
            <li className="hover:text-blue-500 cursor-pointer font-medium">
              Pricing
            </li>
            <li className="hover:text-blue-500 cursor-pointer font-medium">
              Resources
            </li>
            <li>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md font-medium"
                onClick={handleLoginClick}
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
