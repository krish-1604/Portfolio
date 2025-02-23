import React from "react";
import { useParams, Link } from "react-router-dom";
import {ArrowLeft, Github, ExternalLink, Command, Clock, Calendar,Globe,PlayCircle,Store,Smartphone} from 'lucide-react';
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
    images: [
      redicli1,redicli2,redicli3,redicli4
    ],
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
    tech: "Flutter, Node.js, Firebase, SQLite, Kotlin",
    description: "AssignoFast is a smart assignment management app for students, designed to sync assignment data and timetables from Firebase while supporting offline access using SQLite. Built with Flutter, it features an intuitive UI/UX, optimized performance, and smart notifications to help students stay on track with deadlines. The app also includes a Kotlin-based Android widget for quick timetable updates and a filtering system for easy task management.",
    image: assignofast,
    images: [
      "assignofast1", "assignofast2", "assignofast3", "assignofast4"
    ],
    demo_video: "https://youtu.be/example-demo",
    features: [
      "Sync assignments and timetables from Firebase",
      "Works offline with SQLite for local storage",
      "Optimized performance with reduced sync time",
      "Kotlin-based Android widget for quick timetable updates",
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
    return (
      <div className="flex h-screen items-center justify-center">
        <h2 className="text-white text-2xl">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1B1B1B] py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link to="/projects" className="inline-flex items-center text-orange-500 hover:text-orange-400 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="space-y-6 text-center mb-12">
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-[20%] mx-auto rounded-lg border border-[#FFFFFF1A]" 
          />
          <h1 className="text-2xl md:text-3xl font-bold text-white">{project.name}</h1>
          <div className="flex flex-wrap justify-center gap-3">
            {project.tech.split(', ').map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-orange-500/10 rounded-full text-sm text-orange-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Meta */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex items-center justify-center md:justify-end gap-4">
            <Calendar className="w-5 h-5 text-orange-500" />
            <span className="text-white">{project.year}</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <Clock className="w-5 h-5 text-orange-500" />
            <span className="text-white">{project.duration}</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Images and Installation */}
          <div className="space-y-8">
            {/* Image Gallery */}
            {project.images && (
              <div className="space-y-4">
                {project.images.map((img, index) => (
                  <img 
                    key={index}
                    src={img}
                    alt={`${project.name} screenshot ${index + 1}`}
                    className="w-full rounded-lg shadow-lg"
                  />
                ))}
              </div>
            )}

            {/* Installation Instructions */}
            {project.installation && (
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Installation</h2>
                <code className="block p-4 bg-gray-900 rounded text-gray-300 font-mono">
                  {project.installation}
                </code>
              </div>
            )}

            {/* Shortcuts */}
            {project.shortcuts && (
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Shortcuts</h2>
                <ul className="space-y-2">
                  {project.shortcuts.map((shortcut, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <Command className="w-4 h-4 text-orange-500/60" />
                      <span>{shortcut}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            {/* Features */}
            {project.features && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
                <ul className="grid grid-cols-1 gap-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <div className="w-2 h-2 mt-2 rounded-full bg-orange-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Commands */}
            {project.commands && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Commands</h2>
                {Object.entries(project.commands).map(([category, commands]) => (
                  <div key={category} className="mb-6">
                    <h3 className="text-lg font-semibold text-orange-500 mb-3">{category}</h3>
                    <div className="space-y-2">
                      {commands.map((command, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-300">
                          <Command className="w-4 h-4 text-orange-500/60" />
                          <code className="font-mono">{command}</code>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Performance */}
            {project.performance && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Performance</h2>
                <p className="text-gray-300">{project.performance}</p>
              </div>
            )}
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-4">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              View Source
            </a>
          )}
          {project.demo_video && (
            <a 
              href={project.demo_video}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white transition-colors"
            >
              <PlayCircle className="w-5 h-5" />
              Watch Demo
            </a>
          )}
          {project.website && (
            <a 
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
            >
              <Globe className="w-5 h-5" />
              Visit Website
            </a>
          )}
          {project.playstore && (
            <a 
              href={project.playstore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors"
            >
              <Smartphone className="w-5 h-5" />
              Play Store
            </a>
          )}
          {project.appstore && (
            <a 
              href={project.appstore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg text-white transition-colors"
            >
              <Store className="w-5 h-5" />
              App Store
            </a>
          )}
          {project.webstore && (
            <a 
              href={project.webstore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg text-white transition-colors"
            >
              <Store className="w-5 h-5" />
              Web Store
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;