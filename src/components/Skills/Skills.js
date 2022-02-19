import React from "react";
import css from "./skills.module.css";

function Skills() {
  return (
    <div className={css.container}>
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
            <li>Test Driven</li>
          </ul>
        </p>
      </div>
      <div className={css.bottomBox}></div>
    </div>
  );
}

export default Skills;
