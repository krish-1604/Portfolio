import React from "react";
import { motion } from "framer-motion";
import python from "../assets/icons of skills/python.png";
import c from "../assets/icons of skills/c.png";
import java from "../assets/icons of skills/java.png";
import mysql from "../assets/icons of skills/mysql.png";
import html from "../assets/icons of skills/html.png";
import cpp from "../assets/icons of skills/cpp.png";
import instagram from "../assets/socials/insta.png";
import linkedin from "../assets/socials/linkedin.png";
import github from "../assets/socials/github.png";
import css from "../assets/icons of skills/css.png";
import js from "../assets/icons of skills/js.png";
import react from "../assets/icons of skills/react.png";
import flutter from "../assets/icons of skills/flutter.png";
import firebase from "../assets/icons of skills/firebase.png";
import go from "../assets/icons of skills/GoLang.png";
import ts from "../assets/icons of skills/TypeScript.png";
import next from "../assets/icons of skills/Next.png";

const ScrollingBanner = () => {
  const content = [
    "Flutter Dev",
    "Frontend Dev",
    "Backend Dev",
    "Flutter Dev",
    "Frontend Dev",
    "Backend Dev"
  ];

  return (
    <motion.div 
      id="skills" 
      className="relative w-full bg-[#FF6B00] py-12 overflow-hidden rounded-[20px] pb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="bg-white">
        <div 
          className="flex whitespace-nowrap"
          style={{
            animation: 'scroll 20s linear infinite',
            transform: 'translateX(-100%)'
          }}
        >
          {[...Array(3)].map((_, containerIndex) => (
            <div key={containerIndex} className="flex">
              {content.map((text, index) => (
                <motion.div 
                  key={`${containerIndex}-${index}`} 
                  className="flex items-center min-w-max"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-black font-sans text-[clamp(1.5rem,4vw,2.5rem)] tracking-tight">
                    {text}
                  </span>
                  <motion.span 
                    className="text-[#FF6B00] mx-4 text-[clamp(1.5rem,4vw,3rem)]"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    ✦
                  </motion.span>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </motion.div>
  );
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    }
  };

  const skills = [
    { src: flutter, alt: "Flutter", desc: "Cross-platform App Development" },
    { src: react, alt: "React", desc: "Frontend Web Development" },
    { src: next, alt: "NextJS", desc: "React Framework" },
    { src: html, alt: "HTML", desc: "Web Markup Language" },
    { src: css, alt: "CSS", desc: "Web Styling" },
    { src: js, alt: "JavaScript", desc: "Web Programming" },
    { src: ts, alt: "TypeScript", desc: "Typed JavaScript" },
    { src: firebase, alt: "Firebase", desc: "Backend as a Service" },
    { src: go, alt: "GoLang", desc: "Backend Development" },
    { src: java, alt: "Java", desc: "Object-Oriented Programming" },
    { src: python, alt: "Python", desc: "General Purpose Programming" },
    { src: c, alt: "C", desc: "System Programming" },
    { src: cpp, alt: "C++", desc: "Object-Oriented System Programming" },
    { src: mysql, alt: "MySQL", desc: "Database Management" }
  ];

  const socials = [
    { href: "https://instagram.com/_krish1604", src: instagram, alt: "Instagram", desc: "Follow me on Instagram" },
    { href: "https://www.linkedin.com/in/krish-mehta-7a4037252/", src: linkedin, alt: "LinkedIn", desc: "Connect on LinkedIn" },
    { href: "https://github.com/krish-1604", src: github, alt: "GitHub", desc: "Check my Projects" }
  ];

  return (
    <motion.div 
      className="flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="bg-black px-4 pb-16">
        <div className="max-w-[90vw] lg:max-w-[70vw] mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-12">
            <motion.div 
              className="bg-[#1E1E1E] rounded-[10px] p-8 shadow-md md:col-span-2"
              variants={skillVariants}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="relative group"
                    variants={skillVariants}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.img
                      src={skill.src}
                      alt={skill.alt}
                      className="h-10 w-10 relative z-10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div 
                      className="absolute pointer-events-none bg-gray-800 text-white text-xs px-3 py-2 rounded-md whitespace-nowrap"
                      style={{
                        top: "calc(100% + 10px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 100,
                      }}
                      initial={{ opacity: 0, y: 10, visibility: "hidden" }}
                      whileHover={{ 
                        opacity: 1, 
                        y: 0, 
                        visibility: "visible",
                        transition: { duration: 0.2 } 
                      }}
                    >
                      <div className="font-bold">{skill.alt}</div>
                      <div className="text-gray-300 text-[10px]">{skill.desc}</div>
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-[#1E1E1E] rounded-[10px] p-8 shadow-md flex justify-center items-center"
              variants={skillVariants}
            >
              <div className="flex gap-8 flex-wrap justify-center">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    variants={socialVariants}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.img
                      src={social.src}
                      alt={social.alt}
                      className="h-10 w-10 relative z-10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div 
                      className="absolute pointer-events-none bg-gray-800 text-white text-xs px-3 py-2 rounded-md whitespace-nowrap"
                      style={{
                        top: "calc(100% + 10px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 100,
                      }}
                      initial={{ opacity: 0, y: 10, visibility: "hidden" }}
                      whileHover={{ 
                        opacity: 1, 
                        y: 0, 
                        visibility: "visible",
                        transition: { duration: 0.2 } 
                      }}
                    >
                      <div className="font-bold">{social.alt}</div>
                      <div className="text-gray-300 text-[10px]">{social.desc}</div>
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45" />
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <ScrollingBanner />
    </motion.div>
  );
};

export default Skills;  