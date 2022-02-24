import React, { useState } from "react";
import "./content.css";
import Blocks from "./blocks";
import Modal from "./modal";
import Article from "./Article";

const Content = ({
  products,
  handleIncrease,
  handleDecrease,
  handlePurchase,
  count,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (activeIndex) => {
    setActiveIndex(activeIndex);
  };

  const [isToggled, setIstoggled] = useState(false);

  const slideLeft = () =>
    setActiveIndex(activeIndex < 1 ? products.length - 1 : activeIndex - 1);

  const slideRight = () =>
    setActiveIndex(activeIndex === products.length - 1 ? 0 : activeIndex + 1);

  return (
    <div className="desktop__slide--container">
      {products.map((product, index) => (
        <div className={index === activeIndex ? "desktop__slides" : "inactive"}>
          <div
            className="desktop-image grid-col-span-2"
            key={index}
            onClick={() => setIstoggled(true)}
          >
            <picture>
              <img className="image-obj" src={product.imageURL} alt={index} />
            </picture>
          </div>
          <Article
            product={product}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
            onPurchase={handlePurchase}
            count={count}
          />
          <Blocks
            changeSlide={handleSlideChange}
            products={products}
            activeIndex={activeIndex}
          />
          {isToggled ? (
            <Modal
              products={products}
              activeIndex={activeIndex}
              prev={slideLeft}
              next={slideRight}
              changeSlide={handleSlideChange}
              onClose={() => setIstoggled(false)}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Content;
