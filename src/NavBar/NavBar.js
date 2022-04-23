import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsShopWindow } from "react-icons/bs";
import { BiCar } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AiOutlineFlag } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className={style.NavBar}>
      <div className={style.NavBarItem}>
        <NavLink to={"/MainPage"}>
          <AiOutlineFlag className={style.NavBarIcon} /> Main Page
        </NavLink>
      </div>
      <div className={style.NavBarItem}>
        <NavLink to={"/ProductList"}>
          <BsShopWindow className={style.NavBarIcon} /> Product List
        </NavLink>
      </div>
      <div className={style.NavBarItem}>
        <NavLink to={"/Delivery"}>
          <BiCar className={style.NavBarIcon} /> Delivery
        </NavLink>
      </div>
      <div className={style.NavBarItem}>
        <NavLink to={"/AboutUs"}>
          <AiOutlineQuestionCircle className={style.NavBarIcon} /> About Us
        </NavLink>
      </div>
      <div className={style.NavBarItem}>
        <NavLink to={"/Cart"}>
          <AiOutlineShoppingCart className={style.NavBarIcon} /> Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
