import React from 'react';
import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import '../font.css';

const GetInTouch = () => {
  return (
    <div id='contact' className="bg-black w-full flex items-center justify-center px-4 md:px-16 py-6 md:py-10 rounded-[20px]">
        <div className="bg-[#FF8A50] w-full px-3 md:px-5 py-2.5 rounded-[2px]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8">
                    <div className="space-y-0 flex-1">
                        <h1 className="font-baseneuetrial text-[40px] sm:text-[60px] md:text-[80px] text-white font-bold leading-tight">
                            Get in Touch
                        </h1>
                        <p className="text-black/90 max-w-lg text-sm md:text-base mt-2 md:mt-0">
                            If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas.
                        </p>
                    </div>
                    
                    <div className="w-full md:w-auto space-y-4">
                        <div className="space-y-2 text-right">
                            <h3 className="font-baseneuetrial text-black text-sm md:text-base">
                                Follow me on
                            </h3>
                            <div className="flex gap-4 justify-end">
                                <a href="#" className="text-black hover:text-white/80 transition-colors">
                                    <InstagramIcon size={20} className="md:w-6 md:h-6" />
                                </a>
                                <a href="#" className="text-black hover:text-white/80 transition-colors">
                                    <LinkedinIcon size={20} className="md:w-6 md:h-6" />
                                </a>
                                <a href="#" className="text-black hover:text-white/80 transition-colors">
                                    <GithubIcon size={20} className="md:w-6 md:h-6" />
                                </a>
                            </div>
                        </div>
                        
                        <button className="w-full md:w-auto bg-transparent text-white px-4 md:px-6 py-2 rounded-[10px] border-2 border-black hover:bg-white hover:text-[#FF8A50] transition-colors duration-300 flex items-center justify-center gap-2 text-sm md:text-base">
                            Contact Me
                            <span className="inline-block transform rotate-45">➣</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default GetInTouch;