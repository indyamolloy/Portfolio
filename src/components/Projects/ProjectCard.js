import React from "react";
import css from "./projectCard.module.css";

function ProjectCard(props) {
  return (
    <div id="projects" className={css.container}>
      {/* <div className={css.title}>Project Name</div> */}

      {/* <div className={css.image} style={props.style}> */}
      <div className={css.description}>
        <h4 className={css.title}>Title Project</h4>
        <p>Project blah blah blah</p>
      </div>
      <img
        className={css.image}
        style={props.style}
        src={props.image}
        alt="project"
      />
    </div>
  );
}

export default ProjectCard;
