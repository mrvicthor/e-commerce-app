import React, { useState } from "react";
import "./imageSlider.css";

const ImageSlider = ({ images }) => {
  // takes in images as props
  const [index, setIndex] = useState(0);

  const slideRight = () => {
    setIndex((index + 1) % images.length);
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    images.length > 0 && (
      <div className="slider-container">
        <img src={images[index]} alt={index} />

        <div className="slider-buttons">
          <button className="slider-btn left" onClick={slideLeft}>
            <img src="icon-previous.svg" alt="previous arrow button" />
          </button>
          <button className="slider-btn right" onClick={slideRight}>
            {" "}
            <img src="icon-next.svg" alt="next arrow button" />
          </button>
        </div>
      </div>
    )
  );
};

export default ImageSlider;
