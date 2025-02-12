import React from "react";
import videoBg from "../assets/backdiv.mp4"; // Ensure the video is inside /src/assets

const BackgroundVideo = () => {
  return (
    <div className="video-container max-w-full">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
