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
      "RediCLI is a powerful terminal-based CLI tool for optimizing Redis performance and managing databases efficiently. Built with Go, it features an interactive TUI, command auto-completion, real-time analytics, and advanced key management with TTL support. It enables seamless data import/export, multi-instance connection handling, and an intuitive color-coded interface for better usability. RediCLI enhances Redis administration with fast execution, efficient filtering, and streamlined database operations.",
    image: redicli,
    github: "https://github.com/Amrit02102004/RediCLI",
    features: [
      "Interactive terminal interface",
      "Command auto-completion and suggestions",
      "Built-in analytics dashboard",
      "Import/Export data from CSV and XLSX files",
      "Advanced key management with TTL support",
      "Connection management for multiple Redis instances",
      "Color-coded interface for better readability"
    ],
  },
  {
    id: "assignofast",
    name: "AssignoFast",
    tech: "Flutter, Node, Firebase",
    description:
      "AssignoFast is a productivity tool designed for students to manage assignments and deadlines efficiently. Built with Flutter, it syncs assignment data and timetables from Firebase while supporting offline access via SQLite. The app optimizes performance with reduced sync time, integrates a Kotlin-based Android widget for quick timetable updates, and features smart notifications for assignment reminders. With a refined UI/UX, AssignoFast ensures a seamless and intuitive task management experience.",
    image: assignofast,
    website: "https://assignofast.ieeecsvit.com",
    features: [
      "Syncs assignments and timetables from Firebase",
      "Works offline with SQLite for seamless access",
      "Optimized performance with reduced sync time",
      "Kotlin-based Android widget for quick timetable updates",
      "Smart notifications for assignment reminders",
      "Refined UI/UX for an intuitive experience",
      "Filter and search assignments easily",
      "Track pending, completed, and upcoming assignments",
      "Auto-sync with minimal battery and data usage"
  ]
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
            <div className="bg-[#272727] rounded-3xl p-8 transition-transform hover:scale-105 hover:bg-[#505050] duration-300 h-full flex flex-col relative">
              <img src={project.image} alt={project.name} className="w-auto h-[124px] object-contain pb-4" />
              <div className="flex-grow space-y-4">
                <p className="text-white text-[30px]">{project.name}</p>
                <p className="text-[#F4B98E] text-[16px]">{project.tech}</p>
                <p className="text-[#8B949E] text-[14px] line-clamp-6">{project.description}</p>
              </div>
              <div className="flex justify-end pt-8">
                <div className="bg-[#1B1B1B] rounded-full p-4 transform rotate-[-45deg] group-hover:scale-125 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
