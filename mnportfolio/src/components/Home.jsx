import React from 'react';
import { motion } from 'framer-motion';
import Example from './BubbleText';

const Home = () => {
  const name = "Manasvi";
  const surname = "Naik";

  // Animation variants for sliding in from the bottom
  const slideIn = {
    hidden: { opacity: 0, y: 20 }, // Start slightly below and invisible
    visible: { opacity: 1, y: 0 }, // End at the original position and fully visible
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      <motion.h1 
        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold z-20" // Responsive font sizes
        initial="hidden" 
        animate="visible" 
        variants={slideIn} 
        transition={{ duration: 0.5, ease: 'easeOut' }} 
      >
        {name}
      </motion.h1>
      <motion.h2 
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold z-20" // Responsive font sizes
        initial="hidden" 
        animate="visible" 
        variants={slideIn} 
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {surname}
      </motion.h2>
      <div className="z-20 mt-4"> {/* Added margin for spacing on mobile */}
        <Example />
      </div>
    </div>
  );
};

export default Home;
