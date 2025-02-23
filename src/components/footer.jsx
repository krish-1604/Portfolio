import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon, InstagramIcon, LinkedinIcon, ArrowUpRight, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../font.css';

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

            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full bg-[#272727] text-white rounded-lg px-4 py-2 border border-gray-600 focus:border-[#FF8A50] focus:outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-[#272727] text-white rounded-lg px-4 py-2 border border-gray-600 focus:border-[#FF8A50] focus:outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full bg-[#272727] text-white rounded-lg px-4 py-2 border border-gray-600 focus:border-[#FF8A50] focus:outline-none resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-[#FF8A50] text-white py-2 rounded-lg font-medium hover:bg-[#ff7b37] transition-colors"
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
            <p className="text-gray-300 mb-6">Thanks for contacting Krish. I'll get back to you soon!</p>
            <motion.button
              onClick={onClose}
              className="bg-[#FF8A50] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#ff7b37] transition-colors"
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

const GetInTouch = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const socialLinks = [
    {
      icon: <InstagramIcon size={20} className="md:w-6 md:h-6" />,
      url: "https://www.instagram.com/_krish1604/",
      delay: 0.3
    },
    {
      icon: <LinkedinIcon size={20} className="md:w-6 md:h-6" />,
      url: "https://www.linkedin.com/in/krish-mehta-7a4037252/",
      delay: 0.4
    },
    {
      icon: <GithubIcon size={20} className="md:w-6 md:h-6" />,
      url: "https://github.com/krish-1604",
      delay: 0.5
    }
  ];

  const handleSubmit = (formData) => {
    setIsContactFormOpen(false);
    setIsThankYouOpen(true);
  };

  return (
    <motion.div 
      id='contact' 
      className="bg-black w-full flex items-center justify-center px-4 md:px-16 py-6 md:py-10 rounded-[20px] -mt-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="bg-[#FF8A50] w-full px-3 md:px-5 py-2.5 rounded-[2px] overflow-hidden relative"
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 3
          }}
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8">
            <motion.div 
              className="space-y-0 flex-1"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-baseneuetrial text-[40px] sm:text-[60px] md:text-[80px] text-white font-bold leading-tight">
                Get in Touch
              </h1>
              <motion.p 
                className="text-black/90 max-w-lg text-sm md:text-base mt-2 md:mt-0"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-auto space-y-4"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-2 text-right">
                <motion.h3 
                  className="font-baseneuetrial text-black text-sm md:text-base"
                  initial={{ y: -10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Follow me on
                </motion.h3>
                <div className="flex gap-4 justify-end">
                  {socialLinks.map((social, index) => (
                    <motion.a 
                      key={index}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-black hover:text-white/80 transition-colors"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.4, delay: social.delay }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>         
              <motion.button
                className="w-full md:w-auto bg-transparent text-white px-4 md:px-6 py-2 rounded-[10px] border-2 border-black hover:bg-white hover:text-[#FF8A50] transition-colors duration-300 flex items-center justify-center gap-2 text-sm md:text-base group"
                onClick={() => setIsContactFormOpen(true)}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Contact Me
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.2 }}
                >
                  <ArrowUpRight className="w-4 h-4 -mt-1 rotate-4 group-hover:rotate-45 transition-transform duration-300" />
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

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

export default GetInTouch;