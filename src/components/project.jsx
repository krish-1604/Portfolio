import React from "react";
import { useNavigate } from "react-router-dom";
import memories from "../assets/projects/mymemories.png";
import assignofast from "../assets/projects/assignofast.png";
import redicli from "../assets/projects/redicli.png";

const projects = [
  {
    id: "redicli",
    name: "RediCLI",
    tech: "GoLang, Redis",
    description:
      "RediCLI is a terminal-based tool designed to help users efficiently manage Redis databases with an interactive interface...",
    image: redicli,
  },
  {
    id: "assignofast",
    name: "AssignoFast",
    tech: "Flutter, Node, Firebase",
    description:
      "A reminder app that syncs assignment data and timetable from Firebase and works offline with SQLite...",
    image: assignofast,
  },
  {
    id: "mymemories",
    name: "My Memories",
    tech: "Flutter",
    description:
      "App designed to store and organize memories with titles, dates, hashtags, and detailed descriptions...",
    image: memories,
  },
];

const Project = () => {
  const navigate = useNavigate();

  return (
    <div id="project" className="w-full bg-[#1B1B1B] p-12 rounded-[20px] -mt-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          My <span className="text-orange-500">Projects</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group block h-full cursor-pointer"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <div className="bg-[#272727] rounded-3xl p-8 transition-transform hover:scale-105 hover:bg-[#505050] duration-300 h-full flex flex-col">
              <img src={project.image} alt={project.name} className="w-auto h-[124px] object-contain pb-4" />
              <div className="flex-grow space-y-4">
                <p className="text-white text-[30px]">{project.name}</p>
                <p className="text-[#F4B98E] text-[16px]">{project.tech}</p>
                <p className="text-[#8B949E] text-[14px] line-clamp-6">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
