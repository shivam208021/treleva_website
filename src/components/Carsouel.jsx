import React from "react";
import logo1 from "../assets/virtualweb.jpg";
import logo2 from "../assets/Nokia.webp";
import logo3 from "../assets/philoptician.jpg";
import logo4 from "../assets/VeggieMartLogo.webp";
import logo5 from "../assets/parulkarlogo.png";

import logo6 from "../assets/afa.jpg";

const LogoGrid = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div
      className="relative w-full max-w-[1200px] mx-auto my-8 md:mt-12
     p-6 md:p-16 bg-[#FFF] rounded-lg shadow-md"
    >
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl text-center mt-5 md:text-4xl font-bold text-gray-800 mb-6">
          Trusted by over many Clients
        </h1>
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
              className="w-full h-8 sm:h-24 md:h-20 object-center rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;
