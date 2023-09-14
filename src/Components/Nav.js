import React from "react";
import {useState, useEffect} from "react"

const Nav = () =>{

  const [toogle,setToogle] = useState(false);
  return(
    <>
    <div className="bg-gray-100 shadow-md">
   <div className="flex justify-between">
      <img src="https://img.freepik.com/premium-vector/smiling-graduate-student-wearing-academic-robe-graduation-cap-3d-vector-people-character-illustrationcartoon-minimal-style_365941-798.jpg?w=2000"
         alt="logo"
         class="h-16"/>
      <div className="hidden md:flex">
         <ul class="flex gap-6 mr-10 text-xl mt-4">
            <li className="transistion-all ease-in-all hover:scale-110 cursor-pointer">Home</li>
            <li className="transistion-all ease-in-all hover:scale-110 cursor-pointer">About</li>
            <li className="transistion-all ease-in-all hover:scale-110 cursor-pointer">Resume</li>
            <li className="transistion-all ease-in-all hover:scale-110 cursor-pointer">Skills</li>
            <li className="transistion-all ease-in-all hover:scale-110 cursor-pointer">Contact</li>
         </ul>
      </div>
      <div className="md:hidden lg:hidden">
         {!toogle?
         <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>
            setToogle(true)}
            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6 cursor:pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
         </svg>
         :
         <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>
            setToogle(false)} fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} stroke="currentColor"
            className="w-6 h-6 cursor:pointer float-right">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
         </svg>
         }
         { toogle?
         <ul class="  mt-12 mr-8 bg-gray-200 p-8">
            <li className="p-3 transistion-all ease-in-all hover:scale-110 cursor-pointer">Home</li>
            <li className="p-3  transistion-all ease-in-all hover:scale-110 cursor-pointer">About</li>
            <li className=" p-3 transistion-all ease-in-all hover:scale-110 cursor-pointer">Resume</li>
            <li className=" p-3 transistion-all ease-in-all hover:scale-110 cursor-pointer">Skills</li>
            <li className=" p-3 transistion-all ease-in-all hover:scale-110 cursor-pointer">Contact</li>
         </ul>
         :null}
      </div>
   </div>
</div>
    </>
  )
}

export default Nav;
