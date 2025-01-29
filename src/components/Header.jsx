import React from "react";
import video from "../assets/video4.mp4";
const Header = () => {
  return (
    <header>
      <video src={video} loop autoPlay muted></video>

      <div className="row"></div>

      <div className="headerbg"></div>
    </header>
  );
};

export default Header;
