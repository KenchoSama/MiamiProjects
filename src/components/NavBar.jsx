import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-scroll";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxOpacityScroll = 600; // Increase scroll distance for slower fade
      const minOpacity = 0.3; // Minimum opacity to retain some visibility
      const opacity = Math.max(minOpacity, 1 - scrollY / maxOpacityScroll);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <nav
        className="fixed top-0 left-0 w-full z-30 transition-all duration-500"
        style={{ backgroundColor: `rgba(0, 0, 0, ${scrollOpacity})` }} // Black with fading opacity
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <a href="/" className="text-2xl md:text-3xl font-bold text-white no-underline">
            BATIR
          </a>
          <button className="block md:hidden text-white focus:outline-none">
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`font-bold text-white cursor-pointer hover:opacity-100 transition-opacity ${
                    activeLink === 'home' ? 'opacity-100' : 'opacity-75'
                  }`}
                  onClick={() => onUpdateActiveLink('home')}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`font-bold text-white cursor-pointer hover:opacity-100 transition-opacity ${
                    activeLink === 'projects' ? 'opacity-100' : 'opacity-75'
                  }`}
                  onClick={() => onUpdateActiveLink('projects')}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`font-bold text-white cursor-pointer hover:opacity-100 transition-opacity ${
                    activeLink === 'skills' ? 'opacity-100' : 'opacity-75'
                  }`}
                  onClick={() => onUpdateActiveLink('skills')}
                >
                  Skills
                </Link>
              </li>
            </ul>
            <div className="flex items-center ml-8">
              <div className="flex space-x-4">
                {/* Social Icons Placeholder */}
              </div>
              <a href="mailto:batir.carrera001@gmail.com" className="ml-4">
                <button className="font-semibold text-black bg-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105">
                  <span>Email</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </Router>
  );
};
