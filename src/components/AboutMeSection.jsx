import React from 'react';
import Hero from '/Hero-removebg-preview.png'

const AboutMeSection = () => {
  return (
    <section id="about" className="py-20 bg-purple-100 min-h-[100vh] ">
      <div className='text-center flex flex-col '>
        
          <h2 className="hover:scale-x-110 inline-block  duration-300 bg-gradient-to-bl from-purple-700 to-pink-500 bg-clip-text text-transparent text-3xl md:text-4xl font-bold my-1">About Me</h2>
      </div>
      
      <div className="container mx-auto flex flex-col  md:flex md:flex-row md:width-full lg:flex lg:flex-row items-center justify-between px-6 h-[60vh]">
        
        

        <div className="md:w-1/2  mb-16 md:mb-0  mx-auto flex justify-center ">
         
          <div className=" md:w-130 md:h-[349px]  bg-purple-300 rounded-4xl translate-y-20 shadow-2xl hover:scale-105 hover:duration-300 transition-all ">
          
                  <img
                      src={Hero}
                      className=" bg-transparent rounded-lg w-full md:w-120 md:max-w-md mx-auto md:h-120 md:translate-y-[-130px] hover:translate-y-2] hover:duration-300 transition-all " 
                  />
                  
                </div>
          
        </div>
        
        <div className="md:w-1/2 md:pl-12 text-center md:text-center flex flex-col justify-center ">
         <h2 className="hover:scale-x-110 inline-block font-medium bg-purple-500 hover:bg-gradient-to-bl from-purple-700 to-pink-500 bg-clip-text text-transparent  duration-300 my-4 text-2xl">About</h2>
          
        
        
        <p className="text-gray-600 mb-4 hover:scale-105 duration-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a Seltus at, mattis Seltus. Sed aliquam Seltus vitae Seltus, a Seltus a Seltus.
        </p>
        <p className="text-gray-600 hover:scale-105 duration-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a Seltus at, mattis Seltus.
        </p>
      </div>
    </div>
    
    </section >
  );
};

export default AboutMeSection;