import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import Hmenu from "./Hmenu";

function Navbar() {
  return (
    <div className="flex flex-row justify-between py-4 px-6 text-white items-center">
      <div className="font-semibold text-[1rem]">` Mohamad mahdi Rahimi `</div>
      <div className="">
      {/* <IoMenuSharp size={23}/> */}
      <Hmenu />
      </div>
    </div>
  );
}

export default Navbar;
