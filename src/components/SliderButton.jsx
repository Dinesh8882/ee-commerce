import React, { useContext } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SliderButton({ green_text, black_text, onNextClick, onPrevClick }) {
  return (
    <div>
      <div className="top mt-7 flex justify-between items-center">
        <h2 className="md:text-3xl font-bold sm:text-2xl text-xl">
          <span className="text-[#088178]">{green_text}</span> {black_text}
        </h2>
        <div className="flex items-center gap-[10px]">
          <p
            onClick={onPrevClick}
            className="flex border group/btn border-gray-300 cursor-pointer  hover:bg-[#088178] rounded-full items-center justify-center w-[30px] h-[30px] bg-[#e8f6ea]"
          >
            {" "}
            <MdKeyboardArrowLeft className="text-[#088178] text-[20px] group-hover/btn:text-white" />
          </p>
          <p
            onClick={onNextClick}
            className="flex border group/btn border-gray-300 cursor-pointer  text-[20px] hover:bg-[#088178] rounded-full items-center justify-center w-[30px] h-[30px] bg-[#e8f6ea]"
          >
            {" "}
            <MdKeyboardArrowRight className="text-[#088178] group-hover/btn:text-white" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default SliderButton;
