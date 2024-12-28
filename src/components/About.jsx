import React from 'react';
import profile from '../assets/profile.png';
import '../font.css'; 

const About = () => {
  return (
    <div id='about' className="min-h-screen bg-black px-4 py-12 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-3xl md:text-5xl font-cygre text-center mb-2">
          Have an Awesome Project<br/>Idea?{' '}
          <span className="text-orange-500">Let's Discuss</span>
        </h1>
        
        <div className="mt-12 md:mt-24">
          <div className="bg-[#1E1E1E] rounded-[10px] p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="w-full aspect-square bg-transparent rounded-lg overflow-hidden">
                <img 
                  src={profile} 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-white font-nunito text-sm md:text-base lg:text-lg whitespace-pre-line">
              Hello! I’m a prefinal year B.Tech Computer Science student at VIT Vellore with a strong passion for building user-friendly applications that enhance everyday experiences. I am proficient in Flutter and ReactJS for frontend development and am currently expanding my expertise in backend development with Flask and FastAPI in Python. I have successfully developed and hosted several mobile apps on both the Play Store and App Store, demonstrating my ability to take an idea from concept to a fully functional product.<br/>Driven by a keen interest in crafting robust, responsive applications, I am focused on continuously improving my technical skills. I thrive in collaborative environments, eager to contribute to innovative projects, and work with teams to deliver solutions that make a lasting impact on users. I'm excited to apply my knowledge and creativity to build applications that not only meet business needs but also provide seamless and engaging user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;