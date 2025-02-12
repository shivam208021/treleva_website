import React, { useState } from "react";
import hero1 from "../assets/canopus.jpg";
import hero2 from "../assets/veggiemart.jpg";
import hero3 from "../assets/parulkar.jpg";
import ContactForm from "./ContactForm"; // Import the contact form component

const HeroSection2 = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div id="contact" className="font-sans p-5">
      {/* Section 1 */}
      <div className="bg-white w-full rounded-lg text-center py-12 md:py-[58px] px-6 md:px-[100px] mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Transform Your Business Idea into Vision with{" "}
          <span className="text-blue-500">Treleva Technology</span>.
        </h1>
        <p className="text-[#334C65] mb-6 text-center font-inter text-[18px] font-medium leading-[25px] mt-4text-lg">
          Join countless institutions, businesses, and students who trust
          Treleva Technology for secure, reliable solutions. Discover how our
          services can elevate your business to the next level.
        </p>
        <button
          className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={() => setIsContactOpen(true)}
        >
          Contact Us
        </button>
      </div>

      {/* Section 2 - "Our Work" */}
      <div id="work" className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our Work
        </h2>
        <p className="text-[#334C65] text-center font-inter mb-4 text-lg max-w-3xl mx-auto">
          Take a look at some of the successful projects we’ve delivered to our
          clients. Our team ensures that every project is completed with
          precision, creativity, and a commitment to excellence.
        </p>
      </div>

      {/* <div className="flex flex-col lg:flex-row items-center gap-8 px-4 md:px-[100px]">
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img
            src={hero1}
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
      </div> */}
      <section class="text-gray-600 body-font px-9">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full p-4 object-cover object-center"
                  src={hero2}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    E-commerce
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Veggie Mart
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Helped a bussiness to grow in field of ecommerce. Veggie
                    mart is E-commerce platform which provide grocery door to
                    door
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a
                      href="https://veggiemart.in"
                      class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Visit
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={hero1}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Shipping corporation
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Canopus
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Transport and logistics holding, which owns and manages the
                    network of sea and railway container terminals, container
                    park, and fittings platforms.
                  </p>
                  <div class="flex items-center flex-wrap">
                    <a
                      href="http://91.108.104.216:3006/"
                      class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Visit
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={hero3}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Medical Wellness
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Dr.Parulkar
                  </h1>
                  <p class="leading-relaxed mb-3">
                    We build a service providing application to resolve the OPD
                    problem of Dr.Parulkar's Clinic
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a
                      href="https://parulekarseyesite.in/"
                      class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Visit
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {isContactOpen && <ContactForm onClose={() => setIsContactOpen(false)} />}
    </div>
  );
};

export default HeroSection2;
