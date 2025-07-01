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
  };

  return (
    <ContextProduct.Provider value={values}>{children}</ContextProduct.Provider>
  );
}

export const useProductContext = () => useContext(ContextProduct);

export default ProdectContext;
