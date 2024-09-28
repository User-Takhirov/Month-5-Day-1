import React from "react";
import style from "./differences.module.css";
import { Cards } from "../../components/card/card";

export const Differences = () => {
  return (
    <div className="container">
        <div className={style.main_block}>
        <div className={style.content}>
        <h1 className={style.title}>What’s different about Manage?</h1>
        <p className={style.text}>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.{" "}
        </p>
      </div>
      <div>
        <Cards
          title="Track company-wide progress"
          text="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
        />
      </div>
        </div>
    
    </div>
  );
};
