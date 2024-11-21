import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-900 text-white flex justify-between items-center py-2 px-4">
      <p className="flex flex-row items-center">
         <p className="font-bold text-xl sm:text-2xl">&lt; iTask /&gt;</p>
      </p>
      <ul className="flex gap-3">
         <li><a href="#" className="active:font-bold sm:text-xl">Home</a></li>
         <li><a href="#" className="active:font-bold sm:text-xl">Contact</a></li>
         <li><a href="#" className="active:font-bold sm:text-xl">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
