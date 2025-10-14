import React from 'react';

// Reusable ProjectCard component
const ProjectCard = ({ title, description, technologies, link, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
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
          View Project →
        </a>
      </div>
    </div>
  );
};

// Main Portfolio Section
const PortfolioSection = () => {
    const projects = [
      { title: "Ahuse", description: "A web design project for a modern furniture store.", technologies: "React, Tailwind CSS", link: "#", imageUrl: "https://placehold.co/600x400/e9d5ff/1e1b4b?text=Ahuse" },
      { title: "App Dashboard", description: "A data visualization dashboard for a SaaS product.", technologies: "React, D3.js, Node.js", link: "#", imageUrl: "https://placehold.co/600x400/e9d5ff/1e1b4b?text=App+Dashboard" },
      { title: "Easy Rent", description: "A mobile-first platform for rental services.", technologies: "React Native, Firebase", link: "#", imageUrl: "https://placehold.co/600x400/e9d5ff/1e1b4b?text=Easy+Rent" },
    ];

    return (
        <section id="portfolio" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-gray-500 font-medium">Recent Projects</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">My Portfolio</h2>
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
