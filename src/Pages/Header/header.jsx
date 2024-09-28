import React from "react";
import icon from "./img/icon.svg";
import style from "./header.module.css";
import { Buttons } from "../../Components/Buttons";

export const Header = () => {
  return (
    <div className="container">
        <div className={style.block}>
        <div>
          <img src={icon} alt="#" />
        </div>
        <ul className={style.list}>
          <li className={style.item}>
            <a className={style.link} href="#">Pricing</a>
          </li>
          <li className={style.item}>
            <a className={style.link} href="#">Product</a>
          </li>
          <li className={style.item}>
            <a className={style.link} href="#">About Us</a>
          </li>
          <li className={style.item}>
            <a className={style.link} href="#">Careers</a>
          </li>
          <li className={style.item}>
            <a className={style.link} href="#">Community</a>
          </li>
        </ul>
        <Buttons text="Get Started" />
      </div>
    </div>
  );
};
