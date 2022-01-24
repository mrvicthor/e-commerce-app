import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import "./modal.css";

import Blocks from "./blocks";

const Modal = ({ images, onClose, modalImage }) => {
  const [index, setIndex] = useState(0);

  const handlePageChange = (page) => {
    let n = page - index;
    setIndex(index + n);
  };

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
        <div className="slider-container--desktop">
          {modalImage.length > 0 && (
            <div className="desktop-image">
              <picture>
                <img src={modalImage[index]} alt={index} />
              </picture>
            </div>
          )}
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
        <Blocks
          images={images}
          handlePageChange={handlePageChange}
          activeIndex={index}
          dataLength={images.length}
        />
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
