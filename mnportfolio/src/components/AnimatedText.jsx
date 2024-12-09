import React from "react";
import { motion } from "framer-motion";

const eases = {
  power3Out: [0.215, 0.61, 0.355, 1.0],
};

const AnimatedText = ({
  text,
  duration = 0.8,
  delay = 0,
  stagger = 0.1,
  offset = "110px",
}) => {
  const initial = { top: `-${offset}`, opacity: 0 };
  const animate = { top: "0px", opacity: 1 };

  return (
    <h1>
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`} // Ensure unique keys
          initial={initial}
          animate={animate}
          transition={{ duration, ease: eases.power3Out, delay: delay + stagger * index }}
          style={{ display: "inline-block", position: "relative" }} // Ensure spans behave as expected
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

export default AnimatedText;
