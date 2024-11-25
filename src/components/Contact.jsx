import React from "react";
import Navbar from './Navbar';
import { NavLink } from "react-router-dom"

const Contact = () => {
  return (
     <>
         <Navbar />
         
         <div className="flex flex-col justify-center items-center bg-violet-200 p-2 m-2 rounded-xl gap-4">
            <div className="text-red-700 text-xl">
               This feature is now in construction:
            </div>
            
            <div>
               We connect it to Backend as soon as possible
            </div>
            
            <div className="text-red-700 text-xl">
               Till then contact with me using:
            </div>
            
            <div className="text-green-800">
               Phone No: 9531622774
            </div>
            
            <div className="text-blue-700">
               Gmail id: debojyotitantra9182@gmail.com
            </div>
            
            <div className="text-violet-700">
               Github: 
               <NavLink className="underline font-bold" to="https://github.com/debojyoti-tantra">Click Here
               </NavLink>
            </div>
         </div>
     </>
  );
};

export default Contact;
