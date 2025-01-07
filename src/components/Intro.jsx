import React from "react";

const BatirIntro = () => {
  return (
    <section className="batir-intro bg-gray-100 py-16 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-gray-900 mb-8">About Batir Carrera</h2>

        {/* About Me */}
        <div className="about-me mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Innovative and results-driven Project Architect with extensive experience in residential, 
            commercial, and high-rise luxury developments. Adept at blending cutting-edge design principles 
            with technical expertise to craft spaces that resonate with people and stand the test of time.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Skilled in computer-aided design (CAD) software, Adobe Suite, Microsoft Office, and construction methodologies, 
            bringing both precision and creativity to every project.
          </p>
        </div>

        {/* Key Achievements */}
        <div className="key-achievements mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Key Achievements</h3>
          <ul className="text-left max-w-3xl mx-auto text-gray-700 space-y-4 list-disc list-inside">
            <li>
              Delivered iconic developments such as the Midtown Tropic Residences, showcasing dedication to excellence and meticulous attention to detail.
            </li>
            <li>
              Proficient in design coordination, permitting, and ensuring seamless integration of form and function in all architectural solutions.
            </li>
            <li>
              Passionate about exploring innovative design concepts and creating spaces that connect with people on a deeper level.
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Contact</h3>
          <p className="text-lg text-gray-700">
            <span className="font-bold">Phone:</span>{" "}
            <a href="tel:+13059029773" className="text-blue-600 hover:underline">
              +1 305-902-9773
            </a>
          </p>
          <p className="text-lg text-gray-700 mt-2">
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:batir.carrera001@gmail.com"
              className="text-blue-600 hover:underline"
            >
              batir.carrera001@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BatirIntro;
