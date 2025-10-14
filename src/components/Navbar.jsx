
import "./Navbar.css"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '#home', label: 'Home' },
    { to: '#portfolio', label: 'Portfolio' },
    { to: '#about', label: 'About Me' },
    { to: '#testimonials', label: 'Testimonials' },
    { to: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white py-4 px-6 md:px-12 flex justify-between items-center shadow-sm sticky top-0 z-50">
      
      {/* Child 1: Logo */}
      <div className="text-2xl font-bold text-gray-800">
        Segunfunmi<span className="text-purple-600">.</span>
      </div>

      {/* Child 2: Desktop Links */}
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a key={link.label} href={link.to} className="text-gray-600 hover:text-purple-600 font-medium cursor-pointer transition duration-300">
            {link.label}
          </a>
        ))}
        <button className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300 font-medium">
          Let's Talk
        </button>
      </div>
      
      {/* Child 3: Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* This part is for the dropdown menu, it is not a direct child of the nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.to} className="text-gray-600 hover:text-purple-600 py-2 cursor-pointer" onClick={toggleMenu}>
            {link.label}
          </a>
        ))}
        <button className="bg-purple-600 text-white py-2 px-6 rounded-lg mt-4">
          Let's Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

