import React from 'react';
import Lottie from 'lottie-react';
import landingAnimation from '../assets/landing.json';
import { ArrowUpRight } from 'lucide-react';

const Landing = () => {
  return (
    <div className="bg-black p-4 rounded-2xl">
      <div id="landing" className="relative bg-[#1a1a1a] text-white px-4 sm:px-6 md:px-12 py-8 rounded-2xl">
        <nav className="hidden sm:flex items-center justify-between pb-8">
          <div className="relative">
            <h1 className="text-2xl font-serif italic">Krish Mehta</h1>
            <div className="absolute bottom-0 left-0 w-full">
              <svg width="100%" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0,7 Q50,0 100,7" stroke="white" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
          
          <div className="flex justify-center flex-1">
            <div className="flex gap-4 justify-center">
              <a href="https://www.linkedin.com/in/krish-mehta-7a4037252/" className="hover:text-orange-500 transition-colors flex items-center gap-1">LINKEDIN <ArrowUpRight className="w-4 h-4 rotate-0" /></a>
              <a href="https://www.instagram.com/_krish1604/" className="hover:text-orange-500 transition-colors flex items-center gap-1">INSTAGRAM <ArrowUpRight className="w-4 h-4 rotate-0" /></a>
              <a href="https://github.com/krish-1604" className="hover:text-orange-500 transition-colors flex items-center gap-1">GITHUB <ArrowUpRight className="w-4 h-4 rotate-0" /></a>
            </div>
          </div>
          
          <button className="border-2 border-orange-500 bg-[#393939] text-white px-4 py-2 rounded-full hover:bg-orange-500 transition-all flex items-center gap-1" onClick={() => { window.location.href = "mailto:krish1604mehta@gmail.com?subject=Interested in Your Work&body=Hi Krish,"; }}>
            LET'S TALK <ArrowUpRight className="w-4 h-4 rotate-0" />
          </button>
        </nav>
        <main className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8">
          <div className="lg:max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold pb-4">I craft <span className="text-orange-500">stunning</span> experiences</h2>
            <p className="text-lg sm:text-xl pb-4">As a developer, I collaborate with individuals globally to craft customized solutions.</p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Lottie animationData={landingAnimation} loop className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl" lazyLoad />
          </div>
        </main>
        <p className="text-center lg:text-left text-white text-sm sm:text-base mt-4">Available for freelance work</p>
      </div>
    </div>
  );
};

export default Landing;