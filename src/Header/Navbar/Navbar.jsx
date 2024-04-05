import React, { useState } from "react";
import "./Navbar.css";

import cartIcon from "../../assets/nav-icon.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";
import cart from "../../assets/cart.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className="w-full  h-20  px-2 py-4 flex items-center justify-between bg-gradient-to-r from-[#38EF7D]/25 to-[#11998E]/25 ">
        <div className="logo w-28 h-12">
          <img src={logo} alt="logo" />
        </div>

        <div className="nav-links hidden lg:block">
          <ul className=" flex  gap-9 items-center justify-between font-sans">
            <li>
              <a href="#">
                Home <i class="fa-solid fa-chevron-down"></i>{" "}
              </a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#">
                Pages <i class="fa-solid fa-chevron-down"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Services <i class="fa-solid fa-chevron-down"></i>
              </a>
            </li>
            <li>
              <a href="#">
                News & Event <i class="fa-solid fa-chevron-down"></i>
              </a>
            </li>
            <li>
              <a href="#">Contact Us </a>
            </li>
          </ul>
        </div>

        <div className="flex nav-buttons  items-center justify-between px-0 py-4 gap-4">
          <div className=" hidden sm:flex items-center justify-between px-3 mr-4">
            <img src={cart} alt="cart" className="mr-2" />
            <img src={search} alt="search" />
          </div>
          <button className=" hidden sm:block px-8 py-4 rounded-full text-white text-lg lg:text-sm font-semibold bg-gradient-to-l from-[#38EF7D] to-[#11998E]">
            GET QUOTE <i class="fa-solid fa-arrow-right"></i>
          </button>

          <div className="hamburger lg:hidden z-10">
            <button
              onClick={handleToggle}
              className="px-6 py-3 text-lg text-white bg-orange-600 rounded-md "
            >
              {" "}
              <i class="fa-solid fa-grip-vertical mr-2"></i> Menu
            </button>
          </div>
        </div>

        <div
          className={`small-nav z-10 origin-left transition-all ease-in-out duration-700 absolute top-0 ${
            toggle ? "left-0" : "-left-full"
          } h-screen min-h-screen w-72 px-10 py-6 pt-12 flex flex-col items-start justify-start gap-10 bg-[#1a1a1a]`}
        >
          <i
            class="fa-solid fa-xmark text-white absolute top-5 right-5 text-2xl cursor-pointer"
            onClick={handleToggle}
          ></i>

          <div className="logo w-28">
            <img src={logo} alt="logo" />
          </div>
          <div className="search flex items-center gap-2 border-b-2 border-b-white py-2">
            <input
              type="text"
              placeholder="Search Here"
              className="w-full bg-transparent outline-none text-white "
            />
            <i class="fa-solid fa-magnifying-glass text-white cursor-pointer"></i>
          </div>
          <div className="nav-links ">
            <ul className="flex flex-col gap-6 text-white text-2xl py-6">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#">News & Event</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
