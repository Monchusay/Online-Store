import React from "react";
import style from "./Delivery.module.css";
import { Map, YMaps } from "react-yandex-maps";

const Delivery = () => {
  return (
    <div className={style.Delivery}>
      <div className={style.DeliveryTitle}>Choose a delivery location:</div>
      <div className={style.Map}>
        <YMaps>
          <Map width='800px' height='500px' defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </YMaps>
      </div>
      <div className={style.DeliveryDetails}>
        Enter contact details:
        <textarea
          placeholder="Your number"
          className={style.DeliveryDetailsTextarea}
        ></textarea>
        <textarea
          placeholder="Your name"
          className={style.DeliveryDetailsTextarea}
        ></textarea>
      </div>
    </div>
  );
};

export default Delivery;
