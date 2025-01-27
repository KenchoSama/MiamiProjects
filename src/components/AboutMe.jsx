import React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import Intro from "./Intro"; // Import Intro component
import  Skills from "./Skills";

const AboutMe = () => {
  return (
    <div className="about-me-page">
      <NavBar />
      <Intro />
      <Skills />
      <Footer />
    </div>
  );
};

export default AboutMe;
