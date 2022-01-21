import React, { useState } from "react";
import "./header.css";
import Overlay from "./overlay";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  return (
    <header className="primary-header flex">
      <button
        onClick={handleClick}
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
      >
        <span className="sr-only" aria-expanded={clicked ? "true" : "false"}>
          Menu
        </span>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
      </button>
      <div className="header-logo">
        <img src="logo.svg" alt="logo" className="logo" />
      </div>
      {clicked ? <Overlay /> : null}
      <nav>
        <ul
          id="primary-navigation"
          className="primary-navigation underline-indicator flex"
          data-visible={clicked ? "true" : "false"}
        >
          <li className="active" onClick={closeMenu}>
            <a href="#" className="fs-200 letter-spacing-3">
              Collections
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#" className="fs-200 letter-spacing-3">
              Men
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#" className="fs-200 letter-spacing-3">
              Women
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#" className="fs-200 letter-spacing-3">
              About
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#" className="fs-200 letter-spacing-3">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="header-profile flex">
        <img src="icon-cart.svg" alt="the shopping cart" />
        <img src="image-avatar.png" alt="image avatar" />
      </div>
    </header>
  );
};

export default Header;
