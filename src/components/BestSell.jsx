import React, { useEffect, useState } from "react";
import banner from "../assets/banner-9.jpg";
import { products } from "../assets/data";
import Card from "./Card";
import fectedData from "../utils/fetchedData";
import { useDispatch, useSelector } from "react-redux";
import { addProductToWishList, deletedWishList } from "../utils/wishlistUtils";

function BestSell() {
  const state = useSelector((state) => state.wishList);
  const dispatch = useDispatch();

  const addProductInWishlist = (product) => {
    addProductToWishList(product, state, dispatch);
  };

  const deleteProductInWishlist = (id) => {
    deletedWishList(id, state, dispatch);
  };

  return (
    <div className="flex gap-2 justify-between">
      <div className="w-[290px] hidden lg:block h-[340px] rounded-2xl overflow-hidden pr-4">
        <img
          src={banner}
          className="w-full h-full rounded-2xl object-cover"
          alt="banner"
        />
      </div>
      <div className="flex w-4xl overflow-x-auto gap-4 scrollbar-hide">
        {products.map((item, index) => {
          const isInWishList = state.wishList.some(
            (wish) => wish.id === item.id
          );
          return (
            <div key={index} className="flex-shrink-0 w-[200px]">
              <Card
                itemPrice={item.price}
                ratinStar="⭐⭐⭐⭐"
                ratingPre="90*"
                imageUrl={item.imageUrl}
                item={item}
                title={item.title}
                tag={item.tag}
                categories={item.category}
                addProductInWishlist={addProductInWishlist}
                deletedWishList={deleteProductInWishlist}
                inWishList={isInWishList}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BestSell;
