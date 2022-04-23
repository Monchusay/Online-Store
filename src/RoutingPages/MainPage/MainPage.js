import React from "react"
import style from "./MainPage.module.css"

const MainPage = () => {
    return (
        <div className={style.MainPage}>
            <div className={style.LogoImage}>
                <img src="https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png" />
            </div>
            <div className={style.AboutBox}>
                Some basic information about the company. On the types of the proposed goods, the possibility of delivery. Possibly company history.
            </div>
            <div className={style.AdvantagesTitle}>
                Why do you have to chose US?
            </div>
            <div className={style.AdvantagesList}>
                <li className={style.AdvantagesListElement}> Advantage №1</li>
                <li className={style.AdvantagesListElement}> Advantage №2</li>
                <li className={style.AdvantagesListElement}> Advantage №3</li>
                <li className={style.AdvantagesListElement}> Advantage №4</li>
                <li className={style.AdvantagesListElement}> Advantage №5</li>
            </div>
            <div className={style.DiscountsImage}>
                <img src="https://img2.freepng.ru/20171128/b35/black-friday-sale-banner-png-clipart-picture-5a1d341e399841.2169558615118633262359.jpg"/>
            </div>
        </div>
    )
}
export default MainPage