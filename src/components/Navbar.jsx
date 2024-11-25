import React from "react";
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-purple-900 text-white flex justify-between items-center py-2 px-4">
      <p className="flex flex-row items-center">
         <p className="font-bold text-xl sm:text-2xl">&lt; iTask /&gt;</p>
      </p>
      
      <ul className="flex gap-3">
         <li className="active:font-bold sm:text-xl">
            <NavLink className={(e) => {return e.isActive?"underline":""}} to="/" >
               Home
            </NavLink>
         </li>
         
         <li className="active:font-bold sm:text-xl">
            <NavLink className={(e) => {return e.isActive?"underline":""}} to="/contact" >
               Contact
            </NavLink>
         </li>
         
         <li className="active:font-bold sm:text-xl">
            <NavLink className={(e) => {return e.isActive?"underline":""}} to="/about" >
               About
            </NavLink>
         </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
