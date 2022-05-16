import React, {useState} from 'react';
import style from "./Cart.module.css"
import CartElement from "./CartElement/CartElement";

const Cart = ({active,setActive}) => {

    /*let aaaa = props.CartData.map((cart)=> (
        <CartElement
            CartElementImage={cart.CartElementImage}
            CartElementName={cart.CartElementName}
        />
    ))
*/
    return (
        <div className={active? style.Cart1 : style.Cart} onClick={() => setActive(false)}>
            <div className={style.Blur}></div>
            <div className={style.CartContent}>
                dsadsadsdads
            </div>
        </div>
    );
};

export default Cart;