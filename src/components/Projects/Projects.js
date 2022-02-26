import React from "react";
import css from "./projects.module.css";
import ProjectCard from "./ProjectCard";
import tarot from "../../images/project.png";
import herosJourney from "../../images/herosjourney.png";
import AppProject from "../../images/AppProject.png";

function Projects() {
  return (
    <div className={css.container}>
      <h2 className={css.heading}>Recent Projects</h2>
      <div className={css.flexContainer}>
        <ProjectCard
          liveSiteUrl="https://socherosjourney.netlify.app/"
          codeURL="https://github.com/SchoolOfCode/heros-journey-frontend"
          image={herosJourney}
          title="The Hero's Journey"
          date="January 2022 "
          description="React, Node, Express, SQL"
        />
        <ProjectCard
          liveSiteUrl="https://github.com/indyamolloy/proj"
          image={tarot}
          title="The Tarot"
          date="December 2021 "
          description="HTML, CSS, Vanilla JavaScript, API calls"
        />
        <ProjectCard
          liveSiteUrl="https://github.com/indyamolloy/proj"
          image={AppProject}
          title="Family Schedueler"
          date="Feburary 2022 "
          description="React Native, Firebase"
        />
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
