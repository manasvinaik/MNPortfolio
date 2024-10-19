import React from "react";
import { motion } from "framer-motion"; // Import motion
import styles from "./bubble.module.css";

const Example = () => {
  return (
    <div className="grid place-content-center">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  // Animation variants for appearing from the top
  const appearFromTop = {
    hidden: { opacity: 0, y: -20 }, // Start slightly above and invisible
    visible: { opacity: 1, y: 0 }, // End at the original position and fully visible
  };

  return (
    <motion.h2
      className="text-center text-7xl font-thin text-indigo-300"
      initial="hidden" // Set initial state to hidden
      animate="visible" // Animate to visible
      variants={appearFromTop} // Apply the variants
      transition={{ duration: 0.5, ease: "easeOut" }} // Adjust duration and easing as needed
    >
      {"aspiring webdeveloper".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </motion.h2>
  );
};

export default Example;
