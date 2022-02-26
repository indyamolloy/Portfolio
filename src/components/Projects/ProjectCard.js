import React from "react";
import css from "./projectCard.module.css";

function ProjectCard(props) {
  function handleImgClick() {
    window.location = props.liveSiteUrl;
  }

  return (
    <div id="projects" className={css.container}>
      <div className={css.description}>
        <p>{props.date}</p>
        <h4 className={css.title}>{props.title}</h4>
        <p>Technologies:</p>
        <p className={css.technologies}>{props.description}</p>
        <a href={props.codeURL} className={css.codeButton}>
          View Code
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width="10"
            height="10"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z" />
          </svg>
        </a>
      </div>

      <img
        className={css.image}
        style={props.style}
        src={props.image}
        alt="project"
        onClick={handleImgClick}
      />
    </div>
  );
}

export default ProjectCard;
