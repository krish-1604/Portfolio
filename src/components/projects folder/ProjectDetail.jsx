import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Command, Clock, Calendar, Globe, PlayCircle, Store, Smartphone, Download } from 'lucide-react';
import projectdata from "./projectdata";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectdata.find((project) => project.id === id);
  const [imageOrientations, setImageOrientations] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (project && project.images) {
      const orientations = project.images.map(img => {
        const image = new Image();
        image.src = img;
        return new Promise((resolve) => {
          image.onload = () => {
            resolve(image.width < image.height ? 'vertical' : 'horizontal');
          };
        });
      });

      Promise.all(orientations).then(setImageOrientations);
    }
  }, [project]);

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
              <motion.div className="grid grid-cols-2 gap-4">
                {project.images.map((img, index) => (
                  <motion.img 
                    key={index}
                    src={img}
                    alt={`${project.name} screenshot ${index + 1}`}
                    className={`w-full rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300 ${
                      imageOrientations[index] === 'vertical' ? 'col-span-1' : 'col-span-2'
                    }`}
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