import React from "react";
import style from "./CartElement.module.css";

const CartElement = (props) => {
  return (
    <div className={style.CartElement}>
      <div className={style.CartElementImage}>
        <img src={props.Image} />
      </div>
      <div className={style.CartElementContent}>
        <span>{props.ProductName}</span>
        <span>{props.Price}$</span>
      </div>
    </div>
  );
};

export default CartElement;
