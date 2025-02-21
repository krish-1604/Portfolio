import React from "react";
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
    <div id="skills" className="relative w-full bg-[#FF6B00] py-12 overflow-hidden rounded-[20px] pb-20">
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
                <div key={`${containerIndex}-${index}`} className="flex items-center min-w-max">
                  <span className="text-black font-sans text-[clamp(1.5rem,4vw,2.5rem)] tracking-tight">
                    {text}
                  </span>
                  <span className="text-[#FF6B00] mx-4 text-[clamp(1.5rem,4vw,3rem)]">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-black px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Changed grid to flex-col on mobile and grid on larger screens */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-12">
            {/* Skills Section - full width on mobile */}
            <div className="bg-[#1E1E1E] rounded-[10px] p-8 shadow-md md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {[
                   { src: flutter, alt: "Flutter" },
                   { src: react, alt: "React" },
                   { src: next, alt: "NextJS" },
                   { src: html, alt: "HTML" },
                   { src: css, alt: "CSS" },
                   { src: js, alt: "JavaScript" },
                   { src: ts, alt: "TypeScript" },
                   { src: firebase, alt: "Firebase" },
                   { src: go, alt: "GoLang" },
                   { src: java, alt: "Java" },
                   { src: python, alt: "Python" },
                   { src: c, alt: "C" },
                   { src: cpp, alt: "C++" },
                   { src: mysql, alt: "MySQL" },
                ].map((skill, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={skill.src}
                      alt={skill.alt}
                      className="h-10 w-10 group-hover:scale-125 transition-transform duration-200"
                    />
                    <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                      {skill.alt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links Section - full width on mobile */}
            <div className="bg-[#1E1E1E] rounded-[10px] p-8 shadow-md flex justify-center items-center">
              <div className="flex gap-8 flex-wrap justify-center">
                {[
                  { href: "https://instagram.com/_krish1604", src: instagram, alt: "Instagram" },
                  { href: "https://www.linkedin.com/in/krish-mehta-7a4037252/", src: linkedin, alt: "LinkedIn" },
                  { href: "https://github.com/krish-1604", src: github, alt: "GitHub" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                  >
                    <img
                      src={social.src}
                      alt={social.alt}
                      className="h-10 w-10 group-hover:scale-125 transition-transform duration-200"
                    />
                    <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                      {social.alt}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollingBanner />
    </div>
  );
};

export default Skills;