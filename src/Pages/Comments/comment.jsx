import React from "react";
import style from "./comments.module.css";
import { CommentCard } from "../../Components/CommentCard/CommentCard";
import { Buttons } from "../../Components/Buttons";

export const Comments = () => {
  return (
    <div>
      <div className={style.block}>
        <CommentCard
          title="Anisha Li"
          text="  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
        />
        <CommentCard
          title="Ali Bravo"
          text="  ““We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.””"
        />
      </div>
      <div className={style.btn}>
        <Buttons text="Get Started" />
      </div>
    </div>
  );
};
