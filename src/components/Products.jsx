import React, { useEffect ,useState} from "react";
import axios from "axios";
import fectedData from "../utils/fetchedData";


import { products } from "../assets/data";
import Card from "./Card";

function Cards() {
  
  

  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((item, index) => {
        return (
          <Card
            key={index}
            itemPrice={item.price}
            ratinStar="****"
            ratingPre="99%"
            imageUrl={item.imageUrl}
            item={item}
            title={item.title}
            tag={item.tag}
            categories={item.category}
            itemId={item.id}
            inWishList={item.inWishList}z
          />
        );
      })}
    </div>
  );
}

export default Cards;
