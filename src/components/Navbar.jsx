import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/trelevaV1.12.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Toggle Mobile Menu
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close Menu on Link Click
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle Login Click
  const handleLoginClick = () => {
    navigate("/login");
    handleLinkClick(); // Close menu if open
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="text-gray-800 body-font sticky shadow-sm bg-white top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <div className="flex justify-between w-full md:w-auto items-center">
          <a className="flex title-font font-medium items-center text-gray-900">
            <img
              src={logo}
              alt="Treleva Logo"
              className="w-26 h-16 md:w-56 md:h-14"
            />
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-900 focus:outline-none"
              onClick={handleMobileMenuToggle}
            >
              {isMobileMenuOpen ? (
                // Close (X) Icon
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Menu Icon
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
              )}
            </button>
          </div>
        </div>

        <nav className="md:ml-auto hidden md:flex flex-wrap items-center text-base justify-center">
          {["Home", "Services", "Work", "Contact"].map((item) => (
            <a
              key={item}
              className="mr-5 hover:text-primary"
              href={`#${item.toLowerCase()}`}
              onClick={handleLinkClick}
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className="hidden md:inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-primary text-white rounded text-base mt-4 md:mt-0"
          onClick={handleLoginClick}
        >
          Login
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-white text-gray-700 transition-all duration-300 transform ease-in-out"
          ref={dropdownRef}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {["Home", "Services", "Work", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-blue-500 cursor-pointer font-medium"
              >
                <a href={`#${item.toLowerCase()}`} onClick={handleLinkClick}>
                  {item}
                </a>
              </li>
            ))}
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
    </header>
  );
};

export default Navbar;
