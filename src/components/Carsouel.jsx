import React from "react";
import logo1 from "../assets/final_logo3.png";
import logo2 from "../assets/hero3.png";
import logo3 from "../assets/hero3.png";
import logo4 from "../assets/hero5.png";
import logo5 from "../assets/hero5.png";
import logo6 from "../assets/hero5.png";

const LogoGrid = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div
      className="relative w-full max-w-[1200px] mx-auto my-8 md:mt-12
     p-6 md:p-16 bg-[#FFF] rounded-lg shadow-md"
    >
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-[#001F3E] font-inter text-[25px] font-bold leading-[33.25px]">
          Trusted by over 768+ Clients
        </h2>
        <p className="text-[#334C65] font-inter text-[18px] font-medium leading-[25px] mt-4">
          Our clients are our top priority, and we are committed to providing
          them with the highest level of service.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center px-[10px] py-[30px]"
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-full h-8 sm:h-24 md:h-20 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;
