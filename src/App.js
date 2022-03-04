import React, { useState, useEffect } from "react";
import Content from "./components/content";
import products from "./data";
import Header from "./components/header";
import Slider from "./components/Slider";
import useBreakPoint from "./hooks/useBreakPoint";
import Cart from "./components/Cart";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Collections from "./components/Collections";
import Men from "./components/Men";
import Women from "./components/Women";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";

function App() {
  const [data, setData] = useState(products);
  const [cart, setCart] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const breakpoints = useBreakPoint();

  useEffect(() => {
    setData(data);
  }, [data]);

  useEffect(() => {
    setCart(cart);
  }, [cart]);

  const addItem = (prod) => {
    const items = [...data];
    const index = items.indexOf(prod);
    items[index] = { ...prod };
    items[index].qty++;
    setData(items);
  };

  const subtractItem = (prod) => {
    const items = [...data];
    const index = items.indexOf(prod);
    items[index] = { ...prod };
    items[index].qty--;
    setData(items);
  };

  const displayCart = () => {
    setIsVisible(!isVisible);
  };

  const deleteItemFromCart = (id) => {
    const cartItemsLeft = cart.filter((c) => c.id !== id);
    setCart(cartItemsLeft);
  };

  const purchaseItem = (id) => {
    const item = data.find((item) => item.id === id);
    setCart([...cart, item]);
  };

  const isDesktop = breakpoints === "sm";
  return (
    <Router>
      <div className="App">
        <Header handleCart={displayCart} len={cart.length} />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={
              <>
                {isVisible && (
                  <Cart
                    cart={cart}
                    handleCart={displayCart}
                    handleDelete={deleteItemFromCart}
                  />
                )}
                <Slider
                  products={data}
                  handleIncrease={addItem}
                  handleDecrease={subtractItem}
                  handlePurchase={purchaseItem}
                  handleCart={displayCart}
                  cart={cart}
                  isVisible={isVisible}
                />
                {isDesktop && (
                  <Content
                    products={data}
                    handleIncrease={addItem}
                    handleDecrease={subtractItem}
                    handlePurchase={purchaseItem}
                  />
                )}
              </>
            }
          />
          <Route path="/collections" element={<Navigate replace to="/" />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
