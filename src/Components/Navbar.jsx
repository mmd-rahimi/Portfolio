import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row justify-between py-8 px-10 font-semibold text-2xl text-white">
      <div>` Mohamad mahdi Rahimi `</div>
      <div className="flex flex-row gap-6">
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
      </div>
    </div>
  );
}

export default Navbar;
