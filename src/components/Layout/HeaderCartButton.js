import React, { useContext, useEffect, useState } from "react";
import { Carticon } from "../Cart/CartIcon";
import { CartContext } from "../../Store/cart-context";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCarButton(props) {
  const [btnIshighLighted, setBtnIshighLighted] = useState(false);
  const cartCtx = useContext(CartContext);
  
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${btnIshighLighted ?  classes.bump : '' }`;
  
  useEffect(() => {
    if(items.length === 0){
      return;
    }
    setBtnIshighLighted(true);

    const timer = setTimeout(() => {
      setBtnIshighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer)
    }

  }, [items]);


  return (
    <button className={btnClasses} onClick={props.onClick} >
      <span className={classes.icon}>
        <Carticon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}
