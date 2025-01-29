import React from "react";
import hero1 from "../assets/Case-study__image.png"; // Replace with actual image URL

const HeroSection2 = () => {
  return (
    <div id="contact" className="font-sans p-5">
      {/* Section 1 */}
      <div className="bg-white w-full rounded-lg text-center py-12 md:py-[58px] px-6 md:px-[100px] mb-10 ">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Transform Your Business Idea into Vision with{" "}
          <span className="text-blue-500">Treleva Technology</span>.
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Join countless institutions, businesses, and students who trust
          Treleva Technology for secure, reliable solutions. Discover how our
          services can elevate your business to the next level.
        </p>
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
          Contact Us
        </button>
      </div>

      {/* Section 2 - "Our Work" */}
      <div id="work" className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Work</h2>
        <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
          Take a look at some of the successful projects we’ve delivered to our
          clients. Our team ensures that every project is completed with
          precision, creativity, and a commitment to excellence.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 px-4 md:px-[100px]">
        <div className="flex-shrink-0  w-full lg:w-1/2">
          <img
            src={hero1} // Replace this with the actual image URL
            alt="Website Design"
            className="rounded-lg w-1.5/2 shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="text-left w-full lg:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Website Design for SCFC Canada
          </h3>
          <p className="text-gray-600 mb-6">
            Born out of a vision, a single-minded objective that puts service
            before anything else, Swift Clearance and Forwarding Corp. is
            surging forward to deliver the best services in the shipping and
            logistics industry. Its meteoric rise stems from a solid foundation
            backed by over 20 years of rich experience in freight forwarding.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:underline font-medium text-lg"
          >
            Read more...
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
