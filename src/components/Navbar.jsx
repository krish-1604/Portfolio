import React, { useState, useEffect, useCallback } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [isScrolling, setIsScrolling] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#project' },
    { name: 'Experience', href: '#exp' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const smoothScroll = (targetPosition, duration = 1500) => {
    setIsScrolling(true);
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = (t) =>
        t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

      window.scrollTo(0, startPosition + distance * ease(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        setIsScrolling(false);
      }
    }

    requestAnimationFrame(animation);
  };

  const determineActiveSection = useCallback(() => {
    if (isScrolling) return;

    const scrollPosition = window.scrollY + window.innerHeight / 3;

    // Check if we're at the top of the page
    if (scrollPosition < window.innerHeight / 2) {
      setActiveItem('Home');
      return;
    }

    // Check each section
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
  }, [isScrolling]);

  const handleNavClick = (itemName, href) => {
    setActiveItem(itemName);
    setIsOpen(false);

    if (href === '#') {
      smoothScroll(0);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const targetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - 100;
      smoothScroll(targetPosition);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(determineActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [determineActiveSection]);

  return (
    <nav className="p-4 font-sans bg-black fixed top-0 left-0 w-full z-50">
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