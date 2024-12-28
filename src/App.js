import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/skills';
import GetInTouch from './components/footer';
import Resume from './components/resume';

const ScrollToSection = () => {
  const location = useLocation();
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);
  const getintouchRef = useRef(null);

  React.useEffect(() => {
    if (location.hash === '#about') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#skills') {
      skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }else if(location.hash === '#resume'){
      resumeRef.current?.scrollIntoView({behavior:'smooth'});
    }else if (location.hash === '#contact') {
      getintouchRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="container mx-auto px-4 py-8 bg-black">
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
      <div ref={resumeRef} id="resume">
      <Resume/>
      </div>
      <div ref={getintouchRef} id="contact">
        <GetInTouch />
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
