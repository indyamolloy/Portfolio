import React from "react";
import css from "./aboutme.module.css";
import img from "../../images/img.png";

function AboutMe() {
  return (
    <div className={css.container}>
      <h2 className={css.heading}>About Me</h2>
      <img className={css.image} src={img} />
    </div>
  );
}

export default AboutMe;
