import React from 'react';
import { FaReact, FaNodeJs, FaPaintBrush, FaDraftingCompass } from 'react-icons/fa';

const skills = [
  // I have assigned the icons to the correct skills
  { title: "Strategy & Direction", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", icon: <FaDraftingCompass className="text-4xl text-purple-600" />, img:"https://sp.yimg.com/ib/th/id/OIP.l9QWk7PsqjrZeipRHf0wwgHaJ4?pid=Api&w=148&h=148&c=7&dpr=2&rs=1" },
  { title: "Branding & Logo", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", icon: <FaPaintBrush className="text-4xl text-purple-600" />, img:"https://sp.yimg.com/ib/th/id/OIP.jGHnIsMnheNz_z8quCshTwHaE8?pid=Api&w=148&h=148&c=7&dpr=2&rs=1"  },
  { title: "UI & UX Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", icon: <FaReact className="text-4xl text-purple-600" />, img:"https://sp.yimg.com/ib/th/id/OIP.wUls7DK5Xe6qm3SamyPcJgHaE8?pid=Api&w=148&h=148&c=7&dpr=2&rs=1" },
  // I added the missing icon for the last item
  { title: "Webflow Development", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", icon: <FaNodeJs className="text-4xl text-purple-600" />, img:"https://sp.yimg.com/ib/th/id/OIP.ch892-NBqTfO6OvtZaCEuwHaE8?pid=Api&w=148&h=148&c=7&dpr=2&rs=1"},
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-purple-100 ">
      <div className="container mx-auto px-6 ">
        
          <div className="text-center mb-12 flex flex-col items-center justify-center">
          <h3 className=" transition duration-300 hover:scale-x-110 text-lg font-medium bg-purple-500 hover:bg-gradient-to-bl from-purple-700 to-pink-500 bg-clip-text text-transparent">My Skills</h3>
          <h2 className=" transition duration-300 hover:scale-x-110 bg-gradient-to-bl from-purple-700 to-pink-500 bg-clip-text text-transparent text-3xl md:text-4xl font-bold ">My Expertise</h2>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  ">
          {skills.map((skill, index) => (
            <div key={index} className="ane bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center hover:scale-105 hover:duration-300 ">


              <div className="mb-4"><img className='rounded-lg' src={`${skill.img}`} alt={skill.title} /></div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.title}</h3>
              <p className="text-gray-600 text-center">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;