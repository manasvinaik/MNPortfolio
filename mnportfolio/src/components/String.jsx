import { motion } from 'framer-motion';

const String = () => {
  return (
    <motion.div
      className="w-full h-1 bg-indigo-300 mx-auto my-5"
      initial={{ scaleY: 1 }} // Initial scale
      whileHover={{
        scaleY: [1, 1.2, 1, 1.2, 1], // Scale up and down
        transition: { duration: 0.5, ease: "easeInOut" }
      }}
      style={{
        transformOrigin: 'center', // Keep the scaling around the center
      }}
    />
  );
};

export default String;
