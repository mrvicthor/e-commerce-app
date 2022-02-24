import React, { useState } from "react";
import ReactDom from "react-dom";
import "./modal.css";
import Blocks from "./blocks";
import Arrows from "./Arrows";

const Modal = ({ onClose, activeIndex, changeSlide, products, next, prev }) => {
  return ReactDom.createPortal(
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-wrapper--content">
        <img
          src="icon-close.svg"
          alt="close modal"
          className="close-btn"
          onClick={onClose}
        />
        <div className="modal__desktop">
          {products.map((product, index) => (
            <div
              className={activeIndex === index ? "modal__slide" : "inactive"}
              key={index}
            >
              <picture>
                <img src={product.imageURL} alt={index} />
              </picture>
            </div>
          ))}

          <Arrows prevSlide={prev} nextSlide={next} />
          <Blocks
            products={products}
            changeSlide={changeSlide}
            activeIndex={activeIndex}
          />
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
