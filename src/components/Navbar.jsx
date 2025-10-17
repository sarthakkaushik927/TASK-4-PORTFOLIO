import React, { useState } from 'react'; 
import { FaReact, FaBars, FaTimes } from "react-icons/fa"; 
import { TbHexagonLetterSFilled } from "react-icons/tb"
import { Link } from 'react-scroll';
import { motion } from "motion/react"




const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        
        <div className="owner flex items-center space-x-4">
          <TbHexagonLetterSFilled className=" animate-spin text-6xl text-white bg-gradient-to-bl from-purple-700 to-pink-500 rounded-lg p-2 inline-block hover:scale-110 duration-300 hover:rotate-180" />
          <div className="text-2xl font-bold text-gray-800">
            <span className="inline-block hover:scale-110 duration-300 bg-gradient-to-bl from-purple-700 to-pink-500 bg-clip-text text-transparent">Sarthak-Verse</span>
          </div>
        </div>
        
        
        <div className='hidden links md:flex md:flex-row md:space-x-3.5'>
          <Link to="home" smooth={true} duration={500} >
                  <motion.button whileTap={{scale:0.8}} transition={{duration:0}} className=" text-purple-600 text-xl hover:text-amber-50 md:hover:text-white font-medium hover:font-bold hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">
                    Home
                  </motion.button></Link>
          <motion.Link whileTap={{scale:0.8}} transition={{duration:0}} to="home" smooth={true} duration={500} className=" text-purple-600 text-xl hover:text-amber-50 md:hover:text-white font-medium hover:font-bold hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">Home</motion.Link>
          <Link to="portfolio" smooth={true} duration={500} >
                  <motion.button whileTap={{scale:0.8}} transition={{duration:0}} className=" text-purple-600 text-xl hover:text-amber-50 md:hover:text-white font-medium hover:font-bold hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">
                    Portfolio
                  </motion.button></Link>
          <motion.Link whileTap={{scale:0.8}} transition={{duration:0}} to="home" smooth={true} duration={500} className=" text-purple-600 text-xl hover:text-amber-50 md:hover:text-white font-medium hover:font-bold hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">Home</motion.Link>
          <Link to="about" smooth={true} duration={500} >
                  <motion.button whileTap={{scale:0.8}} transition={{duration:0}} className=" text-purple-600 text-xl hover:text-amber-50 md:hover:text-white font-medium hover:font-bold hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">
                    About Me
                  </motion.button></Link>
          <motion.Link whileTap={{scale:0.8}} transition={{duration:0}} to="home" smooth={true} duration={500} className=" text-purple-600 text-xl hover:text-amber-50 md:hover:text-white font-medium hover:font-bold hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">Home</motion.Link>
          <Link to="contact" smooth={true} duration={500} >
                  <motion.button whileTap={{scale:0.8}} transition={{duration:0}} className=" text-purple-600 text-xl hover:text-amber-50 md:hover:text-white font-medium hover:font-bold hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">
                    Contact
                  </motion.button></Link>
          <motion.Link whileTap={{scale:0.8}} transition={{duration:0}} to="home" smooth={true} duration={500} className=" text-purple-600 text-xl hover:text-amber-50 md:hover:text-white font-medium hover:font-bold hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">Home</motion.Link>
          
        </div>
        
        
        <div className="burger md:hidden">
          <button onClick={toggleMenu} className="text-2xl font-bold text-gray-800 focus:outline-none">
            
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>
      
     
      <div className={`transition-all duration-300 ease-in-out md:hidden bg-white ${isOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center space-y-4">
            <Link to="home" smooth={true} duration={500} >
                  <motion.button onClick={toggleMenu} whileTap={{scale:0.8}} transition={{duration:0}} className=" text-purple-600 text-xl hover:text-amber-50 md:hover:text-white font-medium hover:font-bold hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">
                    Home
                  </motion.button></Link>
          <motion.Link whileTap={{scale:0.8}} transition={{duration:0}} to="home" smooth={true} duration={500} className=" text-purple-600 text-xl hover:text-amber-50 md:hover:text-white font-medium hover:font-bold hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">Home</motion.Link>
          <Link to="portfolio" smooth={true} duration={500} >
                  <motion.button onClick={toggleMenu} whileTap={{scale:0.8}} transition={{duration:0}} className=" text-purple-600 text-xl hover:text-amber-50 md:hover:text-white font-medium hover:font-bold hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">
                    Portfolio
                  </motion.button></Link>
          <motion.Link whileTap={{scale:0.8}} transition={{duration:0}} to="home" smooth={true} duration={500} className=" text-purple-600 text-xl hover:text-amber-50 md:hover:text-white font-medium hover:font-bold hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">Home</motion.Link>
          <Link to="about" smooth={true} duration={500} >
                  <motion.button onClick={toggleMenu} whileTap={{scale:0.8}} transition={{duration:0}} className=" text-purple-600 text-xl hover:text-amber-50 md:hover:text-white font-medium hover:font-bold hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">
                    About Me
                  </motion.button></Link>
          <motion.Link whileTap={{scale:0.8}} transition={{duration:0}} to="home" smooth={true} duration={500} className=" text-purple-600 text-xl hover:text-amber-50 md:hover:text-white font-medium hover:font-bold hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">Home</motion.Link>
          <Link to="contact" smooth={true} duration={500} >
                  <motion.button onClick={toggleMenu} whileTap={{scale:0.8}} transition={{duration:0}} className=" text-purple-600 text-xl hover:text-amber-50 md:hover:text-white font-medium hover:font-bold hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">
                    Contact
                  </motion.button></Link>
          <motion.Link whileTap={{scale:0.8}} transition={{duration:0}} to="home" smooth={true} duration={500} className=" text-purple-600 text-xl hover:text-amber-50 md:hover:text-white font-medium hover:font-bold hover:scale-105 duration-300 hover:bg-gradient-to-bl from-purple-700 to-pink-500 p-1 px-2 rounded-lg">Home</motion.Link>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;