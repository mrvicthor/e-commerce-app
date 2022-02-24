import React, { useState, useEffect } from "react";
import Content from "./components/content";
import products from "./data";
import Header from "./components/header";
import Slider from "./components/Slider";
import useBreakPoint from "./hooks/useBreakPoint";
import Cart from "./components/Cart";

function App() {
  const [data, setData] = useState(products);
  const [cart, setCart] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(1);
  const breakpoints = useBreakPoint();

  useEffect(() => {
    setData(data);
  }, []);

  useEffect(() => {
    setCart(cart);
  }, [cart]);

  const addItem = (prod) => {
    const items = [...data];
    const index = items.indexOf(prod);
    items[index] = { ...prod };
    items[index].qty++;
    setData(items);
    // setData((prevData) => {
    //   const newArray = [];
    //   for (let i = 0; i < prevData.length; i++) {
    //     const oldData = prevData[i];
    //     if (oldData.id === id) {
    //       newArray.push({ ...oldData, qty: oldData.qty + 1 });
    //     } else {
    //       newArray.push(oldData);
    //     }
    //   }
    //   return newArray;
    // });
    // setCount((prevCount) => prevCount + 1);
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
    <div className="App">
      <Header handleCart={displayCart} len={cart.length} />
      {isVisible && (
        <Cart
          cart={cart}
          count={count}
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
        // count={count}
        cart={cart}
        isVisible={isVisible}
      />
      {isDesktop && (
        <Content
          products={data}
          handleIncrease={addItem}
          handleDecrease={subtractItem}
          handlePurchase={purchaseItem}
          // count={count}
        />
      )}
    </div>
  );
}

export default App;
