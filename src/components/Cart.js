import React from "react";
import ReactDom from "react-dom";
import CartItem from "./CartItem";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = ({ toggleCart, cart, handleDelete }) => {
  console.log(cart);
  return ReactDom.createPortal(
    <section className="cart__container flex" onClick={toggleCart}>
      <h3 className="cart__header text-veryDarkBlue bold-text">Cart</h3>
      {!cart.length ? (
        <div className="align__center bold-text">Cart is empty</div>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              item={item}
              key={item.id}
              count={item.qty}
              onDelete={handleDelete}
            />
          ))}
          <button className="check__out bg-orange text-white">
            <Link to="/login">Checkout</Link>
          </button>
        </>
      )}
      ;
    </section>,
    document.getElementById("portal")
  );
};

export default Cart;
