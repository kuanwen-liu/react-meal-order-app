import React from "react";

import classes from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <header>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </div>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="Meals" />
      </div>
    </header>
  );
};

export default Header;
