import React, { useState } from "react";

function Buttons({
  isfalse,
  green_text,
  black_text,
  setActiveButton,
  activeButton,
  buttons,
}) {
  return (
    <div
      className={`my-12 flex flex-col gap-4 md:flex-row justify-between items-start sm:items-center ${
        isfalse ? "sm:flex-row-reverse flex-col-reverse " : ""
      }`}
    >
      <div className="btns flex  gap-1 sm:gap-3">
        {buttons?.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveButton(item.btn.toLowerCase())}
            className={`${
              activeButton === item.btn.toLowerCase()
                ? "bg-[#fde1bd]"
                : "bg-[#eeeeee]"
            } px-3 sm:px-6 py-2 sm:py-3 cursor-pointer rounded-[2px] text-sm sm:text-base font-bold transition-colors`}
          >
            {item.btn}
          </button>
        ))}
      </div>

      {isfalse ? (
        <div className="text-left sm:text-right">
          <h2 className="text-2xl sm:text-3xl font-bold">
            <span className="text-[#088178]">{green_text}</span> {black_text}
          </h2>
        </div>
      ) : (
        <h3 className="text-[15px] sm:text-lg font-semibold text-[#088178]">
          View More
        </h3>
      )}
    </div>
  );
}

export default Buttons;
