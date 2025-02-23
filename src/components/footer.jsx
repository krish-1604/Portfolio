import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showEmail, setShowEmail] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const socialLinks = [
    {
      icon: <InstagramIcon size={20} className="md:w-8 md:h-8" />,
      url: "https://www.instagram.com/_krish1604/",
      delay: 0.3
    },
    {
      icon: <LinkedinIcon size={20} className="md:w-8 md:h-8" />,
      url: "https://www.linkedin.com/in/krish-mehta-7a4037252/",
      delay: 0.4
    },
    {
      icon: <GithubIcon size={20} className="md:w-8 md:h-8" />,
      url: "https://github.com/krish-1604",
      delay: 0.5
    }
  ];

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
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('krish1604mehta@gmail.com')
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((error) => {
        console.error('Failed to copy email:', error);
      });
  };

  useEffect(() => {
    emailjs.init('h8xbZxeIj-PK-Tz-V');
  }, []);

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
        className="bg-[#FF8A50] w-full px-3 md:px-5 py-8 rounded-[2px] overflow-hidden relative"
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
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="space-y-8"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h1 className="font-baseneuetrial text-[40px] sm:text-[60px] md:text-[80px] text-white font-bold leading-tight">
                  Get in Touch
                </h1>
                <motion.p 
                  className="text-black/90 max-w-lg text-sm md:text-base mt-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas.
                </motion.p>
              </div>

              <div className="space-y-2">
                <motion.h3 
                  className="font-baseneuetrial text-black text-base md:text-lg"
                  initial={{ y: -10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Follow me on
                </motion.h3>
                <div className="flex gap-4">
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
                  <motion.div
                    className="relative"
                    onHoverStart={() => setShowEmail(true)}
                    onHoverEnd={() => setShowEmail(false)}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <MailIcon 
                      size={20}
                      className="md:w-8 md:h-8 text-black hover:text-white/80 transition-colors cursor-pointer"
                      onClick={handleCopyEmail}
                    />
                    {(showEmail || isCopied) && (
                      <motion.span
                        className="absolute left-0 top-8 whitespace-nowrap bg-black text-white px-2 py-1 rounded text-sm"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        {isCopied ? 'Copied!' : 'krish1604mehta@gmail.com'}
                      </motion.span>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#1E1E1E] rounded-2xl p-6"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full bg-[#272727] text-white rounded-lg px-4 py-2 border border-[#FFFFFF1A] focus:border-[#FF8A50] focus:outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full bg-[#272727] text-white rounded-lg px-4 py-2 border border-[#FFFFFF1A] focus:border-[#FF8A50] focus:outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    required
                    rows={4}
                    className="w-full bg-[#272727] text-white rounded-lg px-4 py-2 border border-[#FFFFFF1A] focus:border-[#FF8A50] focus:outline-none resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-white text-orange-500 py-2 rounded-lg font-medium hover:bg-[#ffffffe6] transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitted ? 'Message Sent!' : 'Send Message'}
                  {!isSubmitted && <ArrowUpRight className="w-4 h-4 -mt-1" />}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GetInTouch;