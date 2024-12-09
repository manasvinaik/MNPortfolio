// src/BlurText.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BlurText = ({ text }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate the reveal based on scroll position
  const getRevealStyle = (index) => {
    const scrollThreshold = 50; // Adjust this value to control when letters reveal
    const revealFraction = Math.min(Math.max((scrollY - index * 50) / scrollThreshold, 0), 1); // Adjust the multiplier to change the effect
    return {
      opacity: revealFraction,
      filter: `blur(${(1 - revealFraction) * 10}px)`,
      transition: { duration: 0.3 },
    };
  };

  return (
    <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <div id="about-text" style={{ display: 'flex', fontSize: '3rem', color: 'black', alignItems: 'center' }}>
        {text.split('').map((char, index) => (
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
  );
};

export default BlurText;
