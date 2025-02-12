import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/privacy");
  };
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Logo and Information */}
          <div className="text-center md:text-left">
            <img src={logo} alt="Treleva" className="w-36 mx-auto md:mx-0 " />
            <p className="text-xs slogan">
              Where Technology is driven by Passion
            </p>
            <p className="text-sm mt-3">
              Made By{" "}
              <span className="text-blue-400 cursor-pointer hover:underline">
                Treleva Technology
              </span>
            </p>
          </div>

          {/* Quick Links - Column 1 */}
          <div className="text-center md:text-left">
            <ul className="space-y-3">
              <li>
                <h2 className="underline  text-xl decoration-primary">Links</h2>
              </li>
              <li>
                <a href="#home" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links - Column 2 */}
          <div className="text-center md:text-left">
            <ul className="space-y-3">
              <li>
                <h2 className="underline  text-xl decoration-primary">
                  Company
                </h2>
              </li>

              <li>
                <a href="/#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-use" className="hover:text-blue-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="text-center md:text-right">
            <h3 className="text-white text-lg font-semibold mb-3">Follow Us</h3>
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
              <a href="tel:9156093845" className="hover:text-blue-400">
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
      </div>
    </footer>
  );
};

export default Footer;
