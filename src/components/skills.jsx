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

const Skills = () => {
  return (
    <div className="min-h-screen bg-black px-4 py-12 md:py-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-12">
          {/* Skills Section */}
          <div className="bg-[#1E1E1E] rounded-[10px] p-8 shadow-md col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
            <div className="flex flex-wrap gap-4">
              <img src={python} alt="Python" className="h-10 w-10" />
              <img src={c} alt="C" className="h-10 w-10" />
              <img src={cpp} alt="C++" className="h-10 w-10" />
              <img src={java} alt="Java" className="h-10 w-10" />
              <img src={mysql} alt="MySQL" className="h-10 w-10" />
              <img src={html} alt="HTML" className="h-10 w-10"/>
              <img src={css} alt="CSS" className="h-10 w-10"/>
              <img src={js} alt="JavaScript" className="h-10 w-10"/>
              <img src={react} alt="React" className="h-10 w-10"/>
              <img src={flutter} alt="Flutter" className="h-10 w-10"/>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="bg-[#1E1E1E] rounded-[10px] p-8 shadow-md h-full flex justify-center items-center col-span-1">
            <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
              <a href="https://instagram.com/_krish1604" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" className="h-10 w-10" />
              </a>
              <a href="https://www.linkedin.com/in/krish-mehta-7a4037252/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="h-10 w-10" />
              </a>
              <a href="https://github.com/krish-1604" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="h-10 w-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
