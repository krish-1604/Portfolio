import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const driveLink = "https://drive.google.com/file/d/1FFe2COLnCVNIWr9xa13g7pPZp1PUrfxT/view";

  const achievements = [
    {
      icon: "📱",
      text: "Developed Flutter applications with Provider state management"
    },
    {
      icon: "💬",
      text: "Implemented real-time chat using Firebase"
    },
    {
      icon: "💾",
      text: "Integrated SQLite for local data persistence"
    },
    {
      icon: "🎨",
      text: "Created adaptive UI designs for enhanced usability"
    }
  ];

  return (
    <motion.div 
      id="exp" 
      className="w-full bg-[#272727] p-12 rounded-[20px] -mt-8 pb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-4 md:pb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-orange-500 relative">
              Experience
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </span>
          </h1>
        </div>
      </motion.div>

      <motion.div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
        <motion.a
          href={driveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="bg-[#393939] rounded-3xl p-8 relative overflow-hidden"
            initial={{ backgroundColor: "#393939" }}
            whileHover={{ backgroundColor: "#505050" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            />
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-cygre text-white pb-2">Flutter Intern</h2>
              <p className="text-orange-500 text-xl">V4U Technologies</p>
              <p className="text-gray-400 text-sm">June 2024 – July 2024 • Ahmedabad</p>
            </motion.div>
            
            <motion.hr 
              className="border-gray-500 my-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-2xl">{achievement.icon}</span>
                  <p className="text-gray-300 text-sm leading-tight">{achievement.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex justify-end pt-8"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="bg-[#272727] rounded-full p-4 transform rotate-[-45deg]"
                whileHover={{ 
                  rotate: 0,
                  backgroundColor: "#FF6B00",
                  transition: { duration: 0.6 }
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
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Experience;