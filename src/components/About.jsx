import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profile from '../assets/profile.png';
import '../font.css';

const About = () => {
  const [text, setText] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const fullText = "  I am a pre-final year B.Tech Computer Science student at VIT Vellore, passionate about building user-friendly applications. Proficient in Flutter, ReactJS and NextJS for frontend development, I am expanding my expertise in backend development with Flask and FastAPI. I have successfully developed and deployed mobile apps on the Play Store and App Store. With a strong focus on crafting robust, responsive applications, I thrive in collaborative environments and aim to build innovative solutions that enhance user experiences.";

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3, 
  });

  useEffect(() => {
    if (!inView) return; 

    let index = 0;
    setText(""); 
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div ref={ref} id='about' className="min-h-screen bg-black px-4 py-12 md:py-24 flex items-center">
      <div className="max-w-6xl mx-auto">
        {/* Heading Animation */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-6xl font-cygre text-center mb-6"
        >
          Have an Awesome Project <br />
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.5 }}
            className="text-orange-500"
          >
            Let's Discuss
          </motion.span>
        </motion.h1>
        
        <div className="mt-12 md:mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="bg-[#1E1E1E] rounded-[10px] p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Profile Image */}
              <div className="w-full aspect-square bg-transparent rounded-lg overflow-hidden relative border-4 border-[#ffffff70]">
                {/* Skeleton Loader */}
                {!isLoaded && (
                  <motion.div 
                    initial={{ opacity: 1 }} 
                    animate={{ opacity: 0 }} 
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gray-700 animate-pulse rounded-lg"
                  ></motion.div>
                )}
                <img 
                  src={profile} 
                  alt="Profile"
                  className="w-full h-full object-cover transition-opacity duration-500"
                  onLoad={() => setIsLoaded(true)}
                />
              </div>

              {/* Typing Effect Text */}
              <p className="text-white font-nunito text-lg md:text-2xl lg:text-3xl leading-relaxed whitespace-pre-line">
                {text}
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="text-orange-500"
                >
                  |
                </motion.span> {/* Blinking cursor */}
              </p>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
