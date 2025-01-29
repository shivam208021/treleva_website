import React from "react";
import imageSrc from "../assets/carton.png"; // Replace with the correct path to your image
import newsletterImageSrc from "../assets/left.png"; // Replace with the correct path to the newsletter image
import client1 from "../assets/client1.png"; // Replace with the correct path to the first client image
import client2 from "../assets/Ellipse.png"; // Replace with the correct path to the second client image
import client3 from "../assets/client3.png"; // Replace with the correct path to the third client image

const Client = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center py-6 px-9">
      {/* Section 1: Proctor Tech Demo */}
      <div className="bg-primary text-white rounded-lg shadow-lg px-6 md:px-[100px] py-4 max-w-[1200px] w-full flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">
            Schedule a Demo and Experience Proctor Tech's Advantage Yourself!
          </h2>
          <p className="mb-6 text-lg">
            Discover how Proctor Tech can revolutionize your exam processes and
            ensure secure assessments for your institution, business, or
            learning journey.
          </p>
          <button className="bg-white text-primary-500 font-semibold py-3 px-6 rounded-md text-black shadow hover:bg-primary-100 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <img
            src={imageSrc}
            alt="Illustration"
            className="w-full max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Section 2: Newsletter Signup */}
      <div className="bg-white text-gray-700 rounded-lg shadow-lg px-6 md:px-[var(--padding-small)] py-8 md:py-[var(--padding-medium)] max-w-[1200px] w-full flex flex-col md:flex-row items-center mt-10">
        <div className="flex-1 mb-6 md:mb-0 md:mr-6">
          <img
            src={newsletterImageSrc}
            alt="Stay Connected Illustration"
            className="w-full max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Stay Updated with{" "}
            <span className="text-primary-500">Treleva Technology</span>
          </h2>
          <p className="text-lg mb-6">
            Sign up for our newsletter to get the latest updates, insights, and
            offers directly to your inbox!
          </p>
          <form className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Email address..."
              className="flex-1 p-3 border border-gray-300 rounded-lg mb-4 md:mb-0 md:mr-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="submit"
              className="bg-primary-500 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-primary-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Section 3: Client Testimonials */}
      <div className="bg-gray-100 py-8 md:py-[var(--padding-medium)] max-w-[1200px] w-full text-center">
        <h2 className="text-3xl font-bold mb-8 mt-6 text-gray-800">
          What Our Clients Say
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-6">
          {/* Client 1 */}
          <div className="flex flex-col items-center text-center bg-white p-6 md:p-[var(--padding-small)] rounded-lg shadow-md max-w-sm hover:shadow-xl transition duration-300">
            <img
              src={client1}
              alt="Client 1"
              className="w-24 h-24 rounded-full mb-4 border-4 border-primary"
            />
            <p className="italic mb-4">
              "Your trusted partner in secure online assessments. With
              cutting-edge AI-powered proctoring and unparalleled security
              measures, we ensure exam integrity for universities, corporations,
              and online learning platforms."
            </p>
            <h3 className="font-bold">Sarah Jones</h3>
            <p className="text-sm text-gray-500">Medical Student</p>
          </div>
          {/* Client 2 */}
          <div className="flex flex-col items-center text-center bg-white p-6 md:p-[var(--padding-small)] rounded-lg shadow-md max-w-sm hover:shadow-xl transition duration-300">
            <img
              src={client2}
              alt="Client 2"
              className="w-24 h-24 rounded-full mb-4 border-4 border-primary"
            />
            <p className="italic mb-4">
              "Since implementing Proctor Tech, we've seen a significant
              decrease in cheating concerns and a boost in student confidence.
              The platform's data analytics have also been invaluable in
              improving our assessments."
            </p>
            <h3 className="font-bold">Dr. David Lee</h3>
            <p className="text-sm text-gray-500">
              Dean of Academics, State University
            </p>
          </div>
          {/* Client 3 */}
          <div className="flex flex-col items-center text-center bg-white p-6 md:p-[var(--padding-small)] rounded-lg shadow-md max-w-sm hover:shadow-xl transition duration-300">
            <img
              src={client3}
              alt="Client 3"
              className="w-24 h-24 rounded-full mb-4 border-4 border-primary"
            />
            <p className="italic mb-4">
              "ProctorTech has revolutionized our employee certification
              process. We can now deliver secure assessments remotely and
              efficiently, saving us time, and resources, and ensuring
              compliance."
            </p>
            <h3 className="font-bold">Maria Garcia</h3>
            <p className="text-sm text-gray-500">
              Head of Training & Development, Global Tech Company
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
