import React from "react";
import iconOne from "../assets/iconOne.png";
import iconTwo from "../assets/iconTwo.png";
import iconThree from "../assets/iconThree.png";

const ServicesSection = () => {
  return (
    <div id="services" className="container mx-auto mt-8">
      <h2 className=" text-center text-3xl font-bold text-gray-800 mb-6">
        {" "}
        our services
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-[336px] w-full mx-auto">
          <div className="flex flex-col items-center p-6">
            <img
              src={iconOne}
              alt="Javascript Development"
              className="w-16 h-16"
            />
            <h2 className="text-[#001F3E] text-center font-inter text-[25px] font-bold leading-[33.25px] mt-4">
              Javascript Development
            </h2>
            <p className="text-[#717171] text-center font-inter text-[15px] font-medium leading-[23.145px] mt-4">
              Lockdown exams with advanced security measures to prevent
              cheating.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-[336px] w-full mx-auto">
          <div className="flex flex-col items-center p-6">
            <img src={iconTwo} alt="Java Development" className="w-16 h-16" />
            <h2 className="text-[#001F3E] text-center font-inter text-[25px] font-bold leading-[33.25px] mt-4">
              Java Development
            </h2>
            <p className="text-[#717171] text-center font-inter text-[15px] font-medium leading-[23.145px] mt-4">
              Lockdown exams with advanced security measures to prevent
              cheating.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-[336px] w-full mx-auto md:col-span-2 lg:col-span-1 lg:w-full md:w-1/2 ">
          <div className="flex flex-col items-center p-6">
            <img
              src={iconThree}
              alt="Mobile Development"
              className="w-16 h-16"
            />
            <h2 className="text-[#001F3E] text-center font-inter text-[25px] font-bold leading-[33.25px] mt-4">
              Mobile Development
            </h2>
            <p className="text-[#717171] text-center font-inter text-[15px] font-medium leading-[23.145px] mt-4">
              Lockdown exams with advanced security measures to prevent
              cheating.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
