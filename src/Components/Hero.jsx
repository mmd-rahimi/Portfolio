import React from "react";
import "../styles/hero.css";

function Hero() {
  return (
    <div
      className="hero text-white
      w-full h-[40rem] py-16 px-6 
    md:px-12 
    lg:px-20 flex flex-col 
    lg:flex-row items-center justify-between relative overflow-hidden
"
    >
      <div className="flex flex-col">
        <span className="font-black text-[6rem]">Hi</span> <br />
        <h2 className="font-bold text-[4rem]">
          <span>... </span>
          <span className="font-semibold">I'm</span> MOHAMAD
        </h2>
        <br />
        <h3 className="font-black text-[5rem]">Front-End Developer</h3>
      </div>
    </div>
  );
}

export default Hero;
