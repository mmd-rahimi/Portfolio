import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import Hmenu from "./Hmenu";

function Navbar() {
  return (
    <div className="flex flex-row justify-between py-4 px-6 text-[#EEEEEE] bg-[#222831] items-center md:py-8 md:px-8">
      <div className="font-bold text-[.9rem] md:text-xl">Mohamad Rahimi</div>
      <div className="">
      {/* <IoMenuSharp size={23}/> */}
      <Hmenu />
      </div>
    </div>
  );
}

export default Navbar;
