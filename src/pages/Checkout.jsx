import React, { useState } from "react";
import CheckC_1 from "../components/checkoutComponent/CheckC_1";

import { LuUser } from "react-icons/lu";
import { RiPriceTagLine } from "react-icons/ri";
import SubButton from "../components/SubButton";
import { Link } from "react-router-dom";
import ApplyCoupan from "../components/ApplyCoupon";

function Checkout() {
  const [isOpen, setIsOpen] = useState(""); 
  const [isOpenLeft ,setIsOpenLeft] = useState("");
  const [isOpenRight,setIsOpenRight] = useState("");
  const checkC_1obj = [
    {
      icon: <LuUser className="text-[#8e8e90] text-[17px]" />,
      h4: "Already have an account?",
      subHeading: " Click here to login",
      isOpen: "left",
    },
    {
      icon: <RiPriceTagLine className="text-[#8e8e90] text-[17px]" />,
      h4: "Have a coupon?",
      subHeading: "Click here to enter your code",
      isOpen: "right",
    },
  ];

  const onClickHandler = (index) => {
    setIsOpen((prev) =>
      prev === checkC_1obj[index].isOpen ? "" : checkC_1obj[index].isOpen
    );
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-8 mb-8">
        {checkC_1obj.map((item, index) => {
          return (
            <CheckC_1
              key={index}
              icon={item.icon}
              h4={item.h4}
              subHeading={item.subHeading}
              onClickHandler={() => {
                onClickHandler(index);
              }}
            />
          );
        })}
      </div>
      <div
        className={`grid grid-cols-2  gap-8 overflow-hidden transition-all duration-700 origin-top`}
      >
        <div
          className={`border-gray-200 rounded-xl border ${
            isOpen === "left"
              ? "h-[100%] px-6 py-8 border-gray-200 overflow-visible"
              : "h-0 px-0 py-0 border-0 overflow-hidden"
          } `}
        >
          <p>
            If you have shopped with us before, please enter your details below.
            If you are a new customer, please proceed to the Billing & Shipping
            section.
          </p>
          <div className="flex flex-col my-5">
            <input
              type="text"
              placeholder="Username or Email"
              className="outline-none px-5 py-2 mb-3 rounded-sm border border-gray-200"
            />
            <input
              type="password"
              placeholder="Password"
              className="outline-none px-5 py-2 mb-3 rounded-sm border border-gray-200"
            />
          </div>
          <div className="flex items-center mb-7 justify-between">
            <p className="flex items-center gap-3">
              <input type="checkbox" />
              Remember me
            </p>
            <Link className="text-[#088078] ">Forgot password?</Link>
          </div>
          <SubButton btnName="Login" />
        </div>

        <div
          className={`border-gray-200 rounded-xl border ${
            isOpen === "right"
              ? "h-[100%] px-6 py-8 border-gray-200"
              : "h-0 px-0 py-0 border-0 overflow-hidden"
          } `}
        >
          <ApplyCoupan />
        </div>
      </div>
      klkjlk
    </div>
  );
}

export default Checkout;
