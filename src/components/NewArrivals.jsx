import React, { useEffect, useState } from "react";
import { products } from "../assets/data";
import Card from "./Card";

function NewArrivals() {
  

  return (
    <div className="flex gap-3 overflow-x-auto whitespace-nowrap mt-7 scrollbar-hide">
      {products.map((item, index) => {
        return (
          <div key={index} className="flex-shrink-0 w-[200px]  ">
            <Card
              imageUrl={item.imageUrl}
              tag={item.tag}
              itemRating="90%"
              ratinStar="⭐⭐⭐☆"
              title={item.category}
              itemPrice={item.price}
            />
          </div>
        );
      })}
    </div>
  );
}

export default NewArrivals;
