import React from "react";
import "../styles/hero.css";
import "../styles/btn.css";

function Hero() {
  return (
    <div
      className="hero text-[#EEEEEE] flex flex-col gap-14 w-full h-[38.3rem] py-4 px-6 
      sm:h-[47.6rem] sm:gap-20 
      md:flex-row md:justify-between md:gap-0 md:h-[26rem] md:px-12
      lg:h-[32.1rem]
      ">
      <div className="flex flex-col gap-6 justify-center items-center sm:gap-8 md:items-start">
        {/* Hello */}
        <div className="font-semibold text-4xl sm:text-5xl md:text-[2.5rem] lg:text-[4rem] ">
          Hello <span className="text-[#00ADB5]">.</span>
        </div>
        {/* Im mohamad */}
        <div className="text-4xl font-bold text-center sm:text-5xl md:text-[3rem] lg:text-[4rem] md:text-left">
          <span className="font-semibold text-4xl sm:text-5xl md:text-[2.5rem] lg:text-[4rem] text-[#00ADB5]">. </span>
          <span className="font-light">I'm</span> MOHAMAD
        </div>
        {/* Front-End Developer md */}
        <div className="hidden text-[2.5rem] font-medium md:flex lg:text-[4rem]">
          Front-End Developer
        </div>
        {/* Front-End Developer sm */}
        <div className="text-4xl font-medium text-center sm:text-5xl md:hidden">
          Frontend Developer
        </div>
        {/* button */}
        <div
          className="mt-5 cursor-pointer bg-[#00ADB5] text-[#222831] font-semibold py-2 px-4 rounded-xl btn transition-colors duration-300 shadow-lg shadow-[#00ADB5]/30
         sm:py-4 sm:px-7 sm:font-bold sm:rounded-3xl
         md:py-5 md:px-10 md:text-xl md:font-bold md:rounded-4xl
         lg:text-2xl lg:py-6 lg:px-12 lg:font-bold lg:rounded-4xl
         "
        >
          <a href="../public/pdf/main-Resume.pdf"
          download="rahimi"
          >
          <button className="cursor-pointer">Download Resume</button>
          </a>
        </div>
      </div>
      {/* image BG */}
      <div className="relative flex justify-center items-center md:flex-1 ">
        <div className="relative w-[230px] sm:w-[280px] lg:w-[350px] aspect-square">
          <div className="absolute inset-[-8px] translate-y-4 rounded-full border-[8px] border-[#00ADB5] shadow-xl shadow-[#00ADB5] z-0">
            <div className="absolute inset-0 flex justify-center items-center z-10">
            {/* image */}

              <img
                className="object-cover"
                src="../images/Clipped_image_20250524_141654.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
