// About.js
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Para from './Para';

const About = () => {
  const descriptionText = "I build and design solutions that balance both creativity and practicality* ,";
  
  const [scrollY, setScrollY] = useState(0);
  const aboutRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false); // Track if it's a mobile view

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getRevealStyle = (index) => {
    const componentTop = aboutRef.current?.offsetTop || 0;
    const componentHeight = aboutRef.current?.offsetHeight || 0;
    const windowHeight = window.innerHeight;

    const scrollThreshold = componentTop + componentHeight * 0.2;

    if (scrollY + windowHeight > scrollThreshold + index * 3) {
      return {
        opacity: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.3 },
      };
    }

    const revealFraction = Math.min(Math.max((scrollY + windowHeight - scrollThreshold - index * 30) / (windowHeight * 1), 0), 1);

    return {
      opacity: revealFraction,
      filter: `blur(${(1 - revealFraction) * 20}px)`,
      transition: { duration: 0.6 },
    };
  };

  return (
    <div ref={aboutRef} className="min-h-[150vh] bg-black p-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl text-white mb-4 text-left sm:text-left md:text-left">About</h2>
        <div className="w-full border-b-2 border-indigo-300 mb-4" />

        <div className={`text-white text-left ${isMobile ? 'text-4xl w-[75%]' : 'text-6xl w-[60%]'}`}>
          {descriptionText.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={getRevealStyle(index)}
              style={{ whiteSpace: 'pre-wrap' }}
            >
              {char}
            </motion.span>
          ))}
        </div>
        <div className="mt-16 mb-16"> {/* Adjust the margin as needed */}
          <Para scrollY={scrollY} aboutRef={aboutRef} />
        </div>
      </div>
    </div>
  );
};

export default About;
