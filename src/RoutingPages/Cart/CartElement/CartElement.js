import React from "react"
import style from "./CartElement.module.css"

const CartElement = (props) => {
    return (
        <div className={style.CartElement}>
            <div className={style.CartElementImage}><img src={props.Image}/></div>
            <span className={style.CartElementName}>{props.ProductName}</span>
            <span>{props.Price}</span>
        </div>
    )
}

export default CartElement