import React from "react";
import style from "./Delivery.module.css";

const Delivery = () => {
  return (
    <div className={style.Delivery}>
      <div className={style.DeliveryTitle}>
        Choose a delivery location:
      </div>
      <div className={style.Map}>
        <img src="https://www.kv.by/sites/default/files/pictures/userpictures/2019/01/23/2359/foto_10.png"/>
      </div>
      <div className={style.DeliveryDetails}>
        Enter contact details:
        <textarea placeholder="Your number" className={style.DeliveryDetailsTextarea}></textarea>
        <textarea placeholder="Your name" className={style.DeliveryDetailsTextarea}></textarea>
      </div>
    </div>
  );
};

export default Delivery;
