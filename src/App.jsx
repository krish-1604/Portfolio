import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/skills';
import GetInTouch from './components/footer';
import Resume from './components/resume';
import Experience from './components/experience';
import Project from './components/projects folder/project';
import Landing from './components/landing';
import ProjectDetail from './components/projects folder/ProjectDetail';
import AllProjects from './components/projects folder/allprojects';
import NotFound from './components/NotFound';
const ScrollToSection = () => {
  const location = useLocation();
  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const getintouchRef = useRef(null);

  React.useEffect(() => {
    if (location.hash === '#landing'){
      landingRef.current?.scrollIntoView({behavior:'smooth'});
    }else if (location.hash === '#about') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#skills') {
      skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }else if(location.hash === '#resume'){
      resumeRef.current?.scrollIntoView({behavior:'smooth'});
    }else if(location.hash === '#project'){
        projectRef.current?.scrollIntoView({behavior:'smooth'});
    }else if(location.hash==='#exp'){
      experienceRef.current?.scrollIntoView({behavior:'smooth'});
    }else if (location.hash === '#contact') {
      getintouchRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-black pt-20">
      <Navbar />
      {/* <main className="container mx-auto px-4 py-8 bg-black">
      </main> */}
      <div ref={landingRef} id="landing">
        <Landing/>
      </div>
      <div ref={aboutRef} id="about" className='relative z-0'>
        <About />
      </div>
      <div ref={skillsRef} id="skills" className='relative z-10'>
        <Skills />
      </div>
      <div ref={projectRef} id="project" className="relative z-10">
        <Project />
      </div>
      <div ref={experienceRef} id="exp" className="relative z-10">
        <Experience />
      </div>
      <div ref={resumeRef} id="resume" className="relative z-10">
      <Resume/>
      </div>
      <div ref={getintouchRef} id="contact" className="relative z-10">
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
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;