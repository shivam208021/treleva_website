import React from "react";
import link from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  Facebook as FacebookIcon,
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  Call,
  WhatsApp,
  ArrowUpward as ArrowUpwardIcon,
} from "@mui/icons-material";
//import TrelevaLogo from "../assets/Treleva_logo_shivam";

// import logo from "../assets/Treleva_logo_shivam";
import logo from "../assets/TrelevaLogo.png";

const Footer = () => {
  const handleWhatsAppButtonClick = () => {
    const whatsappNumber = "41779931927"; // Replace with the actual WhatsApp number
    const message = encodeURIComponent("Hello!!");
    window.open(
      `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`,
      "_blank"
    );
  };

  const handleCallButtonClick = () => {
    const phoneNumber = "9156093845"; // Replace with the actual phone number
    window.open(`tel:${phoneNumber}`);
  };

  const iconStyle = {
    fontSize: "32px",
    color: "white",
    margin: "0 15px",
  };

  const emailLink = "mailto:trapti.shinde@treleva.org";

  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and About */}
          <div className="w-full sm:w-1/3 text-center sm:text-left mb-4 sm:mb-0">
            <img
              src={logo}
              alt="Treleva"
              className="w-32 h-10 mx-auto sm:mx-0"
            />
            <p className="mt-4 text-sm">
              Where Technology is driven by Passion
            </p>
            <p className="text-sm mt-2">
              Secure Exams Anywhere, Anytime. Powered by Advanced AI Technology
            </p>
            <p className="text-sm">
              Made By{" "}
              <span className="text-blue-400 cursor-pointer hover:underline">
                Treleva Technology
              </span>
            </p>
          </div>

          {/* Products, Features, and Legal */}
          <div className="w-full sm:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8 mb-4 sm:mb-0 ">
            <div className="text-center md:text-left">
              <h3 className="text-white text-lg font-semibold mb-2 border-b-2 border-primary inline-block">
                Products
              </h3>
              <ul className="space-y-1  text-sm">
                <li>AI Proctoring</li>
                <li>Exam Types</li>
                <li>Question Bank</li>
                <li>Exam Analysis</li>
                <li>Content Protection</li>
                <li>Learnings</li>
                <li>API Integration</li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-white text-lg font-semibold mb-2 border-b-2 border-primary inline-block">
                Features
              </h3>
              <ul className="space-y-1 text-sm">
                <li>Pricing</li>
                <li>Business</li>
                <li>Audits</li>
                <li>Compliance</li>
                <li>Content Protection</li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-white text-lg font-semibold mb-2 border-b-2 border-primary inline-block">
                Legal
              </h3>
              <ul className="space-y-1 text-sm">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Compliance</li>
                <li>Content Protection</li>
                <li>Support</li>
                <li>Help Centre</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Icons and Contact Us */}
        <div className="text-center mt-8">
          <h2 className="text-2xl font-bold text-gray-500 mb-3">Contact Us</h2>
          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/trelevatech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FacebookIcon style={iconStyle} />
            </a>
            <a href={emailLink} className="text-white">
              <EmailIcon style={iconStyle} />
            </a>
            <a
              href="https://www.linkedin.com/company/trelevatech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <LinkedInIcon style={iconStyle} />
            </a>
            <a
              href="tel:7905492116"
              className="text-white"
              onClick={handleCallButtonClick}
            >
              <Call style={iconStyle} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=7905492116&text=Hello"
              className="text-white"
              onClick={handleWhatsAppButtonClick}
            >
              <WhatsApp style={iconStyle} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm mt-6">
          &copy; 2024 Treleva Tech. All rights reserved.
        </div>
      </div>

      <button
        onClick={() => scroll.scrollToTop()}
        className="fixed bottom-4 right-4 p-4 bg-blue-400 text-white rounded-full"
      >
        <ArrowUpwardIcon style={{ fontSize: "24px" }} />
      </button>
    </footer>
  );
};

export default Footer;
