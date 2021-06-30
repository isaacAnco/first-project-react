import React from 'react';
import { Input } from '../../UI/Input';
import classes from './MealItemForm.module.css';

export function MealItemForm(props) {
	return (
		<form className={classes.form}>
			<Input label="Amount" input={{
				id: 'amount',
				type: 'number',
				min: '1',
				max: '5',
				defaultValue: '1'
			}} />
			<button>+ add</button>
		</form>
	)
}
