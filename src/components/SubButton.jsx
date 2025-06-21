import React from "react";

function SubButton({icon,btnName,color}) {
  return (
    <div>
      <button className={`${color?"bg-blue-500 w-full flex justify-center mt-[3rem] py-2":"bg-[#088078]"} my-4 flex items-center gap-2 text-white px-4 rounded-sm py-2 cursor-pointer`}>
        {icon} {btnName}
      </button>
    </div>
  );
}

export default SubButton;
