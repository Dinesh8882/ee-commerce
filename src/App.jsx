import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/auth/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";


const Wishlist = lazy(() => import("./components/Wishlist"));

function Layout() {
  return (
    <div className="">
      <Navbar />
      <div className="sm:px-[2rem] px-[1rem] lg:px-[6rem] md:px-[1rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
