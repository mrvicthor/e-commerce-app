import React, { useState } from "react";
import "./header.css";
import Overlay from "./overlay";
import { NavLink, Link } from "react-router-dom";

const Header = ({ handleCart, len }) => {
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
      <Link to="/" className="header-logo">
        <img src="logo.svg" alt="logo" className="logo" />
      </Link>
      {clicked ? <Overlay /> : null}
      <nav>
        <ul
          id="primary-navigation"
          className="primary-navigation underline-indicator flex"
          data-visible={clicked ? "true" : "false"}
        >
          <li className="fs-200 letter-spacing-3" onClick={closeMenu}>
            <NavLink
              to="/"
              className={(navData) => {
                return navData.isActive ? "nav_active" : "";
              }}
            >
              Collections
            </NavLink>
          </li>
          <li className="fs-200 letter-spacing-3" onClick={closeMenu}>
            <NavLink
              to="/men"
              className={(navData) => {
                return navData.isActive ? "nav_active" : "";
              }}
            >
              Men
            </NavLink>
          </li>
          <li className="fs-200 letter-spacing-3" onClick={closeMenu}>
            <NavLink
              to="/women"
              className={(navData) => {
                return navData.isActive ? "nav_active" : "";
              }}
            >
              Women
            </NavLink>
          </li>
          <li onClick={closeMenu} className="fs-200 letter-spacing-3">
            <NavLink
              to="/about"
              className={(navData) => {
                return navData.isActive ? "nav_active" : "";
              }}
            >
              About
            </NavLink>
          </li>
          <li onClick={closeMenu} className="fs-200 letter-spacing-3">
            <NavLink
              to="/contact"
              className={(navData) => {
                return navData.isActive ? "nav_active" : "";
              }}
            >
              Contact
            </NavLink>
          </li>
          <li onClick={closeMenu} className="fs-200 letter-spacing-3">
            <NavLink
              to="/login"
              className={(navData) => {
                return navData.isActive ? "nav_active" : "";
              }}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header-profile flex">
        {!len ? null : <span className="banner-count">{len}</span>}
        <img src="icon-cart.svg" alt="the shopping cart" onClick={handleCart} />
        <img src="image-avatar.png" alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
