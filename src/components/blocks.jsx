import React from "react";

const Blocks = ({ products, activeIndex, changeSlide }) => {
  return (
    <div className="block-indicators" role="tablist">
      {products.map((product, index) => (
        <div
          role="tab"
          className={`${activeIndex === index ? "dot active" : "dot"}`}
          onClick={() => {
            changeSlide(index);
          }}
          aria-selected={`${activeIndex === index ? "true" : "false"}`}
          key={index}
        >
          <picture>
            <img
              className="border-radius"
              src={product.imageURL}
              alt={product.imageURL}
            />
          </picture>
        </div>
      ))}
    </div>
  );
};

export default Blocks;
