import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Loader = ({ setIsLoading }) => {
  const [progress, setProgress] = useState(0);
  const [showSwoosh, setShowSwoosh] = useState(false); // To control the swoosh animation

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowSwoosh(true), 500); // Delay to hide "100%" and start swoosh
          setTimeout(() => setIsLoading(false), 1500); // Delay to remove loader completely
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust the speed of the counter here

    return () => clearInterval(interval);
  }, [setIsLoading]);

  return (
    <motion.div
      className="loader"
      style={{
        backgroundColor: "#000", // Matches your site theme
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {/* Counter */}
      {!showSwoosh && (
        <motion.h1
          style={{
            fontFamily: "HenriDidot, serif", // Apply the HenriDidot font here
            color: "#a8bcfc",
            fontSize: "5rem", // Bigger font size for larger screens
            textAlign: "center",
            margin: 0,
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: progress === 100 ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          {progress}%
        </motion.h1>
      )}

      {/* Swoosh animation */}
      {showSwoosh && (
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to right, #000, #a8bcfc)",
            zIndex: 1000,
          }}
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      )}
    </motion.div>
  );
};

export default Loader;
