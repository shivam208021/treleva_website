import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageSrc from "../assets/carton.png";
import newsletterImageSrc from "../assets/left.png";
// import client1 from "../assets/client1.png";
// import client2 from "../assets/Ellipse.png";
// import client3 from "../assets/client3.png";

const Client = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 px-9">
      {/* Section 1: Proctor Tech Demo */}
      <div className="bg-primary text-white rounded-lg shadow-lg px-6 md:px-20 py-6 max-w-6xl w-full flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">
            Schedule a Demo and Experience Treleva Technologie's Advantage
            Yourself!
          </h2>
          <p className="mb-6 text-lg">
            Discover how Treleva Technologies can revolutionize your SDLC
            processes and ensure secure applications.
          </p>
          <button className="bg-white text-primary font-semibold py-3 px-6 rounded-md  shadow hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <img
            src={imageSrc}
            alt="Illustration"
            className="w-full max-w-sm mx-auto transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      {/* Section 2: Newsletter Signup */}
      <div className="bg-white text-gray-700 rounded-lg shadow-lg px-6 md:px-16 py-8 max-w-6xl w-full flex flex-col md:flex-row items-center mt-10">
        <div className="flex-1 mb-6 md:mb-0 md:mr-6">
          <img
            src={newsletterImageSrc}
            alt="Stay Connected"
            className="w-full max-w-sm mx-auto transform hover:scale-105 transition duration-300"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Stay Updated with{" "}
            <span className="text-primary">Treleva Technologies</span>
          </h2>
          <p className="text-lg mb-6">
            Sign up for our newsletter to get the latest updates, insights, and
            offers!
          </p>
          <form className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Email address..."
              className="flex-1 p-3 border border-gray-300 rounded-lg mb-4 md:mb-0 md:mr-4 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-primary-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Section 3: Client Testimonials Slider */}
      {/* <div className="bg-gray-100 py-10 max-w-5xl w-full text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          What Our Clients Say
        </h2>
        <Slider {...settings} className="max-w-lg mx-auto">
          {[client1, client2, client3].map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={client}
                alt={`Client ${index + 1}`}
                className="w-24 h-24 rounded-full mb-4 border-4 border-primary"
              />
              <p className="italic mb-4">
                {index === 0
                  ? "Your trusted partner in secure online assessments."
                  : index === 1
                  ? "We've seen a significant decrease in cheating concerns."
                  : "ProctorTech has revolutionized our employee certification process."}
              </p>
              <h3 className="font-bold">
                {index === 0
                  ? "Sarah Jones"
                  : index === 1
                  ? "Dr. David Lee"
                  : "Maria Garcia"}
              </h3>
              <p className="text-sm text-gray-500">
                {index === 0
                  ? "Medical Student"
                  : index === 1
                  ? "Dean of Academics"
                  : "Head of Training & Development"}
              </p>
            </div>
          ))}
        </Slider>
      </div> */}
    </div>
  );
};

export default Client;
