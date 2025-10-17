import React from 'react';
// 1. Import `motion` from framer-motion
import { motion } from 'motion/react';

const AnimatedSection = ({ children }) => {
  return (
    // 2. Replace the `div` with a `motion.div`
    <motion.div
      // 3. Define the animation properties
      initial={{ opacity: 0, y: 50 }} // Starts invisible and 50px down
      whileInView={{ opacity: 1, y: 0 }} // Animates to fully visible and its original position
      transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
      viewport={{ once: true }} // Ensures the animation only happens once
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

