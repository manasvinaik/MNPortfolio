// components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const Navbar = () => {
  const [time, setTime] = useState('');

  const updateTime = () => {
    const now = new Date();
    setTime(now.toLocaleTimeString());
  };

  useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    updateTime(); // Set initial time immediately
    return () => clearInterval(timer); // Clean up on unmount
  }, []);

  // Animation variants
  const slideIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="flex items-center justify-between p-2 bg-black text-white">
      <motion.div 
        className="flex items-center text-lg" 
        initial="hidden" 
        animate="visible" 
        variants={slideIn} 
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        Mumbai, India
      </motion.div>
      <motion.div 
        className="text-lg text-indigo-300" 
        initial="hidden" 
        animate="visible" 
        variants={slideIn} 
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }} // Optional delay
      >
        portfolio
      </motion.div>
      <motion.div 
        className="text-lg" 
        initial="hidden" 
        animate="visible" 
        variants={slideIn} 
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }} // Optional delay
      >
        {time}
      </motion.div>
    </nav>
  );
};

export default Navbar;
