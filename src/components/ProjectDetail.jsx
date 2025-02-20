import React from "react";
import { useParams } from "react-router-dom";
import memories from "../assets/projects/mymemories.png";
import assignofast from "../assets/projects/assignofast.png";
import redicli from "../assets/projects/redicli.png";

const projects = {
  redicli: {
    name: "RediCLI",
    tech: "GoLang, Redis",
    description:
      "RediCLI is a terminal-based tool designed to help users efficiently manage Redis databases with an interactive interface...",
    image: redicli,
  },
  assignofast: {
    name: "AssignoFast",
    tech: "Flutter, Node, Firebase",
    description:
      "A reminder app that syncs assignment data and timetable from Firebase and works offline with SQLite...",
    image: assignofast,
  },
  mymemories: {
    name: "My Memories",
    tech: "Flutter",
    description:
      "App designed to store and organize memories with titles, dates, hashtags, and detailed descriptions...",
    image: memories,
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return <h2 className="text-white text-center mt-20">Project not found</h2>;
  }

  return (
    <div className="w-full bg-[#1B1B1B] p-12 rounded-[20px] -mt-8 pb-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-white">{project.name}</h1>
        <p className="text-[#F4B98E] text-2xl mt-4">{project.tech}</p>
        <img src={project.image} alt={project.name} className="mx-auto mt-8 w-auto h-[200px]" />
        <p className="text-[#8B949E] text-lg mt-6">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
