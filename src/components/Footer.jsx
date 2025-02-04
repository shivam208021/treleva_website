import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Facebook as FacebookIcon,
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  Call,
  WhatsApp,
  ArrowUpward as ArrowUpwardIcon,
} from "@mui/icons-material";

import logo from "../assets/trelevaV1.13.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 1️⃣ Company Info */}
        <div className="text-center md:text-left">
          <img src={logo} alt="Treleva" className="w-36 mx-auto md:mx-0 mb-3" />
          <p className="text-sm">Where Technology is driven by Passion</p>
          <p className="text-sm mt-2">
            Made By{" "}
            <span className="text-blue-400 cursor-pointer hover:underline">
              Treleva Technology
            </span>
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div className="text-center">
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-blue-400">
                Work
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Contact Info */}
        <div className="text-center md:text-right">
          <h3 className="text-white text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:trapti.shinde@treleva.org"
              className="text-blue-400 hover:underline"
            >
              trapti.shinde@treleva.org
            </a>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a href="tel:7905492116" className="text-blue-400 hover:underline">
              7905492116
            </a>
          </p>
          <div className="flex justify-center md:justify-end space-x-4 mt-2">
            <a
              href="https://www.facebook.com/trelevatech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FacebookIcon fontSize="large" />
            </a>
            <a
              href="mailto:trapti.shinde@treleva.org"
              className="hover:text-blue-400"
            >
              <EmailIcon fontSize="large" />
            </a>
            <a
              href="https://www.linkedin.com/company/trelevatech/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="tel:7905492116" className="hover:text-blue-400">
              <Call fontSize="large" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=7905492116&text=Hello"
              className="hover:text-blue-400"
            >
              <WhatsApp fontSize="large" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm">
        &copy; 2024 Treleva Tech. All rights reserved.
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => scroll.scrollToTop()}
        className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
      >
        <ArrowUpwardIcon fontSize="medium" />
      </button>
    </footer>
  );
};

export default Footer;
