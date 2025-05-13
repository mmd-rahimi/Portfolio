import React from "react";
import "../styles/hero.css";
import "../styles/btn.css";

function Hero() {
  return (
    <div
      className="hero text-[#EEEEEE]
      w-full h-[45rem] py-22 px-6 md:h-[37rem] md:px-12"
    >
      <div className="flex flex-col gap-6 justify-center items-center">
        {/* Hello */}
        <div className="font-semibold text-4xl md:text-[5rem] ">
          Hello <span className="text-[#00ADB5]">.</span>
        </div>
        {/* Im mohamad */}
        <div className="text-4xl font-bold text-center md:text-[5rem] md:text-left">
          <span className="font-bold text-4xl text-[#00ADB5]">__ </span>
          <span className="font-light">I'm</span> MOHAMAD
        </div>
        {/* Front-End Developer md */}
        <div className="hidden md:flex text-[5rem] font-medium">
          Front-End Developer
        </div>
        {/* Front-End Developer sm */}
        <div className="text-4xl font-medium text-center md:hidden">
          Frontend Developer
        </div>
        {/* button */}
        <div className="mt-5 bg-[#00ADB5] text-[#222831] font-semibold py-2 px-4 rounded-xl btn transition-colors duration-300 shadow-lg shadow-[#00ADB5]/30">
          <button>Download Resume</button>
        </div>
        {/* image */}
        <div className="relative w-50 h-50 mx-auto">
          <img
            className="object-cover"
            src="./src/assets/Clipped_image_20250512_193544.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
