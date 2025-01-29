import React from "react";
import AboutImage from "../assets/About.png";

const About = () => {
  return (
    <div className="ml-4 mr-4">
      <div
        style={{ width: "100%", height: "10px" }}
        className="about-scroll"
      ></div>

      <div className="container mx-auto p-8 about bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg text-white">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 text-center">
            <img
              alt="about"
              src={AboutImage}
              className="md:w-3/4 mx-auto mb- rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold about-h2 mb-4 text-center">
              ABOUT US
            </h2>
            <p className="text-lg leading-7 text-justify">
              Founded in 2020. Started with a dream to make a niche among IT
              companies. We are an IT services company and provide solutions to
              our clients for Mobile App development, Web development, Banking
              solutions, E-Commerce, and many more using the latest
              technologies. <br />
              <br />
              Our team is a group of talented and passionate people who are
              always eager to learn. This perseverance of our team has always
              delivered high-quality results in the specified time given by the
              clients. Our friendly and committed work environment has helped us
              retain our Team members and Clients, and we look forward to add
              many more of them in the near future. <br /> <br />
              We strongly believe in Henry Ford's words, “If everyone is moving
              forward together, then success takes care of itself.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
