import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { MdWindow } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";

import logo from "../assets/mainLogo.png";

function Navbar({ openNavbar, setOpenNavbar }) {
  const [openNav, setOpenNav] = useState("");

  return (
    <div className="">
      <nav
        className={`fixed z-50 top-0 right-0 h-screen bg-white w-[100%] max-w-[400px]  transition-all duration-500 ${
          openNavbar ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="top-nav flex px-4 py-6 items-center justify-between">
          <img src={logo} className="w-[100px]" alt="logo" />
          <RxCrossCircled
            className="text-2xl"
            onClick={() => setOpenNavbar(!openNavbar)}
          />
        </div>
        <div className="px-4 py-8">
          <div className="search-bar flex items-center justify-between rounded-sm  px-4  border border-[#39b4ac]">
            <input
              type="text"
              className="w-full outline-none border-none py-2"
              placeholder="Search for items..."
            />
            <BiSearchAlt className="text-xl" />
          </div>
        </div>
        <div className="nav-list px-4">
          <div className="category flex items-center gap-1">
            <MdWindow className="text-2xl" />
            <h2 className="text-[1rem] font-bold text-[#088178]">
              Browse Categories
            </h2>
          </div>

          <div className="nav-items mt-2">
            <div
              className="item text-[1rem] font-bold px-1 group transition-all duration-700 "
              onClick={() => setOpenNav(openNav === "home" ? "" : "home")}
            >
              <div className="flex items-center justify-between p-2">
                Home
                <MdKeyboardArrowDown className=" " />
              </div>
              <ul
                className={`px-5  ${
                  openNav === "home" ? "h-24 py-2" : " h-0 py-0"
                } overflow-hidden transition-all duration-300 text-sm`}
              >
                <li className="py-1 hover:text-[#108378]">Home 1</li>
                <li className="py-1 hover:text-[#108378]">Home 2</li>
                <li className="py-1 hover:text-[#108378]">Home 3</li>
              </ul>
            </div>

            <div
              className="item text-[1rem] font-bold px-1 group transition-all duration-700"
              onClick={() => setOpenNav(openNav === "shop" ? "" : "shop")}
            >
              <div className="flex items-center justify-between p-2">
                Shop
                <MdKeyboardArrowDown className=" " />
              </div>
              <ul
                className={` px-5 ${
                  openNav === "shop" ? "h-24 py-2" : " h-0 py-0"
                } overflow-hidden transition-all duration-300 text-sm`}
              >
                <li className="py-1 hover:text-[#108378]">
                  Shop Grid – Right Sidebar
                </li>
                <li className="py-1 hover:text-[#108378]">
                  Shop Grid – Left Sidebar
                </li>
                <li className="py-1 hover:text-[#108378]">
                  Shop List – Right Sidebar
                </li>
                <li className="py-1 hover:text-[#108378]">
                  Shop List – Left Sidebar
                </li>
                <li className="py-1 hover:text-[#108378]">Shop - Wide</li>
              </ul>
            </div>

            <div
              className="item text-[1rem] font-bold px-1 group transition-all duration-700"
              onClick={() => setOpenNav(openNav === "mega" ? "" : "mega")}
            >
              <div className="flex items-center justify-between p-2">
                Mega Menu
                <MdKeyboardArrowDown className=" " />
              </div>
              <ul
                className={`px-5 ${
                  openNav === "mega" ? "h-24 py-2" : " h-0 py-0"
                } group-hover:h-24 overflow-hidden transition-all duration-300 text-sm`}
              >
                <li className="py-1 hover:text-[#108378]">Women's Fashion</li>
                <li className="py-1 hover:text-[#108378]">Men's Fashion</li>
                <li className="py-1 hover:text-[#108378]">Technology</li>
              </ul>
            </div>

            <div
              className="item text-[1rem] font-bold px-1 group transition-all duration-700"
              onClick={() => setOpenNav(openNav === "blog" ? "" : "blog")}
            >
              <div className="flex items-center justify-between p-2">
                Blog
                <MdKeyboardArrowDown className=" " />
              </div>
              <ul
                className={` px-5 ${
                  openNav === "blog" ? "h-24 py-2" : " h-0 py-0"
                } overflow-hidden transition-all duration-300 text-sm`}
              >
                <li className="py-1 hover:text-[#108378]">
                  Blog Category Grid
                </li>
                <li className="py-1 hover:text-[#108378]">
                  Blog Category List
                </li>
                <li className="py-1 hover:text-[#108378]">Blog Category Big</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
