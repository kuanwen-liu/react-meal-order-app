import React from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes["cart-items"]}></div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$55</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
