// src/About.jsx
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const descriptionText = "I love developing and crafting solutions that balance creativity and practicality."; // Description text
  const [scrollY, setScrollY] = useState(0);
  const aboutRef = useRef(null); // Ref to track the About component's position

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate the reveal based on scroll position
  const getRevealStyle = (index) => {
    const componentTop = aboutRef.current?.offsetTop || 0;
    const componentHeight = aboutRef.current?.offsetHeight || 0;
    const windowHeight = window.innerHeight;

    // 50% point of the component
    const scrollThreshold = componentTop + componentHeight * 0.4;

    // Calculate the scrollY difference between the current position and the 50% point of the component
    const revealFraction = Math.min(Math.max((scrollY + windowHeight - scrollThreshold) / (windowHeight * 0.5), 0), 1);
    
    return {
      opacity: revealFraction,
      filter: `blur(${(1 - revealFraction) * 10}px)`,
      transition: { duration: 0.3 },
    };
  };

  return (
    <div ref={aboutRef} className="h-[100vh] bg-black p-4">
      <div className="max-w-5xl mx-auto">
        {/* About Title */}
        <h2 className="text-3xl font-bold text-white mb-4">About</h2>
        <div className="w-full border-b-2 border-indigo-300 mb-4" />

        {/* Description Text */}
        <div className="w-[50%] text-6xl text-white">
          {descriptionText.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={getRevealStyle(index)}
              style={{ whiteSpace: 'pre-wrap' }} // Ensures spaces are preserved
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
