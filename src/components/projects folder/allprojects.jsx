import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import memories from "../../assets/projects/mymemories/mymemories.png";
import assignofast from "../../assets/projects/assignofast/assignofast.png";
import redicli from "../../assets/projects/redicli/redicli.png";

const projects = [
  {
    id: "redicli",
    name: "RediCLI",
    tech: "GoLang, Redis",
    description:"RediCLI is a powerful terminal-based CLI tool for optimizing Redis performance and managing databases efficiently. Built with Go, it features an interactive TUI, command auto-completion, real-time analytics, and advanced key management with TTL support. It enables seamless data import/export, multi-instance connection handling, and an intuitive color-coded interface for better usability. RediCLI enhances Redis administration with fast execution, efficient filtering, and streamlined database operations.",
    image: redicli,
  },
  {
    id: "assignofast",
    name: "AssignoFast",
    tech: "Flutter, Node, Firebase",
    description:
      "AssignoFast is a productivity tool designed for students to manage assignments and deadlines efficiently. Built with Flutter, it syncs assignment data and timetables from Firebase while supporting offline access via SQLite. The app optimizes performance with reduced sync time, integrates a Kotlin-based Android widget for quick timetable updates, and features smart notifications for assignment reminders. With a refined UI/UX, AssignoFast ensures a seamless and intuitive task management experience.",
    image: assignofast,
  },
  {
    id: "mymemories",
    name: "My Memories",
    tech: "Flutter",
    description:
      "My Memories is a user-friendly app designed to help you preserve and organize cherished moments effortlessly. It allows you to add titles, dates, hashtags, and descriptions to memories while supporting picture attachments for a richer experience. With a powerful hashtag-based search and secure local storage using SQLite, My Memories ensures quick access to your data without relying on cloud services. The app provides a seamless and private way to manage and relive your personal memories anytime.",
    image: memories,
  },
];

const AllProjects = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4 // Increased from 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1.2, // Increased from 0.8
        bounce: 0.3 // Added gentle bounce
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.6, // Increased from 0.3
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      id="project" 
      className="w-full bg-[#1B1B1B] p-12 rounded-[20px] -mt-8 pb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div 
        className="max-w-7xl mx-auto flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          My <span className="text-orange-500 relative">
            Projects
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </span>
        </h1>
      </motion.div>

      
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group block h-full cursor-pointer"
            onClick={() => navigate(`/project/${project.id}`)}
            variants={projectVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.5 } // Increased from default
            }}
            layout
          >
            <motion.div 
              className="bg-[#272727] rounded-3xl p-8 h-full flex flex-col relative overflow-hidden"
              initial={{ backgroundColor: "#272727" }}
              whileHover={{ backgroundColor: "#505050" }}
              transition={{ duration: 0.6 }} // Increased from 0.3
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.8 }} // Increased from 0.3
              />
              
              <motion.img 
                src={project.image} 
                alt={project.name} 
                className="w-auto h-[124px] object-contain pb-4"
                variants={imageVariants}
                whileHover="hover"
              />
              
              <motion.div className="flex-grow space-y-4">
                <motion.p 
                  className="text-white text-[30px]"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }} // Increased delays
                >
                  {project.name}
                </motion.p>
                <motion.p 
                  className="text-orange-500 text-[16px]"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                >
                  {project.tech}
                </motion.p>
                <motion.p 
                  className="text-[#8B949E] text-[14px] line-clamp-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                >
                  {project.description}
                </motion.p>
              </motion.div>

              <motion.div 
                className="flex justify-end pt-8"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.5 }
                }}
              >
                <motion.div 
                  className="bg-[#1B1B1B] rounded-full p-4"
                  initial={{ rotate: -45 }}
                  animate={{ rotate: -45 }} 
                  whileHover={{ 
                    rotate: 0,
                    backgroundColor: "#FF6B00",
                    transition: { duration: 0.6 } // Increased from 0.3
                  }}
                >
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
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

    </motion.div>
  );
};

export default AllProjects;