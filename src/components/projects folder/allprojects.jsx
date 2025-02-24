import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import memories from "../../assets/projects/mymemories/screen.png";
import assignofast from "../../assets/projects/assignofast/screen.png";
import redicli from "../../assets/projects/redicli/redicli1.png";

const horizontalProjects = [
  {
    id: "redicli",
    name: "RediCLI",
    tech: "GoLang, Redis",
    description: "RediCLI is a powerful terminal-based CLI tool for optimizing Redis performance and managing databases efficiently. Built with Go, it features an interactive TUI, command auto-completion, real-time analytics, and advanced key management with TTL support.",
    image: redicli,
  },
];

const squareProjects = [
  {
    id: "assignofast",
    name: "AssignoFast",
    tech: "Flutter, Node, Firebase",
    description: "AssignoFast is a productivity tool designed for students to manage assignments and deadlines efficiently. Built with Flutter, it syncs assignment data and timetables from Firebase while supporting offline access via SQLite.",
    image: assignofast,
  },
  {
    id: "mymemories",
    name: "My Memories",
    tech: "Flutter, SQLite",
    description: "My Memories is a user-friendly app designed to help you preserve and organize cherished moments effortlessly. It allows you to add titles, dates, hashtags, and descriptions to memories while supporting picture attachments.",
    image: memories,
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#1B1B1B] px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/"
            className="inline-flex items-center text-orange-500 hover:text-orange-400 mb-8 group transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium">Back to Main</span>
          </Link>
        </motion.div>

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
        >
          All <span className="text-orange-500">Projects</span>
        </motion.h1>

        {/* Projects Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 mt-8"
        >
          {/* Horizontal Projects */}
          {horizontalProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
            >
              <Link
                to={`/project/${project.id}`}
                className="block group"
              >
                <div className="relative bg-[#272727] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.005]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-[40%] h-64 sm:h-80 md:h-96 object-contain mx-auto mt-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#272727] to-transparent opacity-90" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                    <div className="flex justify-between items-end">
                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{project.name}</h3>
                        <p className="text-orange-500 text-xs sm:text-sm font-medium inline-block px-3 py-1 bg-orange-500/10 rounded-full">
                          {project.tech}
                        </p>
                        <p className="text-gray-300 text-xs sm:text-sm max-w-2xl line-clamp-3 sm:line-clamp-4">{project.description}</p>
                      </div>
                      <div className="bg-[#1B1B1B] p-2 sm:p-3 rounded-full group-hover:bg-orange-500 transition-all duration-300 transform group-hover:translate-x-2">
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Square Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
          >
            {squareProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
              >
                <Link
                  to={`/project/${project.id}`}
                  className="block group"
                >
                  <div className="relative bg-[#272727] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.005]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-[50%] h-64 sm:h-80 md:h-96 object-contain mx-auto mt-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#272727] via-[#272727]/70 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <div className="flex justify-between items-end">
                        <div className="space-y-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-white">{project.name}</h3>
                          <p className="text-orange-500 text-xs sm:text-sm font-medium inline-block px-3 py-1 bg-orange-500/10 rounded-full">
                            {project.tech}
                          </p>
                          <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">{project.description}</p>
                        </div>
                        <div className="bg-[#1B1B1B] p-2 rounded-full group-hover:bg-orange-500 transition-all duration-300 transform group-hover:translate-x-1">
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AllProjects;