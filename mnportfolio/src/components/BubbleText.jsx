import React from "react";
import { motion } from "framer-motion";
import styles from "./bubble.module.css";

const Example = () => {
  return (
    <div className="grid place-content-center">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  // Animation variants for staggered effect
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Adjust this value to control the delay between each letter
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h2
      className="text-center text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-thin text-indigo-300"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {"frontend developer".split("").map((char, index) => (
        <motion.span
          className={styles.hoverText}
          key={index}
          variants={letterVariants}
          transition={{ duration: 0.3, ease: "easeOut" }} // Adjust duration as needed
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default Example;
