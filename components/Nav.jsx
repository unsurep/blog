"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Nav = () => {

  const [dropDown, setDropDown]=useState(true);

  const toggleDropDown=()=>{
    setDropDown(!dropDown)
  }


  return (
    <div>
      {/* desktop nav */}
    <nav className="hidden md:flex items-center justify-evenly py-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-opacity-80/30 backdrop-blur-xl fixed z-50 w-full">
      <div>
        <ul className="flex items-center gap-6">
          <li className="">
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className=" m-1 text-black font-semibold">
                Home
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>

                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
          </li>

          <li className="">
          <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className=" m-1 text-black font-semibold">
                Post
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>

                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
          </li>
          
          <li className="text-black font-semibold cursor-pointer">
            About Me
          </li>
          <li className="text-black font-semibold cursor-pointer">
            Contact Me
          </li>
        </ul>
      </div>

        <div>
            {/* search */}
            <form className="border px-6 py-1 border-black rounded-lg flex items-center">
                <input
                    type="text"
                    placeholder="search here"
                    className="outline-none bg-transparent"
                />
                <button className="font-semibold"><CiSearch /></button>
            </form>
        </div>
    </nav>

    {/* mobile nav */}
    <div className="flex md:hidden items-center justify-between p-[1rem] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div>
        <h1 className="font-bold text-xl">Menu</h1>
      </div>

      <div  className="flex items-center">
        <p onClick={toggleDropDown} className="text-2xl"><IoMenu /></p>
        {dropDown===true? 
        
        <div>
          {/* <IoMdClose/> */}
        </div> : 
        
        <div className="absolute top-0 left-0 bg-white opacity-20/40 space-y-6 pt-12 px-28 h-screen">
          <p>Home</p>
          <p>Posts</p>
          <p>About</p>
          <p>Contact</p>
        </div>}
        
      </div>
    </div>

    </div>
  );
};

export default Nav;
