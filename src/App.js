import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/skills';

const ScrollToSection = () => {
  const location = useLocation();
  const aboutRef = useRef(null);
  const skillsRef = useRef(null); 

  React.useEffect(() => {
    if (location.hash === '#about') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#skills') {
      skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgba(18, 18, 18, 1)' }}>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome</h1>
          <p className="text-gray-300">Your content goes here</p>
        </div>
      </main>
      <div ref={aboutRef} id="about">
        <About />
      </div>
      <div ref={skillsRef} id="skills">
        <Skills />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScrollToSection />} />
      </Routes>
    </Router>
  );
};

export default App;
