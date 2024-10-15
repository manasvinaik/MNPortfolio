import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const text = "I'm Manasvi, a B. Tech Computer Engineering student with a passion for both front-end development and graphic design. I specialize in crafting visually stunning and functional web experiences, always prioritizing user experience and meticulous attention to detail. As a curious individual, I thrive on expanding my skill set and exploring new interests, continually seeking to enhance my expertise.";
  const letters = text.split("");

  return (
    <section className="bg-black p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
        <div className="w-full border-b-2 border-indigo-300 mb-4" />

        <div className="text-2xl text-white text-left">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.3, delay: index * 0.03 }} 
              viewport={{ once: false, amount: 0.3 }}
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