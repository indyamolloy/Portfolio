import React from "react";
import css from "./projects.module.css";
import ProjectCard from "./ProjectCard";
import image from "../../images/project.png";

function Projects() {
  return (
    <div className={css.container}>
      <h2 className={css.heading}>Recent Projects</h2>
      <div className={css.flexContainer}>
        <ProjectCard image={image} />
        <ProjectCard image="https://www.affde.com/uploads/article/96557/m9RS9LOH3W2Fxe6D.jpeg" />
        <ProjectCard image="https://www.affde.com/uploads/article/96557/rg4Dj67VtAhVlDQu.jpeg" />
        <ProjectCard image="https://www.affde.com/uploads/article/96557/VCTdLmMUqGkMsgbp.jpeg" />
      </div>
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

export default Projects;
