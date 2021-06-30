import React from "react";
import { Modal } from "../UI/Modal";
import classes from "./Cart.module.css";

export function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "hogdog", amount: 3, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose} >
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>33.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose} >Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
