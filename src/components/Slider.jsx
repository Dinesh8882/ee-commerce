import React, { useState ,useEffect} from "react";

import img1 from "../assets/slider-1.png";
import img2 from "../assets/slider-2.png";
import img3 from "../assets/slider-3.png";

function Slider() {
  const [currentIndex,setCurrentIndex] = useState(1)

  const slidersData = [
    {
      img: img1,
      h4: "Trade-in offer",
      h2: `Supper value  deals`,
      h1: `On all  products`,
      p: "Save more with coupons & up to 70% off",
      btn: "Shop now",
    },
    {
      img: img2,
      h4: "Hot promotions",
      h2: "Fashion Trending",
      h1: "Great Collection",
      p: "Save more with coupons & up to 20% off",
      btn: "Discover now",
    },
    {
      img: img3,
      h4: "Upcoming Offer",
      h2: "Big Deals From",
      h1: "Manufacturer",
      p: "Clothing, Shoes, Bags, Wallets...",
      btn: "Shop now",
    },
  ];
  
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slidersData.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="sliders h-[100dvh] lg:h-[420px] w-full mt-2 md:mt-[4rem] overflow-hidden transition-all duration-700">
       <div key={currentIndex} className="slider  md:py-8 flex flex-col md:flex-row items-center justify-between transition-all duration-300">
            <div className="left  flex flex-col items-center md:items-start">
              <h4 className="md:text-2xl text-sm mb-2 md:mb-5">{slidersData[currentIndex].h4}</h4>
              <h2 className="text-2xl md:text-5xl mb-2 md:mb-5 font-bold text-gray-800">
                {slidersData[currentIndex].h2}
              </h2>
              <h1 className="text-3xl md:text-6xl mb-2 md:mb-5 text-[#088178] font-bold">
              {slidersData[currentIndex].h1}
              </h1>
              <p className="text-sm md:text-xl mb-2 md:mb-5 text-gray-400">
              {slidersData[currentIndex].p}
              </p>
              <button className="px-8 py-2 text-[#088178] bg-[#fce1bd]">
              {slidersData[currentIndex].btn}
              </button>
            </div>
            <div className="rig mt-[4rem] md:mt-0 w-[600px] overflow-hidden">
              <img src={slidersData[currentIndex].img} className="w-full h-full object-cover" alt="" />
            </div>
          </div>
    </div>
  );
}

export default Slider;
