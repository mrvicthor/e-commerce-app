import React from "react";

const CartItem = ({ item, count, onDelete }) => {
  let sum = 0;

  const total = item.price * count;
  sum += total;

  console.log(item);
  return (
    <div className="cart__list flex">
      <picture>
        <img src={item.imageURL} alt="cart-item" className="cart__image" />
      </picture>
      <article className="cart__product">
        <h5>{item.subtitle}</h5>
        <p>
          ${item.price} x {count} <span className="purchase__sum">${sum}</span>
        </p>
      </article>
      <button
        className="delete__btn text-dark-grayish-blue"
        onClick={() => onDelete(item.id)}
      >
        <i className="fa fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default CartItem;
