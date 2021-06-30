import React from "react";
// import { CartContext } from "../../Store/cart-context";
import { Carticon } from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCarButton(props) {
  // const cartCtx = useContext(CartContext);
  
  // const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // });

  return (
    <button className={classes.button} onClick={props.onClick} >
      <span className={classes.icon}>
        <Carticon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}
