import React from "react";
import axios from "axios";
import fectedData from "../utils/fetchedData";

import { useSelector, useDispatch } from "react-redux";
import { addToWishList, deleteToWishList } from "../features/wishlistSlice";
import Card from "./Card";
import { toast } from "react-toastify";
import { products } from "../assets/data";

function Cards({ filteredProducts }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.wishList);

  const addProductToWishList = (product) => {
    if (!state.wishList.some((item) => item.id === product.id)) {
      dispatch(addToWishList(product));
      toast.success("Added to Favourite successfully!");
    }
  };

  const deletedWishList = (id) => {
    if (state.wishList.some((item) => item.id === id)) {
      dispatch(deleteToWishList(id));
      toast.success("Deleted successfully!");
    }
  };
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
      {filteredProducts.map((item, index) => {
        const isInWishList = state.wishList.some((wish) => wish.id === item.id);
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
            addToWishList={addProductToWishList}
            deletedWishList={deletedWishList}
          />
        );
      })}
    </div>
  );
}

export default Cards;
