import React from 'react'
import { Link } from 'react-scroll';
import { motion } from "motion/react"



import Hero from '/Hero-removebg-preview.png'

const HeroSection = () => {
  return (
    <section id="home" className="bg-purple-100 container mx-auto flex flex-col md:flex-row md:justify gap-12 py-20 px-6 min-h-[75vh] min-w-full">
      
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 ">
        <p className="inline-block text-gray-500 font-bold  duration-300 hover:scale-x-110 hover:scale-y-100 ">Hey, I am SARTHAK</p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 my-4 leading-tight duration-300 hover:scale-x-105 hover:scale-y-100 ">
          I create <span className="bg-gradient-to-bl from-purple-700 to-pink-500 bg-clip-text text-transparent ">product design</span> and brand experience
        </h1>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 font-bold duration-300 hover:scale-x-110 hover:scale-y-100">
          I am a web developer specializing in React.js and UI design.
        </p>
        <Link to="contact" smooth={true} duration={500} >
        <motion.button whileTap={{scale:0.8}} transition={{duration:0}} className="bg-gradient-to-bl from-purple-700 to-pink-500 text-white py-3 px-8 rounded-lg font-medium hover:bg-purple-700 transition duration-300 hover:scale-110 ">
          Get In Touch
        </motion.button></Link>
      </div>


      <div className=" md:w-130 md:h-[349px] md:overflow-y-visible bg-purple-300 rounded-4xl  translate-y-20 shadow-2xl hover:scale-105 hover:duration-300 transition-all w-full ">

        <img
            src={Hero}
            className="bg-transparent rounded-lg w-full  md:w-120 md:max-w-md mx-auto  md:translate-y-[-100px]  hover:duration-300 transition-all " 
        />
        
      </div>
    </section>
  );
};

export default HeroSection;
