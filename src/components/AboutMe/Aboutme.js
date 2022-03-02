import React from "react";
import css from "./aboutme.module.css";
import img from "../../images/img.png";

function AboutMe() {
  return (
    <div className={css.container}>
      <h2 className={css.heading}>About Me</h2>
      {/* <img className={css.image} src={img} /> */}
      <p className={css.aboutMe}>
        Before discovering my love for web development and coding, I taught
        English online for over 2 years. I have a degree in Biology. I applied
        to The School of Code in 2021 to upskill and learn something that
        excited me. After 3 months learning new skills with The School of Code,
        <br />
        <br />i feel i have gained the technical and interpersonal skills
        necearry to start a career in web development and i'm looking forward to
        entering a field i feel passionate about. As well as learning new tech,
        I love surfing, learning spanish, cooking and hiking!
      </p>
    </div>
  );
}

export default AboutMe;
