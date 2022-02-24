import React from "react";
import Article from "./Article";
import "./imageSlider.css";

const SliderContent = ({
  products,
  activeIndex,
  onIncrease,
  onDecrease,
  onPurchase,
  // count,
}) => {
  return (
    <div className="carousel__track">
      {products.map((product, index) => (
        <div
          className={index === activeIndex ? "slides activex" : "inactive"}
          key={index}
        >
          <img src={product.imageURL} alt={index} className="carousel-image" />

          <Article
            onIncrease={onIncrease}
            onPurchase={onPurchase}
            onDecrease={onDecrease}
            product={product}
            count={product.qty}
          />
        </div>
      ))}
    </div>
  );
};

export default SliderContent;
