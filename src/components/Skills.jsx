import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import githubIcon from "../assets/img/ELEV_1.jpg";
import pythonIcon from "../assets/img/ELEV_2.jpg";
import sqliteIcon from "../assets/img/ELEV_3.jpg";
import godotIcon from "../assets/img/ELEV_4.jpg";
import reactIcon from "../assets/img/ELEV_5.jpg";
import nodejsIcon from "../assets/img/ELEV_6.jpg";
import cppIcon from "../assets/img/V08.jpg";
import cssIcon from "../assets/img/V09.jpg";
import tensorFlowIcon from "../assets/img/V10.jpg";
import CenterImage from "./CenterImage"; // Import the CenterImage component

export const Skills = () => {
  const skills = [
    { img: githubIcon, description: "Project 1: A GitHub visualization tool." },
    { img: pythonIcon, description: "Project 2: A Python-based web scraper." },
    { img: sqliteIcon, description: "Project 3: SQLite database manager." },
    { img: godotIcon, description: "Project 4: A 2D game built with Godot." },
    { img: reactIcon, description: "Project 5: A portfolio site built with React." },
    { img: nodejsIcon, description: "Project 6: A Node.js REST API." },
    { img: cppIcon, description: "Project 7: A C++ graphics engine." },
    { img: cssIcon, description: "Project 8: Advanced CSS animations." },
    { img: tensorFlowIcon, description: "Project 9: Machine learning with TensorFlow." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Track active slide

  return (
    <section
      id="skills"
      className="skills-section bg-white flex flex-col justify-center items-center py-16 px-6 relative"
    >



      {/* Title */}
      <div className="skills-title text-center mt-8 mb-8"> {/* Added top margin */}
      <h2 className="skills-heading text-5xl font-extrabold text-black mb-4">Projects</h2>
      <p className="skills-description text-black text-lg max-w-2xl mx-auto">
        Swipe through to explore the carousel of skills in a 3D effect!
      </p>
      </div>

      {/* Center Image with Description and Link */}
      <CenterImage
        image={skills[currentIndex].img}
        description={skills[currentIndex].description}
        link="/" // Temporary link to the main page
      />



      {/* Swiper Carousel */}
      <div className="skills-carousel w-full max-w-6xl mt-8 px-8">
        <Swiper
          aria-label="Skill Carousel"
          modules={[Navigation, Autoplay, Pagination]}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          spaceBetween={20}
          slidesPerView={5}
          className="skills-swiper h-[300px]"
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)} // Update current index
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index} className="skills-slide custom-slide">
              <div className="skills-image-container flex items-center justify-center h-full">
                <img
                  src={skill.img}
                  alt={`Skill ${index}`}
                  loading="lazy"
                  className="skills-image rounded-lg w-[150px] h-[150px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CSS for Carousel */}
      <style jsx>{`
        .skills-section {
          padding-top: 100px; /* Extra padding to account for the navbar */
        }

        .skills-swiper {
          perspective: 1500px;
        }

        .skills-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          transform-origin: center;
          transition: transform 0.6s ease, opacity 0.6s ease;
        }

        .skills-slide:not(.swiper-slide-active) {
          transform: scale(0.8) translateZ(-50px);
          opacity: 0.6;
        }

        .skills-slide.swiper-slide-next,
        .skills-slide.swiper-slide-prev {
          transform: scale(0.9) translateZ(0px);
          opacity: 0.8;
        }

        .skills-slide.swiper-slide-active {
          transform: scale(1) translateZ(50px);
          opacity: 1;
        }

        .skills-image-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        /* Adjust navigation button positioning */
        .swiper-button-next,
        .swiper-button-prev {
          z-index: 10;
          margin-top: -20px; /* Vertically center */
        }

        .swiper-button-next {
          right: 20px; /* Add space to avoid overlap */
        }

        .swiper-button-prev {
          left: 20px; /* Add space to avoid overlap */
        }
      `}</style>
    </section>
  );
};
