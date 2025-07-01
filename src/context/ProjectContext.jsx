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

  const subtotal = state.cart.reduce((sum, product) => Number(sum + product.totalPrice), 0)

  const disCountTotal = Math.floor(subtotal * 0.95);


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
    disCountTotal,
  };

  return (
    <ContextProduct.Provider value={values}>{children}</ContextProduct.Provider>
  );
}

export const useProductContext = () => useContext(ContextProduct);

export default ProdectContext;
