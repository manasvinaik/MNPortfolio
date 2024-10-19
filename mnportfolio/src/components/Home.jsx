import React from 'react';
import { motion } from 'framer-motion';
import Example from './BubbleText';
import { Vortex } from './Vortex'; // Import the Vortex component

const Home = () => {
  const name = "Manasvi";
  const surname = "Naik";

  const createLetterAnimation = (text) => {
    return text.split("").map((letter, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }} // Start invisible
        animate={{ opacity: 1 }} // Animate to visible
        transition={{
          duration: 0.25,
          delay: index / 10 // Delay for each letter
        }}
      >
        {letter}
      </motion.span>
    ));
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Vortex background component */}
      
      
      {/* Ensure z-index is higher for the text and other components */}
      <h1 className="text-9xl font-bold z-20">
        {createLetterAnimation(name)}
      </h1>
      <h2 className="text-8xl font-bold z-20">
        {createLetterAnimation(surname)}
      </h2>
      
      {/* Example component with z-index */}
      <div className="z-20">
        <Example />
      </div>
    </div>
  );
};

export default Home;
