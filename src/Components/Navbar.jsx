import React from "react";
import Hmenu from "./Hmenu";

function Navbar() {
  return (
    <div className="w-full">
      <div className=" flex flex-row justify-between py-4 px-6 text-[#EEEEEE] bg-[#222831]  items-center md:py-8 md:px-8">
        <div className="text-[#00ADB5] font-bold text-[.9rem] sm:text-lg md:text-xl lg:text-2xl"><span>{"${ "}</span>Mohamad Rahimi<span>{" }"}</span></div>
        <div className="">
          <Hmenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
