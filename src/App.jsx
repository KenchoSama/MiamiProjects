import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; 
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import PortfolioSlider from "./components/PortfolioSlider";
import AboutMe from "./components/AboutMe"; 
import PageLoader from "./components/PageLoader"; // Import PageLoader

function App() {
  const location = useLocation(); // Get current location
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader on route change
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after animation
    }, 2000); // Match animation duration
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [location]);

  return (
    <div className="App">
      {loading && <PageLoader />} {/* Show loader when loading */}
      {!loading && ( // Hide content while loading
        <>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <NavBar />
                  <PortfolioSlider />
                  <Footer />
                </>
              }
            />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
