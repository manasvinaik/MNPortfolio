// Para.js
import React from 'react';
import { motion } from 'framer-motion';

const Para = ({ scrollY, aboutRef }) => {
  const dummyParagraph = "This is a dummy paragraph meant to demonstrate the scrolling effect. " +
    "As you scroll down, you will see the text gradually become more visible. " +
    "This creates a nice transition that feels smooth and engaging. " +
    "It is important to ensure that the layout is responsive to different screen sizes. " +
    "You can adjust the styles as needed to fit your design preferences. " +
    "Enjoy scrolling through this content and observe how it appears.";

  const getRevealStyle = (index) => {
    const componentTop = aboutRef.current?.offsetTop || 0;
    const componentHeight = aboutRef.current?.offsetHeight || 0;
    const windowHeight = window.innerHeight;

    const paraDivTop = componentTop + componentHeight;
    const paraDivThreshold = paraDivTop + 0.05 * windowHeight;

    // Calculate the reveal fraction based on scroll position
    const revealFraction = Math.min(Math.max((scrollY*2 + windowHeight - paraDivThreshold - index * 2.5) / (windowHeight * 0.5), 0), 1); // Adjusted for faster reveal

    return {
      opacity: 0.4 + revealFraction * (1 - 0.4), // Start from 0.4 and go to 1
      transition: { duration: 0 }, // Reduced duration for quicker transition
    };
  };

  return (
    <div className="flex justify-center mt-8">
      <div className={`text-white text-center w-[50%] text-xl md:text-2xl`}> {/* Increased text size */}
        {dummyParagraph.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0.4 }} // Set initial opacity to 0.4
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
