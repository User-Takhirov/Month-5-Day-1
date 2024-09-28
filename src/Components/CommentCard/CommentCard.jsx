import React from "react";
import style from "./CommentCard.module.css";
import img from "./img/anisha.svg";

export const CommentCard = ({ title, text }) => {
  return (
    <div>
      <div className={style.block}>
        <div></div>
        <img className={style.img} src={img} alt="#" />
        <div className={style.content}>

        <h3 className={style.title}>{title}</h3>
        <p className={style.text}>{text}</p>
        </div>
      </div>
    </div>
  );
};
