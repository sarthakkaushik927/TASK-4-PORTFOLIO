import React from 'react'
import Hero from '../assets/hero-removebg-preview.png' // Replace with your own image path

const HeroSection = () => {
  return (
    <section id="home" className="bg-purple-200 container mx-auto flex flex-col md:flex-row md:justify-center gap-12 py-20 px-6 min-h-screen">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h3 className="text-gray-500 font-medium">Hey, I am Segun</h3>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 my-4 leading-tight">
          I create <span className="text-purple-600">product design</span> and brand experience
        </h1>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
          I am a web developer specializing in React.js and UI design.
        </p>
        <button className="bg-purple-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-purple-700 transition duration-300">
          Get In Touch
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-120 h-full md:overflow-y-visible bg-purple-300 rounded-4xl">
        
        <img 
            src={Hero}
            className=" rounded-lg w-full max-w-md mx-auto" 
        />
      </div>
    </section>
  );
};

export default HeroSection;
