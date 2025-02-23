import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import landingAnimation from '../assets/landing.json';

const ContactForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'krishmehta',
        'krishmehta',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'krish1604mehta@gmail.com'
        },
        'h8xbZxeIj-PK-Tz-V'
      );
      
      onSubmit(formData);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  useEffect(() => {
    emailjs.init('h8xbZxeIj-PK-Tz-V');
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#1E1E1E] rounded-2xl w-full max-w-md p-6 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-white mb-6">Let's Talk</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full bg-[#272727] text-white rounded-lg px-4 py-2 border border-gray-600 focus:border-orange-500 focus:outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-[#272727] text-white rounded-lg px-4 py-2 border border-gray-600 focus:border-orange-500 focus:outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full bg-[#272727] text-white rounded-lg px-4 py-2 border border-gray-600 focus:border-orange-500 focus:outline-none resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ThankYouModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#1E1E1E] rounded-2xl w-full max-w-md p-6 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-gray-300 mb-6">Thanks for reaching out. I'll get back to you soon!</p>
            <motion.button
              onClick={onClose}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Landing = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.05,
      color: "#f97316",
      transition: { duration: 0.2 }
    }
  };

  const handleSubmit = (formData) => {
    setIsContactFormOpen(false);
    setIsThankYouOpen(true);
  };

  return (
    <motion.div 
      className="bg-black p-4 rounded-2xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative bg-[#1a1a1a] text-white px-4 sm:px-6 md:px-12 py-8 rounded-2xl">
        <motion.nav 
          className="hidden sm:flex items-center justify-between pb-8"
          variants={itemVariants}
        >
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-2xl font-serif italic">Krish Mehta</h1>
            <div className="absolute bottom-0 left-0 w-full">
              <motion.svg 
                width="100%" 
                height="8" 
                viewBox="0 0 100 8" 
                preserveAspectRatio="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <path 
                  d="M0,7 Q50,0 100,7" 
                  stroke="white" 
                  strokeWidth="2" 
                  fill="none" 
                />
              </motion.svg>
            </div>
          </motion.div>
          
          <div className="flex justify-center flex-1">
            <div className="flex gap-4 justify-center">
              {[
                { text: "LINKEDIN", href: "https://www.linkedin.com/in/krish-mehta-7a4037252/" },
                { text: "INSTAGRAM", href: "https://www.instagram.com/_krish1604/" },
                { text: "GITHUB", href: "https://github.com/krish-1604" }
              ].map((link) => (
                <motion.a
                  key={link.text}
                  href={link.href}
                  className="flex items-center gap-1"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  {link.text} 
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </div>
          
          <motion.button 
            className="border-2 border-orange-500 bg-[#393939] text-white px-4 py-2 rounded-full transition-all flex items-center gap-1"
            whileHover={{ scale: 1.05, backgroundColor: "#f97316" }}
            onClick={() => setIsContactFormOpen(true)}
          >
            LET'S TALK 
            <motion.div
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.nav>

        <motion.main 
          className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8"
          variants={itemVariants}
        >
          <div className="lg:max-w-2xl text-center lg:text-left">
            <motion.h2 
              className="text-4xl sm:text-6xl lg:text-7xl font-bold pb-4"
              variants={itemVariants}
            >
              I craft <motion.span 
                className="text-orange-500"
                animate={{ 
                  scale: [1, 1.05, 1],
                  transition: { 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
              >
                stunning
              </motion.span> experiences
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl pb-4"
              variants={itemVariants}
            >
              As a developer, I collaborate with individuals globally to craft customized solutions.
            </motion.p>
          </div>
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Lottie 
              animationData={landingAnimation} 
              loop 
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl" 
              lazyLoad 
            />
          </motion.div>
        </motion.main>
        <motion.p 
          className="text-center lg:text-left text-white text-sm sm:text-base mt-4"
          variants={itemVariants}
        >
          Available for freelance work
        </motion.p>
      </div>

      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        onSubmit={handleSubmit}
      />

      <ThankYouModal
        isOpen={isThankYouOpen}
        onClose={() => setIsThankYouOpen(false)}
      />
    </motion.div>
  );
};

export default Landing;