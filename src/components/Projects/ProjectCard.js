import React from "react";
import css from "./projectCard.module.css";

function ProjectCard(props) {
  return (
    <div className={css.container}>

      {/* <div className={css.title}>Project Name</div> */}

      {/* <div className={css.image} style={props.style}> */}
      <img
        className={css.image}
        style={props.style}
        src={props.image}
        alt="project"
      />
      <div className={css.description}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum
          dolor sit amet consectetur. Quis commodo odio aenean sed adipiscing
          diam donec adipiscing tristique.
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
