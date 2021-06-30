import React from "react";
import classes from './MealsSummary.module.css';

export function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2>Delecious food</h2>
      <p>
        choose your Favorite meal from our broad selection of available meals
        and enjoy a delecious lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with high-aquality ingredients, just-in-time
        and of course by experinced chefs
      </p>
    </section>
  );
}
