import React from 'react';
import { motion } from 'framer-motion';
import Example from './BubbleText';

const Home = () => {
  const name = "Manasvi";
  const surname = "Naik";

  const createLetterAnimation = (text) => {
    return text.split("").map((letter, index) => (
      <motion.span
        key={index}
        initial={{ y: 50, opacity: 0 }} // Start from below and invisible
        animate={{ y: 0, opacity: 1 }} // Animate to original position and visible
        transition={{ duration: 0.9, delay: index === 0 ? 0.1 : index * 0.1 }} // Delay first letter more
      >
        {letter}
      </motion.span>
    ));
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-9xl font-bold">
        {createLetterAnimation(name)}
      </h1>
      <h2 className="text-8xl font-bold">
        {createLetterAnimation(surname)}
      </h2>
      <Example />
    </div>
  );
};

export default Home;
