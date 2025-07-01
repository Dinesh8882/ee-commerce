import React, { useContext } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { BsBagDash } from "react-icons/bs";

import { TiHeartFullOutline } from "react-icons/ti";

function Card({
  index,
  tag,
  categories,
  title,
  imageUrl,
  ratinStar,
  ratingPre,
  itemPrice,
  inWishList,
  addToWishList,
  item,
}) {
 

  return (
    <div
      key={index}
      className={`card rounded-3xl p-3 ${
        categories && "border border-gray-300"
      } cursor-pointer relative group`}
    >
      <div className="top-card overflow-hidden rounded-2xl relative">
        <img
          src={`${imageUrl.front_img}`}
          className="group-hover:opacity-0 w-full object-cover transition-all duration-900"
          alt="product"
        />
        <img
          src={`${imageUrl.back_img}`}
          className="absolute opacity-0 w-full top-0 left-0 group-hover:opacity-100 z-10 group-hover:scale-[1.1] transition-all duration-1000"
          alt="product"
        />
        <div className=" absolute flex justify-center items-center opacity-0 top-0 left-0 w-full h-full group-hover:opacity-100 z-10">
          {inWishList ? (
            <div className="w-[30px] h-[30px] active:bg-[#088178] hover:bg-[#1e3130] hover:text-white bg-white text-[#088178] flex justify-center items-center rounded-full">
              <TiHeartFullOutline className="text-red-400" />
            </div>
          ) : (
            <div className="w-[30px] h-[30px] active:bg-[#088178] hover:bg-[#1e3130] hover:text-white bg-white text-[#088178] flex justify-center items-center rounded-full">
              <FaRegHeart
                onClick={() => addToWishList(item)}
                className="text-green-400"
              />
            </div>
          )}
        </div>
        <div
          className={`tag  absolute top-3 px-2 py-[1px] rounded-2xl text-white text-[12px] left-2`}
          style={{ backgroundColor: tag.bgColor }}
        >
          {tag.name}
        </div>
      </div>
      <div className={`bottom-card py-3 ${!categories && "p-3"}`}>
        {categories && (
          <p className="text-[13px] text-gray-400">{categories}</p>
        )}
        <h4 className="text-[17px] text-gray-800 font-bold">{title}</h4>
        <p>
          <span className="text-yellow-500 text-[10px] ">{ratinStar}</span>{" "}
          {"  "}
          {ratingPre}
        </p>
        <div className="price">
          <span className="current-price mr-2 text-[#198a82] text-[15px] font-bold">
            ${itemPrice.current}
          </span>
          <span className="original-price line-through text-gray-400 ">
            {itemPrice.original}
          </span>
        </div>
      </div>
      {categories && (
        <p className="bg-[#e8f6ea] border border-gray-300 w-9 h-9 rounded-full flex justify-center items-center absolute bottom-8 right-8">
          <BsBagDash className=" text-[#198a82] " />
        </p>
      )}
    </div>
  );
}

export default Card;
