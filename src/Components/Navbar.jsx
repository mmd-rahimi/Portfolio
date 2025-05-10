import React from "react";
import { IoMenuSharp } from "react-icons/io5";

function Navbar() {
  return (
    <div className="flex flex-row justify-between py-4 px-6 text-white items-center">
      <div>` Mohamad mahdi Rahimi `</div>
      <div className="">
      <IoMenuSharp size={23}/>
      </div>
    </div>
  );
}

export default Navbar;
