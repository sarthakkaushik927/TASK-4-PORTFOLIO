import React from 'react';
import Music from "/music.png"
import TODO from "/TODO.png"
import CAROUSEL from "/CAROUSEL-REGISTRATION.png"
import { motion } from "motion/react";

// Reusable ProjectCard component
const ProjectCard = ({ title, description, technologies, link, imageUrl }) => {
  return (
    <motion.div whileTap={{scale:0.8}} transition={{duration:0}} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:border-2 hover:border-purple-500 hover:-translate-y-4 transition-transform duration-300 hover:shadow-2xl  ">
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Technologies:</strong> {technologies}
        </p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-purple-600 font-medium hover:underline"
        >
          <motion.button whileTap={{scale:0.8}} transition={{duration:0}} className="text-purple-600 font-medium hover:underline">
            View Project →
          </motion.button>
        </a>
      </div>
    </motion.div>
  );
};

// Main Portfolio Section
const PortfolioSection = () => {
    const projects = [
      { title: "MUSIC APP", description: "A web design project for a modern Music layout.", technologies: "HTML, CSS, JavaScript", link: "https://task-1-music-player.vercel.app/", imageUrl: Music },
      { title: "TODO LIST", description: "A Web app to save your daily tasks.", technologies: "HTML, CSS, JavaScript", link: "https://task-2-loginpage-and-carousel.vercel.app/", imageUrl: TODO },
      { title: "CAROUSEL", description: "A Web app integrated with Carousel and registration form.", technologies: "React , Tailwind CSS", link: "https://todo-list927.netlify.app/", imageUrl: CAROUSEL },
    ];

    return (
        <section id="portfolio" className="py-20 bg-purple-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 flex flex-col items-center justify-center">
              <h3 className="inline-block text bg-purple-500 transition duration-300 hover:scale-110 text-lg font-medium hover:bg-gradient-to-bl from-purple-700 to-pink-500 bg-clip-text text-transparent">Recent Projects</h3>
              <h2 className="inline-block text-3xl md:text-4xl font-bold bg-gradient-to-bl from-purple-700 to-pink-500 bg-clip-text text-transparent hover:scale-110 duration-300">My Portfolio</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>
    );
};

export default PortfolioSection;
