import React from 'react'

import { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';

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
        className="p-2 focus:outline-none border rounded-2xl border-white bg-white text-black"
        aria-label="منو"
      >
      </IoMenuSharp>

      {/* منوی بازشونده */}
      <div
        className={`absolute right-0 mt-2 w-24 border-4 text-center border-white bg-black rounded-md shadow-lg py-1 z-50 transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-2 invisible'
        }`}
      >
        <a
          href="#"
          className="block px-4 py-2 text-white border-b border-white"
        >
          Home
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-white border-b border-white"
        >
        About
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-white"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Hmenu