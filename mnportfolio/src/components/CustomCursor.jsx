// src/components/CustomCursor.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    
    const handleLinkHover = (e) => {
      if (e.target.tagName === "A") {
        setIsLinkHovered(true);
      } else {
        setIsLinkHovered(false);
      }
    };
    document.body.addEventListener("mouseover", handleLinkHover);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseover", handleLinkHover);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isLinkHovered && (
        <motion.div
          className="custom-cursor"
          style={{
            position: "fixed",
            top: cursorPosition.y + 5,
            left: cursorPosition.x + 5,
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            border: "2px solid #ffffff",
            backgroundColor: "transparent", 
            pointerEvents: "none",
            zIndex: 1000,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { type: "spring", stiffness: 500 } }}
          exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
        />
      )}
    </AnimatePresence>
  );
};

export default CustomCursor;
