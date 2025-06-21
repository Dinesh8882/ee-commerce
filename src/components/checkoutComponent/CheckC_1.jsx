import React from "react";

function CheckC_1({icon ,h4 ,subHeading ,onClickHandler }) {
  return (
    <div className="mt-[4rem]">
      <div className="flex items-baseline border border-gray-200 rounded-xl bg-[rgb(247,248,249)] py-6 px-6 gap-1">
        {icon} <h4 className="text-[#8e8e90]">{h4}<span  className="text-[#088178] cursor-pointer" onClick={onClickHandler}> {subHeading}</span></h4>
      </div>
    </div>
  );
}

export default CheckC_1;
