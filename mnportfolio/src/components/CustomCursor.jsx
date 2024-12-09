import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const springX = useSpring(0, { stiffness: 300, damping: 30 });
  const springY = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX);
      springY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [springX, springY]);

  return (
    <>
      {/* Default arrow cursor (no custom styles here) */}
      <motion.div
        className="custom-cursor"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: springX,
          y: springY,
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          border: "2px solid #a8bcfc",
          backgroundColor: "transparent",
          pointerEvents: "none",
          zIndex: 1000,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

export default CustomCursor;
