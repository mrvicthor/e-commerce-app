import React, { useState } from "react";

const Blocks = ({ images, handlePageChange, activeIndex }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="block-indicators" role="tablist">
      {images.map((image, index) => (
        <div
          role="tab"
          className={`${index === activeIndex ? "dot active" : "dot"}`}
          onClick={() => {
            setSelected(true);
          }}
          aria-selected={`${index === activeIndex ? "true" : "false"}`}
          key={index}
        >
          <picture>
            <img
              onClick={() => handlePageChange(index)}
              className="border-radius"
              src={image}
              alt={image}
            />
          </picture>
        </div>
      ))}
    </div>
  );
};

export default Blocks;
