// Para.js
import React from 'react';
import { motion } from 'framer-motion';

const Para = ({ scrollY, aboutRef }) => {
  const dummyParagraph = "As you explore, you'll discover various projects and experiences that highlight my skills and interests. " +
"This is an overview of my journey in the tech and creative fields. \n\n" +
"I’m always eager to learn and grow, so every new project contributes to my development as a tech enthusiast. " +
"Feel free to dive into the details and see what I’ve been up to! \n\n" +
"Technologies I'm familiar with:";

  const getRevealStyle = (index) => {
    const componentTop = aboutRef.current?.offsetTop || 0;
    const componentHeight = aboutRef.current?.offsetHeight || 0;
    const windowHeight = window.innerHeight;

    const paraDivTop = componentTop + componentHeight;
    const paraDivThreshold = paraDivTop + 0.05 * windowHeight;

    // Calculate the reveal fraction based on scroll position
    const revealFraction = Math.min(Math.max((scrollY * 2 + windowHeight - paraDivThreshold - index * 2.5) / (windowHeight * 0.5), 0), 1); // Adjusted for faster reveal

    return {
      opacity: 0.4 + revealFraction * (1 - 0.1), // Start from 0.4 and go to 1
      transition: { duration: 0 }, // Reduced duration for quicker transition
    };
  };

  return (
    <div className="flex justify-center mt-8">
      <div className={`text-white text-center w-[60%] text-xl md:text-2xl text-justify`}>
        {dummyParagraph.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0.2 }} // Set initial opacity to 0.4
            animate={getRevealStyle(index)}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Para;
