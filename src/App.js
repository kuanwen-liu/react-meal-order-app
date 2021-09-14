import React, { useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartContextProvider";

function App() {
  const [shownCart, setShownCart] = useState(false);
  const showCartHandler = () => {
    setShownCart(true);
  };
  const closeCartHandler = () => {
    setShownCart(false);
  };

  return (
    <CartProvider>
      {shownCart && <Cart onClose={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
