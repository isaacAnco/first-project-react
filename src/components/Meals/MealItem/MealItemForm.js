import React, { useRef, useState } from "react";
import { Input } from "../../UI/Input";
import classes from "./MealItemForm.module.css";

export function MealItemForm(props) {
	const [amountIsValid, setAmountisValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enterdAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enterdAmount;

    if (
      enterdAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
		setAmountisValid(false)
      return;
    }
	props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+ add</button>
	  {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
}
