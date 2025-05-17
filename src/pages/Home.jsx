import React from "react";
import Hero from "../Components/Hero";
import Iconbar from "../Components/Iconbar";
import Test from "../Components/test";

function Home() {
  return (
    <div className="scroll-smooth">
      <div className="bg-black">
        <Hero />
        <Iconbar />
        <Test />
      </div>
    </div>
  );
}

export default Home;
