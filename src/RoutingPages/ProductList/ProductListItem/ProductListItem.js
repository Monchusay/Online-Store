import React from "react"
import style from "./ProductListItem.module.css"

const ProductListItem = () => {
    return (
        <div className={style.ProductListItem}>
            <div className={style.ProductListItemBox}>
            <span>ProductName</span>
            <img src="https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg"/>
            <span>Price:</span>
            <button className={style.AddToCartButton}> Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductListItem