import React from 'react';
import landingimage from '../assets/landingimage.png';
import { ArrowUpRight } from 'lucide-react';

const Landing = () => {
  return (
    <div className="bg-black p-4 rounded-[20px]">
      <div id="landing" className="relative bg-[#1a1a1a] text-white p-12 rounded-[20px]">
        <nav className="hidden sm:flex flex-col sm:flex-row justify-between items-center pb-12">
          <div className="relative inline-block">
            <h1 className="text-2xl font-georgia italic">
              Krish Mehta
            </h1>
            <div className="absolute bottom-0 left-0 w-full">
              <svg 
                width="100%" 
                height="8" 
                viewBox="0 0 100 8" 
                preserveAspectRatio="none"
              >
                <path
                  d="M0,7 Q50,0 100,7"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
              <a href="https://www.linkedin.com/in/krish-mehta-7a4037252/" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                LINKEDIN 
                <ArrowUpRight className="w-4 h-4 -mt-1 rotate-12" />
              </a>
              <a href="https://www.instagram.com/_krish1604/" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                INSTAGRAM
                <ArrowUpRight className="w-4 h-4 -mt-1 rotate-12" />
              </a>
              <a href="https://github.com/krish-1604" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                GITHUB
                <ArrowUpRight className="w-4 h-4 -mt-1 rotate-12" />
              </a>
            </div>
            
            <div className="ml-auto">
              <button className="border-2 border-orange-500 bg-[#393939] text-white px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-all flex items-center gap-1"
              onClick={() => {
                                window.location.href = "mailto:krish1604mehta@gmail.com?subject=Interested in Your Work&body=Hi Krish,";
                            }}
                            >
                LET'S TALK 
                <ArrowUpRight className="w-4 h-4 -mt-1 rotate-12" />
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-12">
          <div className="lg:max-w-2xl">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-cygre font-bold pb-6">
              I craft <span className="text-orange-500 font-baseneuetrial">stunning</span> experiences
            </h2>
            <p className="text-xl text-white pb-6 font-nunito">
              As a developer, I collaborate with individuals globally to craft customized solutions.
            </p>
          </div>

          {/* Image Container */}
          <div className="relative w-full lg:w-1/2 mb-10 sm:mt-0">
            <img
              src={landingimage}
              alt="Developer workspace illustration"
              className="w-full h-auto"
            />
          </div>
        </main>

        <p className="absolute bottom-4 left-6 text-white font-nunito text-sm sm:text-base">
          Available for freelance work
        </p>
      </div>
    </div>
  );
};

export default Landing;