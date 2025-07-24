import React from "react";
import axios from "axios";
import fectedData from "../utils/fetchedData";
import { addProductToWishList, deletedWishList } from "../utils/wishlistUtils";

import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";

function Cards({ filteredProducts }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.wishList);

  const addProductInWishlist = (product) => {
    addProductToWishList(product, state, dispatch);
  };

  const deleteProductInWishlist = (id) => {
    deletedWishList(id,state,dispatch)
  };

  return (
    <div>
      <div
        className={`grid gap-8 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 ${
          filteredProducts.length ? "lg:grid-cols-4" : "lg:grid-cols-1"
        }`}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => {
            const isInWishList = state.wishList.some(
              (wish) => wish.id === item.id
            );
            return (
              <Card
                key={item.id}
                itemPrice={item.price}
                ratinStar="****"
                ratingPre="99%"
                imageUrl={item.imageUrl}
                item={item}
                title={item.title}
                tag={item.tag}
                categories={item.category}
                itemId={item.id}
                inWishList={isInWishList}
                addProductInWishlist={addProductInWishlist}
                deletedWishList={deleteProductInWishlist}
              />
            );
          })
        ) : (
          <p className="text-center text-gray-600 font-bold text-2xl">
            No products there{" "}
          </p>
        )}
      </div>
    </div>
  );
}

export default Cards;
