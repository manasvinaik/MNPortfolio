import React from "react";
import styles from "./bubble.module.css";

const Example = () => {
  return (
    <div className="grid place-content-center bg-black">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-center text-7xl font-thin text-indigo-300">
      {"aspiring webdeveloper".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Example;