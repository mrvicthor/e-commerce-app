import React, { useState } from "react";
import "./content.css";
import Blocks from "./blocks";
import Modal from "./modal";

const Content = ({ images, indicators }) => {
  const [index, setIndex] = useState(0);

  const [isToggled, setIstoggled] = useState(false);

  const handlePageChange = (page) => {
    let n = page - index;
    setIndex(index + n);
  };

  const getItem = (i) => {
    const image = images.find((image) => image[index] === image[i]);
    console.log(image);
  };

  const addItem = () => {
    console.log("Item Added");
  };

  const subtractItem = () => {
    console.log("Items Subtracted");
  };

  const purchaseItem = () => {
    console.log("Shopping Started");
  };
  return (
    <div className="grid-container--content">
      {images.length > 0 && (
        <div className="desktop-image">
          <picture>
            <img
              src={images[index]}
              alt={index}
              onClick={() => {
                // console.log(images);
                // console.log(index);
                // setIstoggled(!isToggled);
                getItem(index);
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
        />
      ) : null}
      <article className="product-info flex" role="tabpanel">
        <h1 className="uppercase text-orange fs-400">Sneaker Company</h1>

        <p className="text-veryDarkBlue fs-700 bold-text letter-spacing-3">
          Fall Limited Edition
          <span className="text-veryDarkBlue fs-700">Sneakers</span>{" "}
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
