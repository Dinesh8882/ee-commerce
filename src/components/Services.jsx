import React from "react";

import feature_1 from "../assets/feature-1.png";
import feature_2 from "../assets/feature-2.png";
import feature_3 from "../assets/feature-3.png";
import feature_4 from "../assets/feature-4.png";
import feature_5 from "../assets/feature-5.png";
import feature_6 from "../assets/feature-6.png";

function Services() {
  const features = [
    {
      img: feature_1,
      h4: "Free Shipping",
      bgColor: "#fddde4",
    },
    {
      img: feature_2,
      h4: "Online Order",
      bgColor: "#d1e8f2",
    },
    {
      img: feature_3,
      h4: "Save Money",
      bgColor: "#cdebbc",
    },
    {
      img: feature_4,
      h4: "Promotions",
      bgColor: "#cdd4f8",
    },
    {
      img: feature_5,
      h4: "Happy Sell",
      bgColor: "#f6dbf6",
    },
    {
      img: feature_6,
      h4: "24/7 Support",
      bgColor: "#fff2e5",
    },
  ];

  return (
    <div className="grid mt-[1rem] gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {features.map((item, index) => {
        return (
          <div
            className="border rounded-sm hover:-translate-y-2 transition-all duration-200 border-gray-300 flex flex-col items-center p-4 py-6"
            key={index}
          >
            <img src={item.img} alt="" />
            <h4
              style={{ backgroundColor: item.bgColor }}
              className="mt-8 rounded-sm p-1 px-2 text-[12px] text-[#14857d] font-bold "
            >
              {item.h4}
            </h4>
          </div>
        );
      })}
    </div>
  );
}

export default Services;
