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
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-#161618 text-white overflow-hidden">
      <motion.h1 
        className="text-8xl sm:text-9xl md:text-[11rem] lg:text-[12rem] xl:text-[10rem] z-20" // Much larger text sizes
        style={{ fontFamily: 'HenriDidot, serif' }} // Applying HenriDidot font
        initial="hidden" 
        animate="visible" 
        variants={slideIn} 
        transition={{ duration: 0.5, ease: 'easeOut' }} 
      >
        {name}
      </motion.h1>
      <motion.h2 
        className="text-7xl sm:text-8xl md:text-[10rem] lg:text-[11rem] xl:text-[9rem] z-20" // Much larger text sizes
        style={{ fontFamily: 'HenriDidot, serif' }} // Applying HenriDidot font
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
