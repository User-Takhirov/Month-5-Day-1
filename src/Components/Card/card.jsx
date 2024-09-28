import React from "react";
import style from "./card.module.css";
import { Buttons } from "../Buttons";

export const Cards = ({ title, text }) => {
  return (
    <div>
 <div className={style.Main_block}>
      <div>
        <Buttons text="01" />
      </div>
      <div className={style.block}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.text}>{text}</p>
      </div>
    </div>
    <div className={style.Main_block}>
      <div>
        <Buttons text="02" />
      </div>
      <div className={style.block}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.text}>{text}</p>
      </div>
    </div>
    <div className={style.Main_block}>
      <div>
        <Buttons text="03" />
      </div>
      <div className={style.block}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.text}>{text}</p>
      </div>
    </div>
        
    </div>
   
    
  );
};
