import React from "react";
import { Buttons } from "../../Components/Buttons";
import style from "./footer.module.css";
import icon from "./img/icon.svg";
import facebook from "./img/facebook.svg";

export const Footer = () => {
  return (
    <div className={style.main_block}>
      <div className="container">
        <div className={style.block}>
          <div>
            <img className={style.icon} src={icon} alt="#" />
            <ul className={style.list}>
              <li>
                <a href="#">
                  <img src={facebook} alt="#" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={facebook} alt="#" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={facebook} alt="#" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={facebook} alt="#" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={facebook} alt="#" />
                </a>
              </li>
            </ul>
          </div>
          <ul>
            <li className={style.item}>
              <a className={style.link} href="#">
                Home
              </a>
            </li>
            <li className={style.item}>
              <a className={style.link} href="#">
                Home
              </a>
            </li>
            <li className={style.item}>
              <a className={style.link} href="#">
                Home
              </a>
            </li>
            <li>
              <a className={style.link} href="#">
                Home
              </a>
            </li>
          </ul>
          <ul>
            <li className={style.itemm}>
              <a className={style.linkk} href="#">
                Careers
              </a>
            </li>
            <li className={style.itemm}>
              <a className={style.linkk} href="#">
                Careers
              </a>
            </li>
            <li>
              <a className={style.linkk} href="#">
                Careers
              </a>
            </li>
          </ul>
          <div className={style.lastblock}>

          <div className={style.input_block}>
            <input
              className={style.input}
              placeholder="Updates in your inbox…"
              type="text"
            />
            <Buttons text="Go" />
          </div>
          <div>
            <p className={style.copyright}>Copyright 2020. All Rights Reserved</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
