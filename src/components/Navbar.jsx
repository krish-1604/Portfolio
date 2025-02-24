import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const isScrollingRef = useRef(false);
  const animationFrameRef = useRef(null);

  const navItems = [
    { name: 'Home', href: '' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#project' },
    { name: 'Experience', href: '#exp' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

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

  const menuVariants = {
    closed: {
      x: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.nav 
      className="p-4 font-cygre fixed top-0 left-0 w-full z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      {/* Desktop Navigation */}
      <div className="hidden lg:block md:bg-[#1E1E1E] md:p-2 md:rounded-lg backdrop-blur-lg bg-opacity-90">
        <div className="flex items-center justify-between px-4">
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
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Menu Button - Now consistently white */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-6 left-4 z-50 p-4pa bg-[#1E1E1E] rounded-md"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className={`block w-6 h-0.5 bg-white transform transition-transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transform transition-transform ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed top-0 left-0 h-screen w-64 bg-[#1E1E1E] z-40"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="flex flex-col items-start p-8 pt-20">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.name, item.href);
                    }}
                    className={`text-3xl font-700 my-2 ${
                      activeItem === item.name
                        ? 'text-[#FF8A52]'  // Only active item is orange
                        : 'text-white hover:text-white'  // Others stay white
                    }`}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                    {activeItem === item.name && (
                      <motion.div
                        layoutId="mobileActiveIndicator"
                        className="absolute inset-0 opacity-10 rounded-lg -z-10"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;