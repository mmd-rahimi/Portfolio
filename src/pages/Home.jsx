import React from "react";
import Hero from "../Components/Hero";
import Iconbar from "../Components/Iconbar";
import About from "../Components/About";
import Contact from "../Components/Contact";

function Home() {
  return (
    <div className="scroll-smooth">
      <div className="">
        <Hero />
        <Iconbar />
        <div className="pt-12 pb-6">
        <About />
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
