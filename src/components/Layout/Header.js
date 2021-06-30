import React, { Fragment } from 'react';
import mealsImage from '../../asset/meals.jpg';
import classes from './Header.module.css';
import HeaderCarButton from './HeaderCartButton';

export function Header(props) {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>reactMeals</h1>
				<HeaderCarButton onClick={props.onShowCart} />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt="A table full of delecious food" />	
			</div>
		</Fragment>
	)
}
