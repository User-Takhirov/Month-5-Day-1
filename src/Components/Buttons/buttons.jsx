import React from "react";
import style from "./buttons.module.css";

export const Buttons = ({ text, btnColor, color }) => {
  return <button style={{background: btnColor, color: color}}  className={style.btn}>{text}</button>;
};
