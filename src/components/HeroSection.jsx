import React from "react";
import { useState } from "react";
import hero1 from "../assets/OBJECTS.png";
import call_logo from "../assets/call_logo.png";
import ContactForm from "./ContactForm";
const HeroSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const handleCallButtonClick = () => {
    const phoneNumber = "9156093845"; // Replace with the actual phone number
    window.open(`tel:${phoneNumber}`);
  };
  return (
    <section
      id="home"
      className="flex flex-col gap-8 md:flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-24 lg:px-[144px] py-10 md:py-10 lg:py-[113px] max-w-full rounded-lg "
    >
      <div className="lg:w-1/2  w-full flex-shrink-0 ">
        <h1 className="text-[40px] md:text-[60px] leading-tight font-bold text-primary lg:text-left text-center ">
          Innovative Solution
        </h1>
        <h2 className="text-[35px] md:text-[55px] leading-tight font-bold text-white mb-4 lg:text-left text-center">
          for Digital future
        </h2>
        <p className="text-lg  lg:text-left text-center text-gray-700 mb-6 mt-4 md:mt-[38px]">
          " If everyone is moving forward together, then success takes care of
          itself. "
        </p>
        <div className="mt-6 md:mt-[56px] flex flex-col md:flex-row gap-4 md:gap-[16px] lg:justify-start md:justify-center">
          <button
            className="bg-primary text-white font-semibold py-3 px-6 rounded-md shadow-md transform transition-all hover:bg-blue-600 hover:scale-105 focus:outline-none max-w-xs"
            onClick={() => setIsContactOpen(true)}
          >
            Contact Us
          </button>
          <button class="bg-transparent text-primary border-2 py-3 px-8 border-primary font-semibold rounded-md shadow-md transform transition-all hover:bg-primary hover:text-white focus:outline-none max-w-xs">
            <a
              href="tel:7905492116"
              // class="text-primary"
              onClick={handleCallButtonClick}
            >
              Call Us
            </a>
          </button>
        </div>
      </div>
      {/* Contact Form Modal */}
      {isContactOpen && <ContactForm onClose={() => setIsContactOpen(false)} />}
      {/* <div className="md:w-1.5/2 w-full pt-10 md:pt-[100px]">
        <img
          //  src={hero1}
          alt="Technology Illustration"
          className="w-full max-w-[472px] max-h-[288px] h-auto rounded-lg  transform transition-all hover:scale-105"
        />
      </div> */}
    </section>
  );
};

export default HeroSection;
