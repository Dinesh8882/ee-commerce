import React, { useContext, useEffect } from "react";
import Slider from "../../components/Slider";
import Services from "../../components/Services";
import Buttons from "../../components/Buttons";
import Cards from "../../components/Products";
import ServicesBanner from "../../components/ServicesBanner";
import PopularCategories from "../../components/PopularCategories";
import Banner from "../../components/Banner";
import SliderButton from "../../components/SliderButton";
import DealOfTheDay from "../../components/DealOfTheDay";
import NewArrivals from "../../components/NewArrivals";
import BestSell from "../../components/BestSell";
import { ContextProduct } from "../../context/ProjectContext";

function Home() {

  const {token ,setToken} = useContext(ContextProduct)
  
  useEffect(()=>{
    setToken(localStorage.getItem("token"))
  },[token])

  
  return (
    <div>
      <Slider />
      <Services />
      <Buttons viewMore="View More" isfalse={false} />
      <Cards />
      <ServicesBanner />
      <PopularCategories />
      <Banner />
      <SliderButton green_text="New" black_text="Arrivals" />
      <NewArrivals />
      <DealOfTheDay />
      {/* <SliderButton green_text="Featured" black_text="Brands"  /> */}
      <Buttons green_text="Monthly" black_text="Best Sell" isfalse={true} />
      <BestSell />
    </div>
  );
}

export default Home;
