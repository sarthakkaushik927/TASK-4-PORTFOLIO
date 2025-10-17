import React, { useState, useEffect } from 'react';
import { motion } from "motion/react";

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);



const ProjectCard = ({ title, description, technologies, link, imageUrl }) => {
  return (
    <motion.div whileTap={{scale:0.8}} transition={{duration:0}}
      className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col mx-auto transition-transform duration-300 hover:-translate-y-2"
      style={{ minHeight: '450px' }}
    >
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Technologies:</strong> {technologies}
        </p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-purple-600 font-medium hover:underline mt-auto"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  );
};


const PortfolioSection = () => {
    const projects = [
      { title: "MUSIC APP", description: "A web design project for a modern Music layout.", technologies: "HTML, CSS, JavaScript", link: "https://task-1-music-player.vercel.app/", imageUrl: "/music.png" },
      { title: "TODO LIST", description: "A Web app to save your daily tasks.", technologies: "HTML, CSS, JavaScript", link: "https://todo-list927.netlify.app/", imageUrl: "/TODO.png" },
      { title: "CAROUSEL", description: "A Web app with a Carousel and registration form.", technologies: "React, Tailwind CSS", link: "https://task-2-loginpage-and-carousel.vercel.app/", imageUrl: "/CAROUSEL-REGISTRATION.png" },
      { title: "PROJECT FOUR", description: "Another awesome project.", technologies: "Next.js", link: "#", imageUrl: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=Project+4" },
      { title: "PROJECT FIVE", description: "The fifth amazing project.", technologies: "Vue.js", link: "#", imageUrl: "https://placehold.co/600x400/6D28D9/FFFFFF?text=Project+5" },
      { title: "PROJECT SIX", description: "Number six is the best one.", technologies: "Svelte", link: "#", imageUrl: "https://placehold.co/600x400/4C1D95/FFFFFF?text=Project+6" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) { 
                setCardsToShow(3);
            } else if (window.innerWidth >= 768) { 
                setCardsToShow(2);
            } else { 
                setCardsToShow(1);
            }
        };
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); // Cleanup
    }, []);
    
   
    useEffect(() => {
        if (currentIndex > projects.length - cardsToShow) {
            const newIndex = Math.max(0, projects.length - cardsToShow);
            setCurrentIndex(newIndex);
        }
    }, [cardsToShow, currentIndex, projects.length]);


    const handleNext = () => {
        if (currentIndex < projects.length - cardsToShow) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    return (
        <section id="portfolio" className="py-20 bg-purple-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-lg font-medium text-purple-600">Recent Projects</h3>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-bl from-purple-700 to-pink-500 bg-clip-text text-transparent mt-2">My Portfolio</h2>
            </div>
            
            <div className="relative max-w-sm md:max-w-4xl lg:max-w-6xl mx-auto">
              <div className="overflow-hidden">
                <div
                  className="flex"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                    transition: 'transform 0.5s ease-in-out',
                  }}
                >
                  {projects.map((project, index) => (
                    <div 
                      key={index} 
                      className="flex-none p-4"
                      style={{ width: `${100 / cardsToShow}%` }}
                    >
                      <ProjectCard {...project} />
                    </div>
                  ))}
                </div>
              </div>

              
              <div>
                <motion.button  whileHover={{scale:1.2,py:0}} whileTap={{scale:0.8}} transition={{duration:0}}
                  onClick={handlePrev} 
                  disabled={currentIndex === 0}
                  className=" absolute md:top-1/2 -bottom-20 left-0 md:-left-11 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gradient-to-bl from-purple-700 to-pink-500 transition  z-10 text-purple-600 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeftIcon />
                </motion.button>
                <motion.button  whileHover={{scale:1.2 ,py:0}} whileTap={{scale:0.8}} transition={{duration:0}}
                  onClick={handleNext}
                  disabled={currentIndex >= projects.length - cardsToShow}
                  className="absolute md:top-1/2 -bottom-20 right-0 md:-right-11 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gradient-to-bl from-purple-700 to-pink-500 transition z-10 text-purple-600 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRightIcon />
                </motion.button>
              </div>
            </div>

          </div>
        </section>
    );
};

export default PortfolioSection;