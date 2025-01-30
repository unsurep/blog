"use client";

import React from "react";
import { CiSearch } from "react-icons/ci";

const Nav = () => {
  return (
    <div>
      {/* desktop nav */}
    <nav className="hidden md:flex items-center justify-evenly py-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div>
        <ul className="flex items-center gap-6">
          <li className="">
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className=" m-1 text-gray-500 hover:text-black ">
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
              <div tabIndex={0} role="button" className=" m-1 text-gray-500 hover:text-black">
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
          
          <li className="text-gray-500 hover:text-black cursor-pointer">
            About Me
          </li>
          <li className="text-gray-500 hover:text-black cursor-pointer">
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
                    className="outline-none"
                />
                <button><CiSearch /></button>
            </form>
        </div>
    </nav>

    {/* mobile nav */}
    <div></div>
    
    </div>
  );
};

export default Nav;
