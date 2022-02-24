import React from "react";

export default function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <button className="carousel__button prev" onClick={prevSlide}>
        <img src="icon-previous.svg" alt="previous arrow button" />
      </button>
      <button className="carousel__button next" onClick={nextSlide}>
        {" "}
        <img src="icon-next.svg" alt="next arrow button" />
      </button>
    </div>
  );
}
