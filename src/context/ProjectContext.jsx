import React, { createContext, useContext, useEffect, useState } from "react";

import { products } from "../assets/data";

export const ContextProduct = createContext();

function ProdectContext({ children }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [scrollToIndex, setScrollToIndex] = useState(1);
  const [token, setToken] = useState("");

  const [wishList, setWishList] = useState([]);
  const [addToCart, setAddToCart] = useState([]);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  // Add to WishList
  const addProductToWishList = (id) => {
    const product = products.find((item) => item.id === id);
    if (product && !wishList.some((item) => item.id === product.id)) {
      product.inWishList = true;
      setWishList([...wishList, product]);
    }
  };

  // Delete item from Wish List
  const deleteProductToWishList = (id) => {
    const updatedWishList = wishList.filter((item) => item.id !== id);
    setWishList(updatedWishList);
    const product = products.find((item) => item.id === id);
    if (product) {
      product.inWishList = false;
    }
  };

  // Add to Cart
  const addProductToCart = (id) => {
    const product = products.find((item) => item.id === id);
    if (product && !addToCart.some((item) => item.id === product.id)) {
      setAddToCart([...addToCart, product]);
    }    
  };


  const deleteProductFromCart =(id)=>{
    const deleteProduct = addToCart.filter((item)=>item.id !== id)
    setAddToCart(deleteProduct);
  }

  const values = {
    currentIndex,
    setCurrentIndex,
    scrollToIndex,
    setScrollToIndex,
    token,
    setToken,
    wishList,
    addProductToWishList,
    deleteProductToWishList,
    addProductToCart,
    addToCart,
    deleteProductFromCart
  };

  return (
    <ContextProduct.Provider value={values}>{children}</ContextProduct.Provider>
  );
}

export const useProductContext = () => useContext(ContextProduct);

export default ProdectContext;
