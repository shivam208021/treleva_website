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
import Testi from "./Testi";
import BackgroundVideo from "./BackgroundVideo";
import Getstarted from "./Getstarted";
import Pricing from "./Price";
function Home() {
  return (
    <div className="">
      <BackgroundVideo />
      <Navbar />
      {/* <Header /> */}
      <HeroSection />
      <LogoCarousel />
      <ServicesSection />
      <Getstarted />
      {/* <Main /> */}
      <AboutSectionWithVideo />
      <HomeSection2 />
      <Client />
      <Testi />
      {/* // <Pricing /> */}
      <Footer />
    </div>
  );
}

export default Home;
