import React from "react";
import banner_4 from "../assets/banner-4.png";
import { FaLongArrowAltRight } from "react-icons/fa";

function ServicesBanner() {
  return (
    <div className=" my-12 group">
      <div className="relative">
        <img
          src={banner_4}
          alt="Banner"
          className="w-full h-auto object-cover"
        />

        <div className="absolute hidden md:hidden bottom-6 left-4 sm:left-6 md:left-12 lg:left-20 text-white lg:flex flex-col items-start">
          <p className="text-[#088178] text-sm sm:text-base md:text-lg group-hover:translate-x-2 transition-all duration-700 font-bold mb-2">
            Repair Services
          </p>

          <h2 className="text-2xl sm:text-xl md:text-3xl lg:text-3xl font-bold mb-4 leading-tight text-black">
            We're an Apple <br />
            Authorised Service Provider
          </h2>

          <div className="group/button flex items-center lg:py-1 lg:px-2 bg-[#088178] text-white md:px-5 md:py-2 rounded-sm transition-all duration-700 hover:bg-[#06675d]">
            <span className="md:mr-3">Learn More</span>
            <p className="p-2 group-hover/button:translate-x-2 transition-all duration-700">
              <FaLongArrowAltRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesBanner;
