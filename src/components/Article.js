import React from "react";

export default function Article({
  onIncrease,
  onDecrease,
  onPurchase,
  product,
  count,
}) {
  return (
    <article className="product-info flex" role="tabpanel">
      <h1 className="uppercase text-orange fs-400">{product.title}</h1>

      <p className="text-veryDarkBlue bold-text letter-spacing-3">
        {product.subtitle}
        <span className="text-veryDarkBlue">{product.name}</span>{" "}
      </p>

      <p className="text-dark-grayish-blue fs-300">{product.description}</p>
      <div className="flex price-info">
        <h2 className="text-veryDarkBlue">
          ${product.price}
          <span className="fs-600 bg-pale-orange">50%</span>
        </h2>
        <p className="line-across fs-600">$250.00</p>
      </div>
      <div className="buttons flex">
        <div className="control-btn flex">
          <button
            onClick={() => onDecrease(product)}
            disabled={product.qty === 1 ? "disabled" : ""}
          >
            -
          </button>
          <button>{product.qty}</button>
          <button onClick={() => onIncrease(product)}>+</button>
        </div>
        <button
          onClick={() => onPurchase(product.id)}
          className="shopping-cart bg-orange text-white"
        >
          <i className="fas fa-shopping-cart"></i>
          Add to cart
        </button>
      </div>
    </article>
  );
}
