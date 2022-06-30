import React from "react";
import css from "./aboutme.module.css";
import aboutme from "../../images/aboutme.img.png";

function AboutMe() {
  return (
    <div className={css.container}>
      <h2 className={css.heading}>About Me</h2>

      <img className={css.image} src={aboutme} />
      <p className={css.aboutMe}>
        My journey into web development started with The School of Code in
        November 2021. Before discovering my love for coding, I was working as
        an English language teacher for 2 years, however I was looking to
        challenge myself and learn something new that could lead to a career I
        feel excited about!
        <br />
        <br />
        After an intense 16-weeks at The School of Code, I learned the technical
        and interpersonal skills necessary to start a career in web development.
        During the bootcamp I was exposed to a wide range of technologies and
        developed my soft skills all while learning and collaborating remotely.
        I’m excited to continue learning more and to enter a field that inspires
        me!
        <br />
        <br />
        As well as coding and learning new tech, I love surfing, learning
        Spanish, cooking and hiking!
      </p>
    </div>
  );
}

export default AboutMe;
