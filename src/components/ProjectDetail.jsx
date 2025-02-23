import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Command, Clock, Calendar, Globe, PlayCircle, Store, Smartphone,Download } from 'lucide-react';
import memories from "../assets/projects/mymemories/mymemories.png";
import assignofast from "../assets/projects/assignofast/assignofast.png";
import redicli from "../assets/projects/redicli/redicli.png";
import redicli1 from "../assets/projects/redicli/redicli1.png";
import redicli2 from "../assets/projects/redicli/redicli2.png";
import redicli3 from "../assets/projects/redicli/redicli3.png";
import redicli4 from "../assets/projects/redicli/redicli4.png";

const projects = [
  {
    id: "redicli",
    name: "RediCLI",  
    tech: "GoLang, Redis, tview, go-redis, fuzzysearch, websocket",
    description: "RediCLI is a powerful terminal-based CLI tool for optimizing Redis performance and managing databases efficiently. Built with Go, it features an interactive TUI, command auto-completion, real-time analytics, and advanced key management with TTL support. It enables seamless data import/export, multi-instance connection handling, and an intuitive color-coded interface for better usability. RediCLI enhances Redis administration with fast execution, efficient filtering, and streamlined database operations.",
    image: redicli,
    images: [redicli1, redicli2, redicli3, redicli4],
    github: "https://github.com/Amrit02102004/RediCLI",
    demo_video: "https://youtu.be/example-demo",
    installation: "sudo snap install redicli --edge",
    features: [
      "Interactive terminal interface",
      "Command auto-completion and suggestions",
      "Built-in analytics dashboard",
      "Import/Export data from CSV and XLSX files",
      "Advanced key management with TTL support",
      "Connection management for multiple Redis instances",
      "Color-coded interface for better readability"
    ],
    commands: {
      Basic: [
        "get <key> - Retrieve the value of a key",
        "set <key> <value> - Set the string value of a key",
        "del <key> - Delete a key",
        "keys <pattern> - Find all keys matching a pattern",
        "ttl <key> - Get the time to live for a key",
        "expire <key> <seconds> - Set a key's time to live in seconds"
      ],
      Advanced: [
        "key filter set - Open form to set a key with TTL in milliseconds",
        "key filter update - Open form to update a key with KEEPTTL option",
        "flushall - Delete all keys (use with caution)",
        "see analytics - Open analytics dashboard in browser"
      ],
      Data: [
        "import - Import data from CSV/XLSX file",
        "export - Export data to CSV file",
        "import ./path/to/file.csv - Direct import from file path",
        "export ./path/to/file.csv - Direct export to file path"
      ],
      Connection: [
        "add connection - Add and connect to a new Redis instance",
        "view all connections - List all saved Redis connections",
        "connect <name> - Connect to a saved Redis connection",
        "del connection <name> - Delete a specific saved connection",
        "del all connections - Delete all saved connections"
      ],
      Interface: [
        "clear all - Clear console and logs screen",
        "clear logs - Clear logs screen",
        "clear display - Clear display screen",
        "help - Display help information",
        "quit - Exit RediCLI"
      ]
    },
    shortcuts: [
      "Tab - Cycle through command suggestions",
      "Up/Down Arrows - Navigate command history",
      "Enter - Execute command"
    ],
    performance: "Optimized for fast execution, low-latency Redis interactions, and real-time analytics.",
    year: 2025,
    duration: "48 HOURS",
  },
  {
    id: "assignofast",
    name: "AssignoFast",
    tech: "Flutter, Node.js, Firebase, SQLite, Kotlin, Swift",
    description: "AssignoFast is a smart assignment management app for students, designed to sync assignment data and timetables from Firebase while supporting offline access using SQLite. Built with Flutter, it features an intuitive UI/UX, optimized performance, and smart notifications to help students stay on track with deadlines. The app also includes a Kotlin-based Android widget for quick timetable updates and a filtering system for easy task management.",
    image: assignofast,
    images: [],
    demo_video: "https://youtu.be/example-demo",
    features: [
      "Sync assignments and timetables from Firebase",
      "Works offline with SQLite for local storage",
      "Optimized performance with reduced sync time",
      "Kotlin and Swift based widget for quick timetable updates on homescreen",
      "Smart notifications for assignment reminders",
      "Refined UI/UX for an intuitive experience",
      "Filter and search assignments easily",
      "Track pending, completed, and upcoming assignments",
      "Auto-sync with minimal battery and data usage"
    ],
    performance: "Optimized for low-latency data sync, offline access, and battery efficiency.",
    year: 2025,
    duration: "2 Months",
    website: "https://assignofast.ieeecsvit.com",
    appstore: "https://apps.apple.com/gb/app/assignofast/id6736854512",
    webstore: "https://chromewebstore.google.com/detail/assignofast/oenbdnejpfjgonicapclmcnhiglacaem",
    playstore: "https://play.google.com/store/apps/details?id=com.aryanjain.assignofast",
  },
  {
    id: "mymemories",
    name: "My Memories",
    tech: "Flutter, SQLite",
    description: "My Memories is a user-friendly application designed to help you preserve and organize your cherished memories. With features like hashtag-based search, picture attachments, and local data storage, it provides a seamless way to manage your personal memories securely and efficiently. The app allows users to add titles, dates, hashtags, and descriptions to memories, ensuring quick access and better organization. With secure offline storage using SQLite, My Memories keeps your data private without relying on cloud services.",
    image: memories,
    github: "https://github.com/krish-1604/My-Memories",
    features: [
      "Add titles, dates, hashtags, and detailed descriptions to memories",
      "Attach pictures to enhance stored moments",
      "Quickly search memories using hashtags",
      "Secure and private local storage with SQLite",
      "No internet required—works fully offline"
    ],
    demo_video: "Demo Video",
    download: "Download APK",
    year: 2024,
    duration: "3 Weeks",
  }
  
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (!project) {
    return (
      <div className="flex h-screen items-center justify-center">
        <motion.h2 
          className="text-white text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Project not found
        </motion.h2>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#1B1B1B] py-8 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/projects" className="inline-flex items-center text-orange-500 hover:text-orange-400 mb-8 group">
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div 
          className="space-y-6 text-center mb-12"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.img 
            variants={fadeInUp}
            src={project.image} 
            alt={project.name} 
            className="w-[20%] mx-auto rounded-lg border border-[#FFFFFF1A] hover:scale-105 transition-transform duration-300" 
          />
          <motion.h1 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-white"
          >
            {project.name}
          </motion.h1>
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            variants={staggerChildren}
          >
            {project.tech.split(', ').map((tech, index) => (
              <motion.span 
                key={index}
                variants={fadeInUp}
                className="px-3 py-1 bg-orange-500/10 rounded-full text-sm text-orange-500 hover:bg-orange-500/20 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Project Meta */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            variants={fadeInUp}
            className="flex items-center justify-center md:justify-end gap-4"
          >
            <Calendar className="w-5 h-5 text-orange-500" />
            <span className="text-white">{project.year}</span>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            className="flex items-center justify-center md:justify-start gap-4"
          >
            <Clock className="w-5 h-5 text-orange-500" />
            <span className="text-white">{project.duration}</span>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {/* Left Column */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            {project.images && project.images.length > 0 && (
              <motion.div className="space-y-4">
                {project.images.map((img, index) => (
                  <motion.img 
                    key={index}
                    src={img}
                    alt={`${project.name} screenshot ${index + 1}`}
                    className="w-full rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  />
                ))}
              </motion.div>
            )}

            {project.installation && (
              <motion.div 
                variants={fadeInUp}
                className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/60 transition-colors"
              >
                <h2 className="text-xl font-bold text-white mb-4">Installation</h2>
                <code className="block p-4 bg-gray-900 rounded text-gray-300 font-mono">
                  {project.installation}
                </code>
              </motion.div>
            )}

            {project.shortcuts && (
              <motion.div 
                variants={fadeInUp}
                className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/60 transition-colors"
              >
                <h2 className="text-xl font-bold text-white mb-4">Shortcuts</h2>
                <motion.ul 
                  className="space-y-2"
                  variants={staggerChildren}
                >
                  {project.shortcuts.map((shortcut, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <Command className="w-4 h-4 text-orange-500/60" />
                      <span>{shortcut}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="space-y-8"
            variants={fadeInUp}
          >
            {/* Description */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </motion.div>

            {/* Features */}
            {project.features && (
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
                <motion.ul 
                  className="grid grid-cols-1 gap-3"
                  variants={staggerChildren}
                >
                  {project.features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <div className="w-2 h-2 mt-2 rounded-full bg-orange-500" />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}

            {/* Commands */}
            {project.commands && (
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-bold text-white mb-4">Commands</h2>
                {Object.entries(project.commands).map(([category, commands]) => (
                  <motion.div 
                    key={category} 
                    className="mb-6"
                    variants={fadeInUp}
                  >
                    <h3 className="text-lg font-semibold text-orange-500 mb-3">{category}</h3>
                    <motion.div 
                      className="space-y-2"
                      variants={staggerChildren}
                    >
                      {commands.map((command, index) => (
                        <motion.div 
                          key={index}
                          variants={fadeInUp}
                          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                        >
                          <Command className="w-4 h-4 text-orange-500" />
                          <code className="font-mono">{command}</code>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Performance */}
            {project.performance && (
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-bold text-white mb-4">Performance</h2>
                <p className="text-gray-300">{project.performance}</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Links Section */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {project.github && (
            <motion.a 
              variants={fadeInUp}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-all hover:scale-105"
              whileHover={{ y: -2 }}
            >
              <Github className="w-5 h-5" />
              View Source
            </motion.a>
          )}
          {project.demo_video && (
            <motion.a 
              variants={fadeInUp}
              href={project.demo_video}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white transition-all hover:scale-105"
              whileHover={{ y: -2 }}
            >
              <PlayCircle className="w-5 h-5" />
              Watch Demo
            </motion.a>
          )}
          {project.website && (
            <motion.a 
              variants={fadeInUp}
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-all hover:scale-105"
              whileHover={{ y: -2 }}
            >
              <Globe className="w-5 h-5" />
              Visit Website
            </motion.a>
          )}
          {project.playstore && (
            <motion.a 
              variants={fadeInUp}
              href={project.playstore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-all hover:scale-105"
              whileHover={{ y: -2 }}
            >
              <Smartphone className="w-5 h-5" />
              Play Store
            </motion.a>
          )}
          {project.appstore && (
            <motion.a 
              variants={fadeInUp}
              href={project.appstore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg text-white transition-all hover:scale-105"
              whileHover={{ y: -2 }}
            >
              <Store className="w-5 h-5" />
              App Store
            </motion.a>
          )}
          {project.webstore && (
            <motion.a 
              variants={fadeInUp}
              href={project.webstore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg text-white transition-all hover:scale-105"
              whileHover={{ y: -2 }}
            >
              <Store className="w-5 h-5" />
              Web Store
            </motion.a>
          )}
          {project.download && (
            <motion.a 
              variants={fadeInUp}
              href={project.download}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-lg text-white transition-all hover:scale-105"
              whileHover={{ y: -2 }}
            >
              <Download className="w-5 h-5" />
              Download APK
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;