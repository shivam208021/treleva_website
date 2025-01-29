import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import LogoCarousel from "./Carsouel";
import ServicesSection from "./ServicesSection";
import AboutSectionWithVideo from "./AboutSectionWithVideo";
import HomeSection2 from "./HomeSection2";
import Client from "./Client";
function Home() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <HeroSection />
      <LogoCarousel />
      <ServicesSection />
      {/* <Main /> */}
      <AboutSectionWithVideo />
      <HomeSection2 />
      <Client />

      <Footer />
    </>
  );
}

export default Home;
