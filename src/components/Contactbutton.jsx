import React from 'react'
import { motion } from "motion/react";
import { Link } from 'react-scroll';

const Contactbutton = () => {
  return (
    <div>
        <Link to="contact" smooth={true} duration={500}>
          <motion.button whileTap={{scale:0.8}} transition={{duration:0}} className="fixed bottom-4 right-4  bg-gradient-to-bl from-purple-700 to-pink-500  text-white py-2 px-6 rounded-4xl  font-bold inline-block hover:scale-115 duration-300">
            Let's Talk
          </motion.button>
        </Link>
    </div>
  )
}
 

export default Contactbutton