import React from "react";
import IntroImage from "../assets/img/Capture.PNG"; // Update the path to your image

const BatirIntro = () => {
  return (
    <section className="batir-intro bg-gray-100 min-h-screen flex flex-col justify-center px-6 pt-16">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
        {/* Left: Text Content Section */}
        <div className="w-full md:w-1/2 text-left order-2 md:order-1">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Innovative and results-driven Project Architect with extensive experience in residential, 
            commercial, and high-rise luxury developments. Adept at blending cutting-edge design principles 
            with technical expertise to craft spaces that resonate with people and stand the test of time.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Skilled in computer-aided design (CAD) software, Adobe Suite, Microsoft Office, and construction methodologies, 
            bringing both precision and creativity to every project.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Key achievements include delivering iconic developments such as the Midtown Tropic Residences, 
            showcasing a dedication to excellence and meticulous attention to detail. Proficient in design 
            coordination, permitting, and ensuring seamless integration of form and function in all architectural solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Committed to fostering collaboration among multidisciplinary teams. Passionate about staying ahead 
            of industry trends, exploring innovative design concepts, and creating spaces that connect with 
            people on a deeper level. Every blueprint tells a story, and the goal is to make each one unforgettable.
          </p>
        </div>

        {/* Right: Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 order-1 md:order-2">
          <img
            src={IntroImage}
            alt="Batir Carrera"
            className="rounded-lg shadow-lg object-cover w-80 md:w-[450px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BatirIntro;
