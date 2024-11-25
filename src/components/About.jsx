import React from "react";
import Navbar from './Navbar';
import { NavLink } from "react-router-dom"

const About = () => {
  return (
     <>
         <Navbar />
         
         <div className="flex flex-col justify-center items-center bg-violet-200 p-2 m-2 rounded-xl gap-4">
            <div className="text-red-700 text-3xl font-bold">
               &lt; iTask /&gt;
            </div>
            
            <div>
               This is a TodoList App;
            </div>
            
            <div className="text-red-700">
               I hope it is usefull to you
            </div>
            
            <div className="text-green-800 flex">
               <p>For any inprovement </p>
               <NavLink className="underline font-bold" to="/contact">Contact
               </NavLink> 
               <p> with me</p>
            </div>
            <div className="text-blue-700">
               Enjoy this site & add Todo.
            </div>
         </div>
     </>
  );
};

export default About;
