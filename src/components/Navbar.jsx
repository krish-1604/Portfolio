import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const isScrollingRef = useRef(false);
  const animationFrameRef = useRef(null);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#project' },
    { name: 'Experience', href: '#exp' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  // Previous smooth scroll implementation remains the same
  const smoothScroll = (targetPosition, duration = 1000) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    isScrollingRef.current = true;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

      window.scrollTo(0, startPosition + distance * ease(progress));

      if (timeElapsed < duration) {
        animationFrameRef.current = requestAnimationFrame(animation);
      } else {
        isScrollingRef.current = false;
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      }
    }

    animationFrameRef.current = requestAnimationFrame(animation);
  };

  const handleScroll = () => {
    if (isScrollingRef.current) return;

    const scrollPosition = window.scrollY + window.innerHeight / 3;

    if (scrollPosition < window.innerHeight / 2) {
      setActiveItem('Home');
      return;
    }

    for (let i = navItems.length - 1; i >= 0; i--) {
      const item = navItems[i];
      if (item.href === '#') continue;

      const element = document.querySelector(item.href);
      if (element) {
        const position = element.offsetTop - 100;
        if (scrollPosition >= position) {
          setActiveItem(item.name);
          break;
        }
      }
    }
  };

  const handleNavClick = (itemName, href) => {
    setActiveItem(itemName);
    setIsOpen(false);

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    if (href === '#') {
      smoothScroll(0);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 100;
      smoothScroll(targetPosition);
    }
  };

  useEffect(() => {
    let scrollTimeout;
    
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (!isScrollingRef.current) {
          handleScroll();
        }
      }, 100);
    };

    window.addEventListener('scroll', debouncedScroll);

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(scrollTimeout);
    };
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const menuButtonVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.nav 
      className="p-4 font-sans fixed top-0 left-0 w-full z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="md:bg-[#1E1E1E] md:p-2 md:rounded-lg backdrop-blur-lg bg-opacity-90">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between px-4">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.name, item.href);
              }}
              className={`px-6 py-2 relative ${
                activeItem === item.name
                  ? 'text-white'
                  : 'text-white hover:text-[#FF8A52]'
              }`}
              variants={itemVariants}
              whileHover="hover"
            >
              {item.name}
              {activeItem === item.name && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-[#FF8A52] rounded-lg -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-between items-center">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 flex items-center justify-center w-10 h-10 fixed top-4 left-4 z-50 bg-black rounded-md shadow-lg"
            animate={isOpen ? "open" : "closed"}
            variants={menuButtonVariants}
          >
            <motion.div className="w-6 h-6 flex flex-col justify-between">
              <motion.span 
                className="block w-6 h-0.5 bg-white"
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              />
              <motion.span 
                className="block w-6 h-0.5 bg-white"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span 
                className="block w-6 h-0.5 bg-white"
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              />
            </motion.div>
          </motion.button>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute top-16 left-4 bg-black border border-gray-800 rounded-lg shadow-lg z-40"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.name, item.href);
                    }}
                    className={`block px-4 py-3 text-lg ${
                      activeItem === item.name
                        ? 'text-[#FF8A52]'
                        : 'text-white hover:text-[#FF8A52]'
                    }`}
                    variants={itemVariants}
                    whileHover="hover"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;