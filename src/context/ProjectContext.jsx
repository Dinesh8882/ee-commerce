import React, { createContext, useContext, useReducer, useState } from "react";
import { products } from "../assets/data";
import {
  wishCartReducer,
  wishlistOrCartInitialState,
} from "../reducers/CartWishListReducr";

export const ContextProduct = createContext();

function ProdectContext({ children }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [scrollToIndex, setScrollToIndex] = useState(1);
  const [token, setToken] = useState("");
  const [state, dispatch] = useReducer(
    wishCartReducer,
    wishlistOrCartInitialState
  );

  // const sum = 0;
  const total = state.cart.map((item)=>  item.totalPrice )

  const subtotal = total.reduce((acc, val) => acc + parseFloat(val), 0).toFixed(1);

  const disCount = (subtotal * (1 -  0.05)).toFixed(1)


  const values = {
    currentIndex,
    setCurrentIndex,
    scrollToIndex,
    setScrollToIndex,
    token,
    setToken,
    products,
    state,
    dispatch,
    subtotal,
    disCount,
  };

  return (
    <ContextProduct.Provider value={values}>{children}</ContextProduct.Provider>
  );
}

export const useProductContext = () => useContext(ContextProduct);

export default ProdectContext;
