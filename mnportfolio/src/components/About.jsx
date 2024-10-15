import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const text = "I am a CS Student at KJSCE and an aspiring web developer.";

  // Split the text into individual letters
  const letters = text.split("");

  return (
    <section className="bg-black p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        {/* About Me Heading */}
        <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
        <div className="w-full border-b-2 border-indigo-300 mb-4" />

        {/* Revealing Text */}
        <div className="text-6xl text-white text-left">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: index * 0.05 }} // Delay each letter
              viewport={{ once: false, amount: 0.5 }} // Trigger when 50% of the element is in view
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
