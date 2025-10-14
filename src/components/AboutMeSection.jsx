import React from 'react';

const AboutMeSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Left Side: Image */}
        <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
                src="https://placehold.co/500x500/1e1b4b/FFFFFF?text=About+Me" 
                alt="About Segunfunmi" 
                className="rounded-lg w-full max-w-md mx-auto" 
            />
        </div>
        {/* Right Side: Text Content */}
        <div className="md:w-1/2 md:pl-12 text-center md:text-left">
            <h3 className="text-gray-500 font-medium">About</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 my-4">About Me</h2>
            <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a Seltus at, mattis Seltus. Sed aliquam Seltus vitae Seltus, a Seltus a Seltus.
            </p>
            <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a Seltus at, mattis Seltus.
            </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;