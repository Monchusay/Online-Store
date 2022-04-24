import React from "react";
import style from "./Header.module.css"

const Header = () => {
    return (
        <div className={style.Header}>
            <div className={style.StoreNameAndLogo}>
            <img src="https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png" /> store name
            </div>
        </div>
    )
}

export default Header