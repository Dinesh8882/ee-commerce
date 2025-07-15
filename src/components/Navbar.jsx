import React, { useContext, useState } from "react";
import { LuSmartphone } from "react-icons/lu";
import {
  IoLocationOutline,
  IoEarthSharp,
  IoHeartOutline,
  IoBagOutline,
} from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { MdWindow, MdOutlineMenu } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";

import ResponsiveNavbar from "../components/ResponsiveNavbar";
import { LuHeadset } from "react-icons/lu";

import logo from "../assets/logo.svg";
import menu_img from "../assets/menu-banner.jpg";
import { Link } from "react-router-dom";
import { ContextProduct } from "../context/ProjectContext";

function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const { token, state } = useContext(ContextProduct);

  return (
    <div className="">
      <header className="">
        <div className="top-header hidden lg:block bg-green-100 p-[10px] border-b-[3px] border-[#39b4ac]">
          <div className="px-[6rem] m-auto flex justify-between ">
            <div className="left flex gap-3">
              <p className="flex items-center px-3">
                <LuSmartphone /> (+01) - 2345-2345
              </p>
              <p className="flex items-center px-3 font-extrabold text-red-600">
                {/* <IoLocationOutline /> Our location */}
                Site is Under Proccess
              </p>
            </div>
            <div className="right flex gap-3">
              <div className="flex items-center px-3">
                <IoEarthSharp />
                <select name="lang" id="lang">
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                </select>
              </div>
              {!token && (
                <p className="flex items-center px-3">
                  <FiUser />
                  <span>
                    <Link to="/user/login">Log In</Link>/
                    <Link to="/user/register">Sign Up</Link>
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="bottom-header  flex justify-between px-[1rem] sm:px-[2rem] md:px-[6rem] m-auto py-5 md:grid grid-cols-9 items-center">
          <div className="col-span-2">
            <Link to="/">
              <img src={logo} className="md:w-[8rem] w-[6rem]" alt="logo" />
            </Link>
          </div>
          <div className="search hidden md:block col-span-6 border-b-3 py-1 border-gray-800">
            <div className="category flex items-center w-full">
              <p className="flex items-center whitespace-nowrap text-[16px]">
                All category <MdKeyboardArrowDown />
              </p>
              <div className="flex items-center w-full">
                <BiSearchAlt className="text-2xl text-gray-600 ml-4" />

                <input
                  type="text"
                  className="flex-1 px-3 py-2 w-full outline-none"
                  placeholder="Serach for items..."
                />
              </div>
            </div>
          </div>
          <div className="cart  flex text-3xl text-gray-500 items-center gap-3 justify-evenly">
            {state.wishlist.length > 0 ? (
              <Link to="/wishlist">
                <FaHeart className="text-green-600" />
              </Link>
            ) : (
              <Link to="/wishlist">
                <IoHeartOutline className="" />
              </Link>
            )}
            <Link to="/cart">
              <IoBagOutline />
            </Link>
            <MdOutlineMenu
              className="md:hidden "
              onClick={() => setOpenNavbar(!openNavbar)}
            />
            {token && (
              <Link to="/user/profile">
                <IoPersonCircleOutline />
              </Link>
            )}
          </div>
        </div>
      </header>
      <nav className="border-b border-gray-200  hidden md:block">
        <div className="navbar flex justify-between w-[85%] m-auto py-2 relative">
          <div className="flex justify-between items-center">
            <div className="first flex items-center gap-1">
              <MdWindow className="text-3xl " />
              <h2 className="text-[#108378] text-[1.1rem] font-light">
                Browse Categories
              </h2>
            </div>
            <RxCrossCircled className="md:hidden text-2xl" />
          </div>
          <div className="nav-list flex items-center gap-[2rem]">
            <div className="nav-item relative  transition-all duration-700 group">
              <div className="hover:cursor-pointer flex items-center gap-1 font-bold text-[#108378]">
                Home <MdKeyboardArrowDown />
              </div>
              <ul className="absolute top-20 left-0 w-[250px] px-8 border border-gray-200 bg-white md:opacity-0 md:invisible group-hover:visible group-hover:opacity-100 group-hover:top-full transition-all duration-300">
                <li className="mb-2 hover:text-[#108378]">Home</li>
                <li className="mb-2 hover:text-[#108378]">Home</li>
                <li className="mb-2 hover:text-[#108378]">Home</li>
                <li className="mb-2 hover:text-[#108378]">Home</li>
              </ul>
            </div>

            <div className="nav-item relative   transition-all duration-700 group">
              <div className="hover:cursor-pointer flex items-center gap-1 font-bold hover:text-[#108378]">
                About
              </div>
            </div>

            <div className="nav-item relative   transition-all duration-700 group">
              <div className="hover:cursor-pointer flex items-center gap-1 font-bold hover:text-[#108378]">
                Shop <MdKeyboardArrowDown />
              </div>
              <ul className="absolute top-20 left-0 w-[250px] py-5 px-8 bg-white border border-gray-200 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:top-full transition-all duration-300">
                <li className="mb-2 hover:text-[#108378]">
                  Shop Grid – Right Sidebar
                </li>
                <li className="mb-2 hover:text-[#108378]">
                  Shop Grid – Left Sidebar
                </li>
                <li className="mb-2 hover:text-[#108378]">
                  Shop List – Right Sidebar
                </li>
              </ul>
            </div>

            <div className="nav-item transition-all duration-700 group">
              <div className="hover:cursor-pointer flex items-center gap-1 font-bold hover:text-[#108378]">
                Mega menu <MdKeyboardArrowDown />
              </div>
              <div className="grid grid-cols-10 w-full absolute top-20 left-0 py-5 px-8 bg-white border border-gray-200 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:top-full transition-all duration-300">
                <div className="submenu col-span-2">
                  <h2 className="text-xl text-[#108378]">Women's Fashion</h2>
                  <ul className="py-5">
                    <li className="mb-2 hover:text-[#108378]">Dresses</li>
                    <li className="mb-2 hover:text-[#108378]">
                      Blouses & Shirts
                    </li>
                    <li className="mb-2 hover:text-[#108378]">
                      Hoodies & Sweatshirts
                    </li>
                    <li className="mb-2 hover:text-[#108378]">
                      Wedding Dresses
                    </li>
                    <li className="mb-2 hover:text-[#108378]">Prom Dresses</li>
                    <li className="mb-2 hover:text-[#108378]">
                      Cosplay Costumes
                    </li>
                  </ul>
                </div>
                <div className="submenu col-span-2">
                  <h2 className="text-xl text-[#108378]">Men's Fashion</h2>
                  <ul className="py-5">
                    <li className="mb-2 hover:text-[#108378]">Jackets</li>
                    <li className="mb-2 hover:text-[#108378]">
                      Casual Faux Leather
                    </li>
                    <li className="mb-2 hover:text-[#108378]">
                      Genuine Leather
                    </li>
                    <li className="mb-2 hover:text-[#108378]">Casual Pants</li>
                    <li className="mb-2 hover:text-[#108378]">Sweatpants</li>
                    <li className="mb-2 hover:text-[#108378]">Harem Pants</li>
                  </ul>
                </div>
                <div className="submenu col-span-2">
                  <h2 className="text-xl text-[#108378]">Technology</h2>
                  <ul className="py-5">
                    <li className="mb-2 hover:text-[#108378]">
                      Gaming Laptops
                    </li>
                    <li className="mb-2 hover:text-[#108378]">
                      Ultraslim Laptops
                    </li>
                    <li className="mb-2 hover:text-[#108378]">Tablets</li>
                    <li className="mb-2 hover:text-[#108378]">
                      Laptop Accessories
                    </li>
                  </ul>
                </div>
                <div className="submenu col-span-4 relative w-[350px] h-[300px] bg-red-200 transition-all duration-700 ">
                  <img
                    src={menu_img}
                    alt="img"
                    className="w-full h-full object-center"
                  />
                  <div className="mega absolute top-0 w-full h-full p-8 ">
                    <h2 className="text-xl text-gray-800">HOT DEALS</h2>
                    <p className="font-bold text-3xl text-gray-800">
                      Don't miss <br />
                      Trending
                    </p>
                    <p className="text-2xl font-bold mt-4 text-green-400">
                      Save to 50%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="nav-item relative  transition-all duration-700 group">
              <div className="hover:cursor-pointer flex items-center gap-1 font-bold hover:text-[#108378]">
                Contact
              </div>
            </div>
          </div>
          <div className="right gap-2 flex items-center ">
            <LuHeadset className="text-xl text-gray-500" />
            <p className="text-gray-900 text-[17px] font-bold">
              Hotline{" "}
              <span className="text-xl  text-[#088178]">1900 - 888</span>
            </p>
          </div>
        </div>
      </nav>

      <ResponsiveNavbar openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
    </div>
  );
}

export default Navbar;
