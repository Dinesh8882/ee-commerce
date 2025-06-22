import React, { createContext, useContext, useEffect, useState } from "react";

import { products } from "../assets/data";

export const ContextProduct = createContext();

function ProdectContext({ children }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [scrollToIndex, setScrollToIndex] = useState(1);
  const [token, setToken] = useState("");

  const [wishList,setWishList] = useState([]);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);


  // Add to WishList
  const addProductToWishList = (id)=>{
    const product = products.find((item)=> item.id === id)
    if(product && !wishList.some(item => item.id === product.id)){
      setWishList([...wishList,product])
    } 
  }

  // console.log(wishList);
  

  const values = {
    currentIndex,
    setCurrentIndex,
    scrollToIndex,
    setScrollToIndex,
    token,
    setToken,
    wishList,
   addProductToWishList
  };

  return (
    <ContextProduct.Provider value={values}>{children}</ContextProduct.Provider>
  );
}

export const useProductContext = () => useContext(ContextProduct);

export default ProdectContext;
