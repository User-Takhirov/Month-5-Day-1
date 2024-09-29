import React from "react";
import Style from "./TeamWork.module.css";
import { Buttons } from "../../Components/Buttons";

export const TeamWork = () => {
  return (
    <div className={Style.block}>
      <div className="container">
        <div className={Style.flex}>
          <h2 className={Style.title}>Simplify how your team works today.</h2>

          <Buttons
            btnColor={"white"}
            color={"#F3603C"}
            className={Style.btn}
            text="Get Started"
          />
        </div>
      </div>
    </div>
  );
};
