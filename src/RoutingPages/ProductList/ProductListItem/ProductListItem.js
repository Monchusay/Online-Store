import React from "react"
import style from "./ProductListItem.module.css"

const ProductListItem = (props) => {
    return (
        <div className={style.ProductListItem}>
            <div className={style.ProductListItemBox}>
            <span>{props.ProductName}</span>
            <img src={props.Image}/>
            <span>Price: {props.Price}</span>
            <button className={style.AddToCartButton}> Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductListItem