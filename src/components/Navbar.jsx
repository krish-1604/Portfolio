import React, { useState } from 'react';
import '../font.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#project' },
    { name: 'Experience', href: '#exp' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ];

  const smoothScroll = (targetPosition, duration = 1500) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = (t) => t < 0.5 
        ? 4 * t * t * t 
        : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

      window.scrollTo(0, startPosition + (distance * ease(progress)));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  };

  const handleNavClick = (itemName, href) => {
    setActiveItem(itemName);
    setIsOpen(false);

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

  return (
    <nav className="p-4 font-cygre md:px-20 bg-black">
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
              className={`px-6 py-2 transition-all duration-300  ${
                activeItem === item.name 
                ? 'bg-[#FF8A52] text-white border-10 border-[#FF8A52] rounded-lg' 
                : 'text-white hover:text-[#FF8A52]'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 -ml-2" // Added negative margin to align with edge
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="mt-2 bg-black border-t border-gray-800">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.name, item.href);
                  }}
                  className={`block px-0 py-3 text-lg transition-all duration-300 ${
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