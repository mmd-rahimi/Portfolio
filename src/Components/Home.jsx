import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Iconbar from "./Iconbar";
import Test from "./test";

function Home() {
  return (
    <div className="scroll-smooth">
      <div className="bg-black">
      <Navbar />
        <Hero />
        <Iconbar />
        <Test />
      </div>
    </div>
  );
}

export default Home;
