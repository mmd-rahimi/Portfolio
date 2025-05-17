import React from "react";

import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { NavLink } from "react-router";

const Hmenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* دکمه همبرگری */}
      <IoMenuSharp
        size={43}
        onClick={toggleMenu}
        className="p-2 focus:outline-none border rounded-2xl border-[#00ADB5] bg-[#00ADB5] text-[#222831]  md:hidden"
        aria-label="منو"
      ></IoMenuSharp>

      {/* منوی بازشونده */}
      <div
        className={`absolute right-0 mt-2 w-24 border-4 text-center border-[#00ADB5] bg-[#222831] rounded-md shadow-lg py-1 z-50 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible"
        }`}
      >
        <NavLink
          to="/"
          className="block px-4 py-2 text-[#EEEEEE] border-b-2 border-[#00ADB5]"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="block px-4 py-2 text-[#EEEEEE] border-b-2 border-[#00ADB5]"
        >
          About
        </NavLink>
        <NavLink to="/contact" className="block px-4 py-2 text-[#EEEEEE]">
          Contact
        </NavLink>
      </div>
      <div className="hidden 
      lg:text-2xl
      md:flex flex-row items-center gap-8 text-xl font-semibold">
        <NavLink to="/" className="text-[#EEEEEE] hover:scale-110 transition-transform duration-100 hover:text-[#00ADB5]">
          Home
        </NavLink>
        <NavLink to="/about" className="text-[#EEEEEE] hover:scale-110 transition-transform duration-100 hover:text-[#00ADB5]">
          About
        </NavLink>
        <NavLink to="/contact" className="text-[#EEEEEE] hover:scale-110 transition-transform duration-100 hover:text-[#00ADB5]">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Hmenu;
