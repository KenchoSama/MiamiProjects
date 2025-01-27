import React from "react";

const Skills = () => {
  return (
    <section className="skills bg-gray-50 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Skills & Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div className="work-experience">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Work Experience
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <div className="font-bold text-lg">Architectural Designer</div>
                <div>2023 – Present</div>
                <div>Arquitectonica, Miami, FL</div>
              </li>
              <li>
                <div className="font-bold text-lg">Architectural Drafter</div>
                <div>2021 – 2022</div>
                <div>Miami Store Front Windows & Custom Marine Construction, Miami, FL</div>
              </li>
              <li>
                <div className="font-bold text-lg">Architectural Drafter</div>
                <div>2020 – 2021</div>
                <div>Bravo Partners & Fred R Cardoso Architect & Assoc., Miami, FL</div>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="education">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Education
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <div className="font-bold text-lg">Master of Architecture Candidate</div>
                <div>Florida International University, Miami, FL</div>
                <div>GPA: 3.6</div>
              </li>
              <li>
                <div className="font-bold text-lg">Associate in Arts Degree – Pathway in Architecture</div>
                <div>Miami Dade College, Miami, FL</div>
              </li>
              <li>
                <div className="font-bold text-lg">Architecture Magnet</div>
                <div>Design and Architecture Senior High School, Miami, FL</div>
                <div>Ranked #16 in the U.S.</div>
              </li>
            </ul>
          </div>

          {/* Software Skills */}
          <div className="software-skills">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Software Skills
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-bold">CADD Software:</span> AutoCAD, Rhino 3D, Revit, SketchUp, Twinmotion
              </li>
              <li>
                <span className="font-bold">Design Tools:</span> Illustrator, InDesign, Photoshop, Blue Beam Revu
              </li>
              <li>
                <span className="font-bold">Technical Proficiencies:</span> Construction Documentation, 3D Rendering, Drafting
              </li>
              <li>
                <span className="font-bold">Office Software:</span> Microsoft Office Suite
              </li>
            </ul>
          </div>

          {/* Awards */}
          <div className="awards">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Awards
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>United Daughters of Confederacy Scholarship Recipient</li>
              <li>De La Cruz Foundation Scholarship</li>
              <li>Dean’s List Recipient (Fall 2019, Spring 2020, Fall 2020, Summer 2021)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
