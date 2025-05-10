import React from "react";
import "../styles/hero.css";

function Hero() {
  return (
    <div
      className="hero text-white
      w-full h-[45rem] py-16 px-6"
    >
      <div className="flex flex-col">
        <span className="font-semibold mb-6 text-5xl">Hi</span> <br />
        <h2 className="text-5xl text-center mb-6">
          <span className="font-normal">... </span>
          <span className="font-normal">I'm</span> MOHAMAD
        </h2>
        <br />
        <h3 className="text-5xl font-semibold text-right">Front-End</h3>
        <h3 className="text-5xl font-semibold text-right">Developer</h3>
      </div>
    </div>
  );
}

export default Hero;
