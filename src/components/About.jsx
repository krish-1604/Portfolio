import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profile from '../assets/profile.png';
import '../font.css';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFrontend, setIsFrontend] = useState(true);
  
  // Typing animation states
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = useMemo(() => ["I'm Krish Mehta", "App Developer", "Web Developer"], []);

  const period = 2000; // Pause after typing full text

  // Typing animation effect
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Set typing speed based on action
      setTypingSpeed(isDeleting ? 100 : 150);

      // Handle complete typing or deletion
      if (!isDeleting && text === fullText) {
        // Pause at the end before deleting
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, textArray, typingSpeed]);

  // Flip text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFrontend((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about" className="min-h-screen bg-black px-5 py-[10vh] flex items-center relative overflow-hidden">
      {/* Subtle Animated Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#1E1E1E] to-black animate-gradient-x"></div>
      </motion.div>

      <div className="max-w-[90vw] lg:max-w-[70vw] mx-auto relative z-10">
        
        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-[5vw] md:text-[3.5vw] font-cygre text-center mb-[5vh]"
        >
          Have an Awesome Project? <br />
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.5 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500"
          >
            Let's Discuss
          </motion.span>
        </motion.h1>

        <div className="mt-[8vh] md:mt-[10vh]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="bg-[#1E1E1E] rounded-[1.5vw] p-[5vw] md:p-[4vw] relative overflow-hidden"
          >
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 animate-glow opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[5vw] md:gap-[3vw] items-center">
              
              {/* Profile Image */}
              <div className="w-full aspect-square bg-transparent rounded-lg overflow-hidden relative border-[0.3vw] border-[#ffffff70] hover:border-orange-500 transition-all duration-300">
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
                  className="w-full h-full object-cover transition-opacity duration-500 hover:scale-105"
                  onLoad={() => setIsLoaded(true)}
                />
              </div>

              {/* Animated Text */}
              <div className="text-white font-nunito text-[3vw] md:text-[2vw] leading-relaxed">
                
                {/* Typing Animation Name */}
                <div className="text-[5vh] md:text-[4vh] lg:text-[3vw] font-semibold text-orange-500 mb-[4vh] h-[5vh] md:h-[6vh]">
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block"
                  >
                    {text}
                    <span className="inline-block w-[0.1em] h-[0.7em] bg-orange-500 ml-1 animate-blink"></span>
                  </motion.span>
                </div>

                {/* Final Static Text */}
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="mt-[6vh] sm:mt-[8vh] md:mt-[8vh] text-gray-300 text-[3.5vw] sm:text-[3vw] md:text-[1.5vw] leading-relaxed"
                >
                  I have deployed mobile apps on Play Store and App Store, as well as websites,  
                  focusing on building responsive and user-friendly applications.
                </motion.p>

                {/* Flipping Text */}
                <div className="mt-[6vh] sm:mt-[8vh] md:mt-[8vh] h-[5vh] sm:h-[9vh] md:h-[6vh] overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={isFrontend ? "frontend" : "backend"}
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.8 }}
                      className="text-[5vw] sm:text-[4vw] md:text-[2.5vw] lg:text-[2vw] font-semibold text-gray-300 mb-[2vh]"
                    >
                      {isFrontend ? "Skilled in Frontend" : "Exploring Backend"}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <div className="h-[5vh] sm:h-[9vh] md:h-[6vh] overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={isFrontend ? "tech1" : "tech2"}
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.8 }}
                      className="text-[5vw] sm:text-[4vw] md:text-[2.5vw] lg:text-[2vw] font-semibold text-orange-400"
                    >
                      {isFrontend ? "Flutter, ReactJS, NextJS" : "Express.js, Flask"}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;