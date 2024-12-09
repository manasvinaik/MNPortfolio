import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import CustomCursor from "./components/CustomCursor";
import Home from "./components/Home";
import LogoCarousel from "./components/LogoCarousel";
import Navbar from "./components/Navbar";
import { Works } from "./components/Works";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to track if the site is still loading

  return (
    <>
      {isLoading ? (
        <Loader setIsLoading={setIsLoading} />
      ) : (
        <div>
          <CustomCursor />
          <Navbar />
          <Home />
          <About />
          <LogoCarousel />
          <Works />
        </div>
      )}
    </>
  );
}

export default App;
