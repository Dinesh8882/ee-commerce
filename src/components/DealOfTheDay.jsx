import React from "react";
import { dealOfTheDay } from "../assets/data";
import { FaLongArrowAltRight } from "react-icons/fa";

function DealOfTheDay() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-8 px-4 sm:px-6 md:px-10">
    {dealOfTheDay.map((item, index) => (
      <div key={index} className="relative w-full overflow-hidden rounded-md">
        <img
          src={item.image}
          alt=""
          className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover object-left"
        />
        <div className="absolute top-0 left-0 p-4 sm:p-6 md:p-10 py-10 text-black">
          <h4 className="text-xl sm:text-2xl md:text-3xl text-[#088178] font-semibold">
            {item.title}
          </h4>
          <p className="text-sm sm:text-base text-gray-600 font-light">
            {item.subtitle}
          </p>
          <h4 className="mt-2 text-lg sm:text-xl md:text-2xl font-light w-[90%]">
            {item.productTitle}
          </h4>
          <p className="mt-3 text-lg sm:text-xl text-red-500 font-medium">
            ${item.currentPrice}
            <span className="text-gray-300 line-through ml-2">
              ${item.oldPrice}
            </span>
          </p>
  
          <p className="mt-2 text-sm sm:text-base text-gray-500">{item.offerText}</p>
  
          <div className="flex justify-start mt-5 cursor-pointer">
            <div className="group/btn hover:-mt-1 relative w-[140px] h-[45px] transition-all duration-500">
              <span className="absolute inset-0 border-2 border-[#088178] rounded-sm origin-left transition-transform duration-500 group-hover/btn:scale-x-105 z-0" />
              <div className="flex text-[#088178] w-full items-center justify-center gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <h3 className="">Shop Now</h3>
                <FaLongArrowAltRight className="group-hover/btn:translate-x-2 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  );
}

export default DealOfTheDay;
