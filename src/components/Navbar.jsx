import React, { useState } from 'react';
import '../font.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Skills', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Experience', href: '#' },
    { name: 'Resume', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const handleNavClick = (itemName) => {
    setActiveItem(itemName);
    setIsOpen(false); // Close mobile menu when item is clicked
  };

  return (
    <nav className="p-4 font-cygre px-20">
      <div className="bg-[#1E1E1E] p-2 md:rounded-lg">
        <div className="hidden md:flex items-center justify-between px-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.name);
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
            className="text-white p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="mt-2 bg-[#1E1E1E] p-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.name);
                  }}
                  className={`block px-4 py-2 text-lg mb-1 transition-all duration-300 ${
                    activeItem === item.name 
                    ? 'bg-[#FF8A52] text-white' 
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