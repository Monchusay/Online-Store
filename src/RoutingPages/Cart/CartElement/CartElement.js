import React from "react"
import style from "./CartElement.module.css"

const CartElement = (props) => {
    return (
        <div className={style.CartElement}>
            <img src={props.CartElementImage}/>
            <span className={style.CartElementName}>{props.CartElementName}</span>
        </div>
    )
}

export default CartElement