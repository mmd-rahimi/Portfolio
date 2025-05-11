import React from "react";
import "../styles/hero.css";


function Hero() {
  return (
    <div
      className="hero text-[#EEEEEE]
      w-full h-[45rem] py-22 px-6 md:h-[37rem] md:px-12"
    >
      <div className="flex flex-col gap-5">
        <span className="font-semibold text-5xl md:text-[5rem] ">Hello <span className="text-[#00ADB5]">.</span></span> <br />
        <h2 className="text-5xl font-bold text-center md:text-[5rem] md:text-left">
          <span className="font-bold text-6xl text-[#00ADB5]">__ </span>
          <span className="font-light">I'm</span> MOHAMAD
        </h2>
        <br />
        <h3 className="text-5xl font-medium text-right md:hidden">Front-End</h3>
        <h3 className="text-5xl font-medium text-right md:hidden ">Developer</h3>
        <h3 className="hidden md:flex text-[5rem] font-medium">Front-End Developer</h3>
      </div>
    </div>
  );
}

export default Hero;
