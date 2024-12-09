import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.3; // Duration of each flip
const STAGGER = 0.05; // Stagger amount for each letter

const StaggeredText = ({ text }) => {
  return (
    <div className="flex flex-col items-center">
      {text.split(" ").map((word, index) => (
        <div key={index} className="flex">
          {word.split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: 0, opacity: 1 }}
              whileHover={{
                y: -20, // Move the letter up slightly
                opacity: 0.7, // Change opacity for a fading effect
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i, // Stagger animation delay
              }}
              className="inline-block text-8xl font-bold" // Adjust font size as needed
            >
              {letter}
            </motion.span>
          ))}
          {/* Add space between words */}
          {index < text.split(" ").length - 1 && (
            <span className="text-8xl font-bold"> </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default StaggeredText;
