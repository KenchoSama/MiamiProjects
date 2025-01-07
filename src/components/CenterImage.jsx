// src/components/CenterImage.jsx
import React from "react";

const CenterImage = ({ image, description, link }) => {
  return (
    <div className="center-image-container flex flex-col items-center justify-center mb-8 text-center">
      <img
        src={image}
        alt="Center Slide"
        className="center-image rounded-lg w-[500px] h-[500px] object-cover shadow-lg mb-4"
      />
      <p className="center-description text-gray-700 text-lg max-w-md mb-4">
        {description || "No description available for this project yet."}
      </p>
      <a
        href={link || "/"} // Temporary link to the main page
        className="center-link text-white bg-black px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Learn More
      </a>
    </div>
  );
};

export default CenterImage;
