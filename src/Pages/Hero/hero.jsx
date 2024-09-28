import React from "react";
import style from "./hero.module.css";
import img from "./img/hero_IMG.png";
import { Buttons } from "../../Components/Buttons";

export const Hero = () => {
  return (
    <div className="container">
      <div className={style.main_block}>
        <div className={style["left_block"]}>
          <h1 className={style.title}>
            Bring everyone together to build better products.
          </h1>
          <p className={style.text}>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <Buttons text="Get Started" />
        </div>
        <div className={style.right_block}>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};
