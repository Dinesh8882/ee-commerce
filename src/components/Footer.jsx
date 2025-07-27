import React from "react";
import logo from "../assets/mainLogo.png";
import { FaTwitter, FaPinterestP, FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import app_store from "../assets/app-store.jpg";
import google_play from "../assets/google-play.jpg";
import payment from "../assets/payment-method.png";

import { FaYoutube } from "react-icons/fa";

function Footer() {
  const aboutObj = [
    { name: "About us", link: "#" },
    { name: "Delivery Information", link: "#" },
    { name: "Privacy Policy", link: "#" },
    { name: "Terms & Conditions", link: "#" },
    { name: "Contact Us", link: "#" },
    { name: "Support Center", link: "#" },
  ];

  const myAccountObj = [
    { name: "Sign In", link: "#" },
    { name: "View Cart", link: "#" },
    { name: "My Wishlist", link: "#" },
    { name: "Track My Order", link: "#" },
    { name: "Help", link: "#" },
    { name: "Order", link: "#" },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-12 grid-cols-1 md:grid-cols-2 gap-10 mt-8 border-b py-8 border-gray-300">
        <div className="col-span-4 text-gray-500">
          <h2 className="mb-7">
            <a href="">
              <img src={logo} className="w-[100px]" alt="logo" />
            </a>
          </h2>
          <h3 className="mb-4 text-xl font-bold">Contact</h3>
          <p className="mb-4">
            <b>Address:</b> 562 Wellington Road, Street 32, San Francisco
          </p>
          <p className="mb-4">
            <b>Phone:</b> +01 2222 365 /(+91) 01 2345 6789
          </p>
          <p className="mb-7">
            <b>Hours:</b> 10:00 - 18:00, Mon - Sat
          </p>

          <div>
            <p className="mb-3 font-bold text-xl">Follow Us</p>
            <div className="icons flex gap-2">
              <FaFacebookF />
              <FaTwitter />

              <SlSocialInstagram />
              <FaPinterestP />

              <FaYoutube />
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <h2 className="text-2xl mb-7">About</h2>
          <ul>
            {aboutObj.map((item, index) => {
              return (
                <li key={index} className="mb-4">
                  <a href={item.link}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-span-2">
          <h2 className="text-2xl mb-7">My Account</h2>

          <ul>
            {myAccountObj.map((item, index) => {
              return (
                <li key={index} className="mb-4">
                  <a href={item.link}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-span-4">
          <h2 className="mb-7 text-2xl ">Install App</h2>
          <p className="mb-8">From App Store or Google Play</p>
          <div>
            <div className="border-2 rounded-sm overflow-hidden hover:-translate-y-1 cursor-pointer transition-all duration-900 mb-2 border-[#088175] w-fit ">
              <img src={app_store} alt="app store" />
            </div>
            <div className="border-2 border-gray-300 rounded-sm overflow-hidden cursor-pointer hover:-translate-y-1 transition-all duration-900 hover:border-[#088175] w-fit ">
              <img src={google_play} alt="google play" />
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm mb-2 text-gray-600">
              Secured Payment Gateways
            </p>
            <img src={payment} alt="" />
          </div>
        </div>
      </div>
      <div className="flex my-7 pb-6 justify-between">
        <p>
          © 2022<span className="text-[#088178] font-bold"> Dinesh</span>- HTML Ecommerce Template
        </p>
        <p>Designed by <span className="text-[#088178] font-bold">Dinesh</span> All rights reserved</p>
      </div>
    </>
  );
}

export default Footer;
