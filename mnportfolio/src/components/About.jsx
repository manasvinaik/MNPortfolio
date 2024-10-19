// src/About.jsx
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const descriptionText = "I build and design solutions that balance both creativity and practicality* ,"; // Description text
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

    // Check if the scroll position is past the threshold for full reveal
    if (scrollY + windowHeight > scrollThreshold + index * 4) {
      return {
        opacity: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.3 },
      };
    }

    // Calculate the reveal fraction before reaching the full threshold
    const revealFraction = Math.min(Math.max((scrollY + windowHeight - scrollThreshold - index * 40) / (windowHeight * 0.7), 0), 1);
    
    return {
      opacity: revealFraction,
      filter: `blur(${(1 - revealFraction) * 20}px)`,
      transition: { duration: 0.3 },
    };
  };

  return (
    <div ref={aboutRef} className="h-[100vh] bg-black p-4">
      <div className="max-w-5xl mx-auto">
        {/* About Title */}
        <h2 className="text-2xl text-white mb-4">About</h2>
        <div className="w-full border-b-2 border-indigo-300 mb-4" />
        
        {/* Replace the horizontal line with the GuitarString component */}
        <String />

        {/* Description Text */}
        <div className="w-[60%] text-6xl text-white">
          {descriptionText.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: 'blur(20px)' }}
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
