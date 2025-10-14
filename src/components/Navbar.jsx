import React from 'react'
import { TbHexagonLetterSFilled } from "react-icons/tb";

const Navbar = () => {
  return (
   
 
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
      
      <div className="container mx-auto px-6 py-4 
                      flex flex-col md:flex-row 
                      items-center justify-between 
                      space-y-4 md:space-y-0">

        {/* Item 1: Logo */}
        <div className="owner flex items-center space-x-4">
        <TbHexagonLetterSFilled className="text-6xl text-purple-600 inline-block hover:scale-125 duration-300" />
        <div className="text-2xl font-bold text-gray-800">
          <span className="text-purple-600 inline-block hover:scale-125 duration-300">Sarthak-Verse</span>
        </div>
        </div>
        <div className='links flex flex-col md:flex-row  md:space-x-3.5 '>
        {/* Item 2: Home Link */}
        <a href="#home" className="text-purple-600 text-2xl hover:text-amber-50 md:hover:text-white font-bold hover:font-bold  hover:scale-125 duration-300 hover:bg-purple-500 p-1 px-2 rounded-lg ">
          Home
        </a>

        {/* Item 3: Portfolio Link */}
        <a href="#portfolio" className="text-purple-600 text-2xl  hover:text-white font-bold hover:font-bold  hover:scale-110 duration-300 hover:bg-purple-500 p-1 px-2 rounded-lg">
          Portfolio
        </a>

        {/* Item 4: About Me Link */}
        <a href="#about" className="text-purple-600 text-2xl  hover:text-white font-bold hover:font-bold  hover:scale-110 duration-300 hover:bg-purple-500 p-1 px-2 rounded-lg">
          About Me
        </a>

        {/* Item 5: Contact Link */}
        <a href="#contact" className="text-purple-600 text-2xl  hover:text-white font-bold hover:font-bold  hover:scale-110 duration-300 hover:bg-purple-500 p-1 px-2 rounded-lg">
          Contact
        </a>
        </div>
        {/* Item 6: Button */}
        <button className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 font-medium inline-block hover:scale-110 duration-300">
          Let's Talk
        </button>
        
      </div>
    </nav>
  );
};




export default Navbar;