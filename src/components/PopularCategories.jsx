import React, { useRef, useState } from "react";
import { categories } from "../assets/data";
import SliderButton from "./SliderButton";

function PopularCategories() {
  const scrollRef = useRef(null);
  // const [translate, setTranslate] = useState(0);
  const [count, setCount] = useState(0);

  const extraCategories = [
    categories[categories.length - 1],
    ...categories,
    categories[0],
  ];

  const handleClick = () => {
    const container = scrollRef.current;
    const cards = container.querySelectorAll(".card");

    const cardWidth = cards[0].getBoundingClientRect().width;
    container.scrollBy({
      left: cardWidth + 20, // 16 = gap-4 (1rem)
      behavior: "smooth",
    });
  };

  const prevClick = () => {
    const container = scrollRef.current;
    const cards = container.querySelectorAll(".card");

    const cardWidth = cards[0].getBoundingClientRect().width;
    container.scrollBy({
      left: -(cardWidth - 20), // 16 = gap-4 (1rem)
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="mb-7">
        <SliderButton
          green_text="Popular"
          black_text="Categories"
          onNextClick={handleClick}
          onPrevClick={prevClick}
        />
      </div>

      <div
        ref={scrollRef}
        className="categories flex gap-4 overflow-x-auto scrollbar-hide px-2 "
      >
        {extraCategories.map((item, index) => (
          <div
            key={index}
            className={`card min-w-[150px] p-3 border border-gray-300 flex-shrink-0 flex flex-col rounded-xl`}
          >
            <div className="rounded-xl overflow-hidden">
              <img
                src={item.img}
                alt={item.category}
                className="w-full h-32 object-cover"
              />
            </div>
            <h3 className="text-center text-[#788397] font-bold mt-3">
              {item.category}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCategories;
