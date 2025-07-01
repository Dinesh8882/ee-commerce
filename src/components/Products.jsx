import React, { useContext } from "react";
import axios from "axios";
import fectedData from "../utils/fetchedData";

import Card from "./Card";
import { ContextProduct } from "../context/ProjectContext";

function Cards() {
  const { products, state, dispatch } = useContext(ContextProduct);

  const addToWishList = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product });
    
  };
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((item, index) => {
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
            inWishList={state.inWishList}
            addToWishList={addToWishList}
          />
        );
      })}
    </div>
  );
}

export default Cards;
