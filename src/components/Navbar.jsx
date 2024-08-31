// Navbar.js
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [val, setval] = useState(false);

  const handleclicked = () => {
    setval(!val);
  };

  return (
    <>
      <div
        className={`w-full h-screen transition-all  duration-1000 absolute ${
          val ? "top-0" : "hidden"
        } bg-zinc-300`}
      >
        <button  className="p-20 text-2xl" onClick={handleclicked}><IoMdClose /></button>
      </div>

      <nav className="flex   justify-between text-center items-center p-16 bg-[#ffffff]">
        <div className="text-2xl font-light">
          Abhishek <br /> -Panwar
        </div>
     
          <button className="w-5" onClick={handleclicked}>
          <RxHamburgerMenu className="text-2xl font-semibold" />

          </button>
        
      </nav>
    </>
  );
};

export default Navbar;
