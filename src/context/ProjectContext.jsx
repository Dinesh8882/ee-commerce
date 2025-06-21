import React, { createContext, useContext, useEffect, useState } from "react";

export const ContextProduct = createContext();

function ProdectContext({ children }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [scrollToIndex, setScrollToIndex] = useState(1);
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);


  const values = {
    currentIndex,
    setCurrentIndex,
    scrollToIndex,
    setScrollToIndex,
    token,
    setToken,
  };

  return (
    <ContextProduct.Provider value={values}>{children}</ContextProduct.Provider>
  );
}

export const useProductContext = () => useContext(ContextProduct);

export default ProdectContext;
