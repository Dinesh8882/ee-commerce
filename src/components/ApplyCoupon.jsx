import React from "react";
import { BsClipboard2 } from "react-icons/bs";
import SubButton from "./SubButton";

function ApplyCoupan() {
  return (
    <div>
      <div className="coupon ">
        <h3 className="text-xl">Apply Coupon</h3>
        <div className="input flex items-center gap-6">
          <input
            type="text"
            placeholder="Enter your coupon"
            className="w-3xs px-4 py-2 rounded-sm outline-none border border-gray-200"
          />
          <div>
            <SubButton icon={<BsClipboard2 />} btnName="Apply" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyCoupan;
