import React from "react";
import css from "./skills.module.css";

function Skills(props) {
  return (
    <div className={css.container}>
      <div className={css.heading}>Skills</div>
      <div className={css.description}>
        <ul>
          <li>Agile Methodology </li>
        </ul>
      </div>
      <div className={css.heading}>Tools</div>
      <div className={css.description}>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Git & GitHub</li>
          <li>Node & Express</li>
          <li>SQL</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
