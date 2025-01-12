import React, { useState, useEffect, useRef } from 'react';

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

  const smoothScroll = (targetPosition, duration = 1000) => {
    // Cancel any ongoing animation
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

      const ease = (t) => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

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

    // Cancel any ongoing scroll animation
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

  return (
    <nav className="p-4 font-sans fixed top-0 left-0 w-full z-50">
      <div className="md:bg-[#1E1E1E] md:p-2 md:rounded-lg">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between px-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.name, item.href);
              }}
              className={`px-6 py-2 transition-transform transform hover:scale-105 duration-300 ${
                activeItem === item.name
                  ? 'bg-[#FF8A52] text-white border border-[#FF8A52] rounded-lg'
                  : 'text-white hover:text-[#FF8A52]'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-between items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 flex items-center justify-center w-10 h-10 fixed top-4 left-4 z-50 bg-black rounded-md shadow-lg"
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="absolute top-16 left-4 bg-black border border-gray-800 rounded-lg shadow-lg transition-all duration-300 ease-in-out z-40">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.name, item.href);
                  }}
                  className={`block px-4 py-3 text-lg transition-transform transform hover:scale-105 duration-300 ${
                    activeItem === item.name
                      ? 'text-[#FF8A52]'
                      : 'text-white hover:text-[#FF8A52]'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;