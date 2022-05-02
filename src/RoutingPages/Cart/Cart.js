import React from 'react';
import style from "./Cart.module.css"

const Cart = ({active,setActive}) => {
    return (
        <div className={active? style.Cart1 : style.Cart} onClick={() => setActive(false)}>
            <div className={style.Blur}></div>
            <div className={style.CartContent}>
                <div className={style.CartHeader}>FFFFF</div>
                <ul>
                    <li>fffffff</li>
                    <li>fffffff</li>
                    <li>fffffff</li>
                    <li>fffffff</li>
                    <li>fffffff</li>
                </ul>
            </div>
        </div>
    );
};

export default Cart;