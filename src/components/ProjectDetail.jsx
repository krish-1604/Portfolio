import React from "react";
import { useParams } from "react-router-dom";
import memories from "../assets/projects/mymemories.png";
import assignofast from "../assets/projects/assignofast.png";
import redicli from "../assets/projects/redicli.png";

const projects = [
  {
    id: "redicli",
    name: "RediCLI",
    tech: "GoLang, Redis",
    description:
      "RediCLI is a powerful terminal-based CLI tool for optimizing Redis performance and managing databases efficiently. Built with Go, it features an interactive TUI, command auto-completion, real-time analytics, and advanced key management with TTL support. It enables seamless data import/export, multi-instance connection handling, and an intuitive color-coded interface for better usability. RediCLI enhances Redis administration with fast execution, efficient filtering, and streamlined database operations.",
    image: redicli,
    github: "https://github.com/Amrit02102004/RediCLI",
  },
  {
    id: "assignofast",
    name: "AssignoFast",
    tech: "Flutter, Node, Firebase",
    description:
      "AssignoFast is a productivity tool designed for students to manage assignments and deadlines efficiently. Built with Flutter, it syncs assignment data and timetables from Firebase while supporting offline access via SQLite. The app optimizes performance with reduced sync time, integrates a Kotlin-based Android widget for quick timetable updates, and features smart notifications for assignment reminders. With a refined UI/UX, AssignoFast ensures a seamless and intuitive task management experience.",
    image: assignofast,
    website: "https://assignofast.ieeecsvit.com",
  },
  {
    id: "mymemories",
    name: "My Memories",
    tech: "Flutter",
    description:
      "My Memories is a user-friendly app designed to help you preserve and organize cherished moments effortlessly. It allows you to add titles, dates, hashtags, and descriptions to memories while supporting picture attachments for a richer experience. With a powerful hashtag-based search and secure local storage using SQLite, My Memories ensures quick access to your data without relying on cloud services. The app provides a seamless and private way to manage and relive your personal memories anytime.",
    image: memories,
    github: "https://github.com/krish-1604/My-Memories",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

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
