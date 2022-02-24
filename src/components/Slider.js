import React, { useState } from "react";
import useBreakpoint from "../hooks/useBreakPoint";
import SliderContent from "./SliderContent";

import Arrows from "./Arrows";

export default function Slider({
  products,
  handleIncrease,
  handleDecrease,
  handlePurchase,
  isVisible,
  handleCart,
  cart,
  count,
}) {
  const len = products.length - 1;

  const breakpoints = useBreakpoint();
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = breakpoints === "xs";
  return (
    isMobile && (
      <div className="slider-container">
        <SliderContent
          activeIndex={activeIndex}
          products={products}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onPurchase={handlePurchase}
          isVisible={isVisible}
          handleCart={handleCart}
          cart={cart}
          // count={count}
        />
        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        />
      </div>
    )
  );
}
