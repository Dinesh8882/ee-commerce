import React, { useContext } from "react";
import axios from "axios";
import fectedData from "../utils/fetchedData";

import Card from "./Card";
import { ContextProduct } from "../context/ProjectContext";
import { toast } from "react-toastify";

function Cards() {
  const { products, state, dispatch } = useContext(ContextProduct);

  const addToWishList = (product) => {
    if(!state.wishlist.some((item)=>item.id === product.id)){
      dispatch({ type: "ADD_TO_WISHLIST", payload: product });
      toast.success("Added to Favourite successfully!")
    }
  };

  const deletedWishList = (product) => {
    if(state.wishlist.some((item)=>item.id === product.id)){
      dispatch({ type: "DELETE_FROM_WISHLIST", payload: product });
      toast.success("Deleted successfully!")
    }

  };
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((item, index) => {
        const isInWishList = state.wishlist.some((wish) => wish.id === item.id);

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
            addToWishList={addToWishList}
            deletedWishList={deletedWishList}
          />
        );
      })}
    </div>
  );
}

export default Cards;
