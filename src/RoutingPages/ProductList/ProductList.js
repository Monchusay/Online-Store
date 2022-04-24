import React from "react";
import style from "./ProductList.module.css";
import ProductListItem from "./ProductListItem/ProductListItem";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

const ProductList = (props) => {
  let ProductListElement = props.ProductData.map((product) => (
    <ProductListItem
      ProductName={product.ProductName}
      Image={product.Image}
      Price={product.Price}
    />
  ));

  return (
    <div className={style.ProductList}>
      <div className={style.FilterList}>
        <span className={style.FilterListTitle}> Sort by: </span>
        <div className={style.FilterListElements}>
          <span className={style.FilterListElement}>
            By price <GoTriangleUp className={style.FilterListIcons} />
          </span>
          <span className={style.FilterListElement}>
            By price <GoTriangleDown className={style.FilterListIcons} />
          </span>
          <span className={style.FilterListElement}>
            By name <GoTriangleUp className={style.FilterListIcons} />
          </span>
          <span className={style.FilterListElement}>
            By name <GoTriangleDown className={style.FilterListIcons} />
          </span>
          <span className={style.FilterListElement}>
            By rating <GoTriangleUp className={style.FilterListIcons} />
          </span>
          <span className={style.FilterListElement}>
            By rating <GoTriangleDown className={style.FilterListIcons} />
          </span>
        </div>
      </div>
      <div className={style.GoodsList}>{ProductListElement}</div>
    </div>
  );
};

export default ProductList;
