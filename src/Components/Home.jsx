import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="">
      <div className="bg-black">
      <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default Home;
