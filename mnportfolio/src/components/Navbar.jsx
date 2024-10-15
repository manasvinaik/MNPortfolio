// components/Navbar.jsx
import React, { useEffect, useState } from 'react';

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

  return (
    <nav className="flex items-center justify-between p-2 bg-black text-white">
      <div className="text-lg">M.Naik</div>
      <div className="text-lg text-indigo-300">portfolio</div>
      <div className="text-lg">{time}</div>
    </nav>
  );
};

export default Navbar;
