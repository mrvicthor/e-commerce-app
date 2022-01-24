import React, { useState } from "react";
import "./content.css";
import Blocks from "./blocks";
import Modal from "./modal";

const Content = ({ images }) => {
  const [index, setIndex] = useState(0);

  const [isToggled, setIstoggled] = useState(false);

  const [modalImage, setModalImage] = useState([]);

  const handlePageChange = (page) => {
    let n = page - index;
    setIndex(index + n);
  };

  const handleModalDisplay = (i) => {
    const item = images.find((image, index) => {
      if (index === i) return image;
    });
    setModalImage(item);
  };

  const addItem = () => {
    console.log("Item Added");
  };

  const subtractItem = () => {
    console.log("Items Subtracted");
  };

  const purchaseItem = () => {
    console.log(modalImage);
    console.log("Shopping Started");
  };
  return (
    <div className="grid-container--content">
      {images.length > 0 && (
        <div className="desktop-image" onClick={() => setIstoggled(true)}>
          <picture>
            <img
              className="image-obj"
              src={images[index]}
              alt={index}
              onClick={() => {
                handleModalDisplay(index);
              }}
            />
          </picture>
        </div>
      )}

      <Blocks
        activeIndex={index}
        handlePageChange={handlePageChange}
        images={images}
        dataLength={images.length}
      />
      {isToggled ? (
        <Modal
          images={images}
          handlePageChange={handlePageChange}
          activeIndex={index}
          dataLength={images.length}
          onClose={() => setIstoggled(false)}
          modalImage={modalImage}
        />
      ) : null}
      <article className="product-info flex" role="tabpanel">
        <h1 className="uppercase text-orange fs-400">Sneaker Company</h1>

        <p className="text-veryDarkBlue bold-text letter-spacing-3">
          Fall Limited Edition
          <span className="text-veryDarkBlue">Sneakers</span>{" "}
        </p>

        <p className="text-dark-grayish-blue fs-300">
          {" "}
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex price-info">
          <h2 className="text-veryDarkBlue">
            $125.00
            <span className="fs-600 bg-pale-orange">50%</span>
          </h2>
          <p className="line-across fs-600">$250.00</p>
        </div>
        <div className="buttons flex">
          <div className="control-btn flex">
            <button onClick={subtractItem}>-</button>
            <button>0</button>
            <button onClick={addItem}>+</button>
          </div>
          <button
            onClick={purchaseItem}
            className="shopping-cart bg-orange text-white"
          >
            <i className="fas fa-shopping-cart"></i>
            Add to cart
          </button>
        </div>
      </article>
    </div>
  );
};

export default Content;
