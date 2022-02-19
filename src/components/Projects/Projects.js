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
    </div>
  );
}

export default Projects;
