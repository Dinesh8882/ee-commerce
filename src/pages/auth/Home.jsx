import React, { useEffect, useState } from "react";
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

import { products, populers_products } from "../../assets/data";

function Home() {
  const [activeButton, setActiveButton] = useState("featured");
  const [filteredProducts, setFilteredProducts] = useState([]);



  const buttons = [
    { btn: "Featured" },
    { btn: "Popular" },
    { btn: "New added" },
  ];

  useEffect(() => {
    if (activeButton === "featured") {
      setFilteredProducts(products);
    } else if (activeButton === "popular") {
      setFilteredProducts(populers_products);
    }
    else{
      setFilteredProducts([])
    }
  }, [activeButton]);

  return (
    <div>
      <Slider />
      <Services />
      <Buttons
        buttons={buttons}
        setActiveButton={setActiveButton}
        activeButton={activeButton}
        viewMore="View More"
        isfalse={false}
      />
      <Cards filteredProducts={filteredProducts} />
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
