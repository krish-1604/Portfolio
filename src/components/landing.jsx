import React from 'react';
import landingimage from '../assets/landingimage.png';

const Landing = () => {
  return (
    <div className="bg-black p-4 rounded-[20px]">
      <div id="landing" className="relative bg-[#1a1a1a] text-white p-12 rounded-[20px]">
        <nav className="hidden sm:flex flex-col sm:flex-row justify-between items-center pb-12">
          <h1 className="text-2xl font-medium border-b-2 mb-6 sm:mb-0">
            Krish Mehta
          </h1>
          
          <div className="flex items-center gap-8">
            <div className="flex gap-6">
              <a href="#" className="hover:text-orange-500 transition-colors">
                LINKEDIN ↗
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                INSTAGRAM ↗
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                GITHUB ↗
              </a>
            </div>
            
            <button className="border-2 border-orange-500 bg-[#393939] text-white px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-all">
              LET'S TALK ↗
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-12">
          <div className="lg:max-w-2xl">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light pb-6">
              I craft <span className="text-orange-500">stunning</span> experiences
            </h2>
            <p className="text-xl text-gray-300 pb-6">
              As a developer, I collaborate with individuals globally to craft customized solutions.
            </p>
          </div>

          {/* Image Container */}
          <div className="relative w-full lg:w-1/2">
            <img
              src={landingimage}
              alt="Developer workspace illustration"
              className="w-full h-auto"
            />
          </div>
        </main>

        <p className="absolute bottom-6 left-6 text-gray-400">
          Available for freelance work
        </p>
      </div>
    </div>
  );
};

export default Landing;