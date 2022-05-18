import React, {useState} from 'react';
import style from "./Cart.module.css"
import CartElement from "./CartElement/CartElement";

const Cart = ({active, setActive, CartData}) => {

    let CartElements = CartData.map((cart)=> (
        <CartElement
            Image={cart.Image}
            ProductName={cart.ProductName}
            id={cart.id}
            key={cart.id}
            Price={cart.Price}
        />
    ))

    return (
        <div className={active? style.Cart1 : style.Cart} onClick={() => setActive(false)}>
            <div className={style.Blur}></div>
            <div className={style.CartContent}>
                {CartElements}
            </div>
        </div>
    );
};

export default Cart;