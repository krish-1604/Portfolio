import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import landingAnimation from '../assets/landing.json';

const Landing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.05,
      color: "#f97316",
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      backgroundColor: "#f97316",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div 
      className="bg-black p-4 rounded-2xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative bg-[#1a1a1a] text-white px-4 sm:px-6 md:px-12 py-8 rounded-2xl">
        <motion.nav 
          className="hidden sm:flex items-center justify-between pb-8"
          variants={itemVariants}
        >
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-2xl font-serif italic">Krish Mehta</h1>
            <div className="absolute bottom-0 left-0 w-full">
              <motion.svg 
                width="100%" 
                height="8" 
                viewBox="0 0 100 8" 
                preserveAspectRatio="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <path 
                  d="M0,7 Q50,0 100,7" 
                  stroke="white" 
                  strokeWidth="2" 
                  fill="none" 
                />
              </motion.svg>
            </div>
          </motion.div>
          
          <div className="flex justify-center flex-1">
            <div className="flex gap-4 justify-center">
              {[
                { text: "LINKEDIN", href: "https://www.linkedin.com/in/krish-mehta-7a4037252/" },
                { text: "INSTAGRAM", href: "https://www.instagram.com/_krish1604/" },
                { text: "GITHUB", href: "https://github.com/krish-1604" }
              ].map((link) => (
                <motion.a
                  key={link.text}
                  href={link.href}
                  className="flex items-center gap-1"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  {link.text} 
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </div>
          
          <motion.button 
            className="border-2 border-orange-500 bg-[#393939] text-white px-4 py-2 rounded-full transition-all flex items-center gap-1"
            variants={buttonVariants}
            whileHover="hover"
            onClick={() => {
              window.location.href = "mailto:krish1604mehta@gmail.com?subject=Interested in Your Work&body=Hi Krish,";
            }}
          >
            LET'S TALK 
            <motion.div
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.nav>

        <motion.main 
          className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8"
          variants={itemVariants}
        >
          <div className="lg:max-w-2xl text-center lg:text-left">
            <motion.h2 
              className="text-4xl sm:text-6xl lg:text-7xl font-bold pb-4"
              variants={itemVariants}
            >
              I craft <motion.span 
                className="text-orange-500"
                animate={{ 
                  scale: [1, 1.05, 1],
                  transition: { 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
              >
                stunning
              </motion.span> experiences
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl pb-4"
              variants={itemVariants}
            >
              As a developer, I collaborate with individuals globally to craft customized solutions.
            </motion.p>
          </div>
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Lottie 
              animationData={landingAnimation} 
              loop 
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl" 
              lazyLoad 
            />
          </motion.div>
        </motion.main>
        <motion.p 
          className="text-center lg:text-left text-white text-sm sm:text-base mt-4"
          variants={itemVariants}
        >
          Available for freelance work
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Landing;