import React, { useEffect, useState } from "react";
import { products } from "../assets/data";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { addProductToWishList } from "../utils/wishlistUtils";

function NewArrivals() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.wishList);

  const addProductInWishlist = (product) => {
    addProductToWishList(product, state, dispatch);
  };

  const deleteProductInWishlist = (id) => {
    deletedWishList(id, state, dispatch);
  };

  return (
    <div className="flex gap-3 overflow-x-auto whitespace-nowrap mt-7 scrollbar-hide">
      {products.map((item) => {
        const isInWishList = state.wishList.some((wish) => wish.id === item.id);
        return (
          <div key={item.id} className="flex-shrink-0 w-[200px]  ">
            <Card
              imageUrl={item.imageUrl}
              tag={item.tag}
              itemRating="90%"
              ratinStar="⭐⭐⭐☆"
              title={item.category}
              itemPrice={item.price}
              addProductInWishlist={addProductInWishlist}
              ratingPre="99%"
              item={item}
              itemId={item.id}
              inWishList={isInWishList}
              deletedWishList={deleteProductInWishlist}
            />
          </div>
        );
      })}
    </div>
  );
}

export default NewArrivals;
