import React from "react";
import Hmenu from "./Hmenu";

function Navbar() {
  return (
    <div className="fixed w-full">
      <div className=" flex flex-row justify-between py-4 px-6 text-[#EEEEEE] bg-[#222831] items-center md:py-8 md:px-8">
        <div className="text-[#00ADB5] font-bold text-[.9rem] md:text-xl">Mohamad Rahimi</div>
        <div className="">
          {/* <IoMenuSharp size={23}/> */}
          <Hmenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
