import React, { Fragment } from 'react'
import { AvailableMeals } from './AvailableMeals'
import { MealsSummary } from './MealsSummary'

export function Meals() {
	return (
		<Fragment>
			<MealsSummary />
			<AvailableMeals /> 
		</Fragment>
	)
}
