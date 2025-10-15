import React, { useState } from 'react'; // 1. useState import karein
import { FaReact, FaBars, FaTimes } from "react-icons/fa"; // Icons ko Font Awesome se import karein
import { TbHexagonLetterSFilled } from "react-icons/tb"

const Navbar = () => {
  // 2. Menu ke open/closed state ko track karne ke liye state variable banayein
  const [isOpen, setIsOpen] = useState(false);

  // 3. State ko toggle karne ke liye function banayein
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo aur Owner ki jaankari */}
        <div className="owner flex items-center space-x-4">
          <TbHexagonLetterSFilled className=" animate-spin text-6xl text-white bg-gradient-to-bl from-purple-700 to-pink-500 rounded-lg p-2 inline-block hover:scale-110 duration-300 hover:rotate-180" />
          <div className="text-2xl font-bold text-gray-800">
            <span className="inline-block hover:scale-110 duration-300 bg-gradient-to-bl from-purple-700 to-pink-500 bg-clip-text text-transparent">Sarthak-Verse</span>
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className='hidden links md:flex md:flex-row md:space-x-3.5'>
          <a href="#home" className="text-purple-600 text-xl hover:text-amber-50 md:hover:text-white font-medium hover:font-bold hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">Home</a>
          <a href="#portfolio" className="text-purple-600 text-xl hover:text-white font-medium hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">Portfolio</a>
          <a href="#about" className="text-purple-600 text-xl hover:text-white font-medium hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">About Me</a>
          <a href="#contact" className="text-purple-600 text-xl hover:text-white font-medium hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">Contact</a>
        </div>
        
        {/* Hamburger Button */}
        <div className="burger md:hidden">
          <button onClick={toggleMenu} className="text-2xl font-bold text-gray-800 focus:outline-none">
            {/* Agar menu khula hai to 'X' icon dikhayein, nahi to 'hamburger' icon dikhayein */}
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>
      
      {/* Mobile Menu (conditionally rendered) */}
      <div className={`transition-all duration-300 ease-in-out md:hidden bg-white ${isOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center space-y-4">
            <a href="#home" onClick={toggleMenu} className="text-purple-600 text-xl hover:text-white font-medium hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">Home</a>
            <a href="#portfolio" onClick={toggleMenu} className="text-purple-600 text-xl hover:text-white font-medium hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">Portfolio</a>
            <a href="#about" onClick={toggleMenu} className="text-purple-600 text-xl hover:text-white font-medium hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">About Me</a>
            <a href="#contact" onClick={toggleMenu} className="text-purple-600 text-xl hover:text-white font-medium hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">Contact</a>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;