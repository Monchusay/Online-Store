import React from "react";
import style from "./AboutUs.module.css";
import { ImYoutube } from "react-icons/im";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className={style.AboutUs}>
      <div className={style.AboutUsElement}>
        <ImYoutube className={style.AboutUsIcon} /> Our YouTube:
      </div>
      <div className={style.AboutUsElement}>
        <AiOutlineTwitter className={style.AboutUsIcon}/> Our Twitter:
      </div>
      <div className={style.AboutUsElement}>
        <FaTelegramPlane className={style.AboutUsIcon}/> Our Telegram:
      </div>
      <div className={style.AboutUsElement}>
        <AiFillInstagram className={style.AboutUsIcon} /> Our Instagram:
      </div>
    </div>
  );
};

export default AboutUs;
