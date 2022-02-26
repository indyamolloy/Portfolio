import React from "react";
import css from "./skills.module.css";

function Skills() {
  return (
    <div id="about" className={css.container}>
      <h2 className={css.heading}> About</h2>
      <div className={css.whiteOverlay}>
        <p className={css.title}>
          Skills
          <ul className={css.list}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScipt</li>
            <li>React</li>
            <li> Jest</li>
            <li> UI Libraries</li>
            <li> TypeScript</li>
            <li> Node.js</li>
            <li>Express</li>
            <li>SQL</li>
          </ul>
        </p>
        <div className={css.verticalLine}></div>
        <p className={css.title}>
          Tools
          <ul className={css.list}>
            <li>Github</li>
            <li>Trello</li>
            <li>Jira</li>
            <li>Figma</li>
            <li>Postman</li>
            <li> Storybook</li>
          </ul>
        </p>
        <div className={css.verticalLine}></div>
        <p className={css.title}>
          Methodologies
          <ul className={css.list}>
            <li>Scrum</li>
            <li>Agile</li>
            <li>Kanban</li>
            <li>Pair Programming</li>
            <li>Test Driven Development</li>
          </ul>
        </p>
      </div>
      <div className={css.bottomBox}></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={css.wave}
      >
        <path
          fill="white"
          fill-opacity="1"
          d="M0,224L80,202.7C160,181,320,139,480,149.3C640,160,800,224,960,234.7C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Skills;
