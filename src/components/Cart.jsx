import React, { useContext } from "react";
import { HiFingerPrint } from "react-icons/hi2";
import { TiArrowShuffle } from "react-icons/ti";
import { AiFillCalendar } from "react-icons/ai";
import CartList from "./CartList";

import SubButton from "./SubButton";
import ApplyCoupan from "./ApplyCoupon";
import { ContextProduct } from "../context/ProjectContext";

import { toast } from "react-toastify";

function Cart() {
  const { subtotal, disCount } = useContext(ContextProduct);

   
  return (
    <div>
      <CartList />
      <div className="my-[3rem] flex items-center gap-2">
        <div className="h-[2px] flex-1 bg-gray-200" />
        <HiFingerPrint className="text-2xl text-gray-600 " />
        <div className="h-[2px] flex-1 bg-gray-200" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="left">
          <h2 className="text-xl">Calculate Shipping</h2>
          <p className="my-4 text-[15px]">
            Flat rate: <span className="text-[#088078] text-xl">5%</span>
          </p>
          <div className="px-8 py-2 border border-gray-300 rounded-md w-fit">
            <select className="outline-none bg-white text-gray-700">
              <option value="India">India</option>
              <option value="Philippines">Philippines</option>
            </select>
          </div>
          <div className="flex gap-6 my-4">
            <input
              type="text"
              className="outline-none border border-gray-300 px-3 py-3 rounded-sm flex-1"
              placeholder="State/Country"
            />
            <input
              type="text"
              className="outline-none border border-gray-300 px-3 py-3 rounded-sm flex-1"
              placeholder="PostCode/ZIP"
            />
          </div>

          <SubButton icon={<TiArrowShuffle />} btnName="Update" />
        </div>
        <div className="right border border-gray-200 p-8">
          <h3 className="text-xl mb-2">Cart Totals</h3>
          <div className="border border-gray-200">
            <div className="flex border-y border-t-0  justify-between  border-gray-200">
              <p className="flex-1 border-x border-gray-200 border-l-0 py-2 px-2">
                Cart Subtotal{" "}
              </p>
              <p className="flex-1 px-2 flex items-center text-[#088178] font-bold text-[18px]">
                ${subtotal} - 5% Dis
              </p>
            </div>
            <div className="flex border-y border-t-0  justify-between  border-gray-200">
              <p className="flex-1 border-x border-gray-200 border-l-0 py-2 px-2">
                Shipping
              </p>
              <p className="flex-1 px-2 flex items-center">Free Shipping</p>
            </div>
            <div className="flex justify-between ">
              <p className="flex-1 border-x border-gray-200 border-l-0 py-2 px-2">
                Total{" "}
              </p>
              <p className="flex-1 px-2 flex items-center text-[#088178] font-bold text-[18px]">
                ${disCount}
              </p>
            </div>
          </div>

          <SubButton icon={<AiFillCalendar />} btnName="Proceed To CheckOut" />
        </div>
      </div>

      <ApplyCoupan />
    </div>
  );
}

export default Cart;
