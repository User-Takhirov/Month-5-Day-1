import React from "react";
import style from "./buttons.module.css";

export const Buttons = ({text}) => {
  return <button className={style.btn}>{text}</button>;
};
