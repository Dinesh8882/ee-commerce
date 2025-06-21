import React from "react";
import { banners } from "../assets/data";
import { FaArrowRightLong } from "react-icons/fa6";


function Banner() {
  return (
    <div className="grid lg:grid-cols-3 gap-7 my-[3rem] justify-center">
      {banners.map((item, index) => {
        return (
          <div className="relative" key={index}>
            <img src={item.banner} alt="" />
            <div className="headinds absolute -top-5  sm:top-[50%] sm:-translate-y-[50%] left-0 p-8 ">
                <p className="text-gray-600 md:text-xl lg:text-sm ">{item.tag}</p>
                <h3 className="hover:translate-x-2 md:text-2xl lg:text-xl   transition-all duration-700 text-sm font-bold md:font-light text-gray-900 leading-6 w-[150px]">{item.title}</h3>
                <div className="group/btn flex text-[#088178] mt-1 cursor-pointer gap-1 items-center">
                    Shop Now
                    <FaArrowRightLong className="text-[10px] group-hover/btn:translate-x-1 transition-all duration-700"/>
                </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Banner;
