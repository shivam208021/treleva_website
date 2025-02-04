import React, { useState } from "react";
import videoSource from "../assets/AboutSectionWithVideo.mp4"; // Adjust the path to your video file

const AboutSectionWithVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const video = document.getElementById("aboutVideo");
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full lg:px-[100px] mx-auto mt-10 p-8 bg-white rounded-lg ">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl text-center mt-2 md:text-4xl font-bold text-gray-800 mb-6">
          Why You Choose <span className="text-">Treleva?</span>
        </h1>
        <p className="text-[#334C65] text-center font-inter text-[18px] font-medium leading-[25px] mt-4text-lg ">
          Discover the unique advantages that make{" "}
          <span className="font-semibold text-primary">Treleva Tech</span> the
          leading choice for secure and reliable software.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 md:w-full space-y-4 text-gray-700 px-4">
          <h3 className="text-[#001F3E] font-bold text-2xl">
            Trusted by Leading Companies
          </h3>
          <p>
            We add development capacity to tech teams. Our value isn’t limited
            to building teams but is equally distributed across the project
            lifecycle.
          </p>
          <p>
            We are a custom software development company that guarantees the
            successful delivery of your project.
          </p>
          <a
            href="#"
            className="inline-block text-primary font-medium underline transition hover:text-primary"
          >
            Learn more about our services
          </a>
        </div>

        {/* Video Section */}
        <div className="relative lg:w-1/2 md:w-full px-4 mb-6 md:mb-0">
          <video
            id="aboutVideo"
            className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all"
            loop
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={togglePlayPause}
            className="absolute inset-0 flex items-center justify-center w-16 h-16 bg-primary bg-opacity-70 rounded-full text-white shadow-lg border border-primary hover:bg-primary transition"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            aria-label={isPlaying ? "Pause Video" : "Play Video"}
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionWithVideo;
