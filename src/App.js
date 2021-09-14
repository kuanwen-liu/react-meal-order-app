import React, { useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [shownCart, setShownCart] = useState(false);
  const showCartHandler = () => {
    setShownCart(true);
  };
  const closeCartHandler = () => {
    setShownCart(false);
  };

  return (
    <div>
      {shownCart && <Cart onClose={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
