import React, { lazy } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/auth/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import UserLogin from "./pages/UserLogin";
import Profile from "./pages/dashboard/Profile";

// Protected routes
import Protected from "./protectedRoutes/Protected";
import LoginProtected from "./protectedRoutes/LoginProtected";
import UserRegister from "./pages/UserRegister";

const Wishlist = lazy(() => import("./components/Wishlist"));

function Layout() {
  return (
    <div className="">
      <Navbar />
      <div className="sm:px-[2rem] px-[1rem] md:px-[6rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          {/* <Route path="/cart" element={<Wishlist />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop/checkout" element={<Checkout />} />
          <Route
            path="/user/login"
            element={
              <LoginProtected>
                <UserLogin />
              </LoginProtected>
            }
          />
          <Route
            path="/user/register"
            element={
              <LoginProtected>
                <UserRegister />
              </LoginProtected>
            }
          />
          <Route
            path="/user/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
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
