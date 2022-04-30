import React from "react";
import css from "./projects.module.css";
import ProjectCard from "./ProjectCard";
import tarot from "../../images/project.png";
import herosJourney from "../../images/herosjourney.png";
import AppProject from "../../images/AppProject.png";
import tribeapp from "../../images/tribeapp.png";
import { FaTools } from "react-icons/fa";

function Projects() {
  return (
    <div className={css.container}>
      <h2 className={css.heading}>Recent Projects</h2>
      <div className={css.flexContainer}>
        <ProjectCard
          liveSiteUrl="https://github.com/SchoolOfCode/final-project-repo-node-of-ingenuity-room-17"
          codeURL="https://github.com/SchoolOfCode/final-project-repo-node-of-ingenuity-room-17"
          image={AppProject}
          title="Family Scheduler"
          date="Feburary 2022 "
          description="React Native, Firebase"
        />
        <ProjectCard
          liveSiteUrl="https://github.com/SchoolOfCode/final-project-repo-node-of-ingenuity-room-17"
          codeURL="https://tribeapp.netlify.app/"
          image={tribeapp}
          title="App Landing Page"
          date="April 2022 "
          description="HTML, CSS, Bootstrap"
        />
        <ProjectCard
          liveSiteUrl="https://theherosjourney.netlify.app/"
          codeURL="https://github.com/SchoolOfCode/heros-journey-frontend"
          image={herosJourney}
          title="The Hero's Journey"
          date="January 2022 "
          description="React, Node, Express, SQL"
        />
        <ProjectCard
          liveSiteUrl="https://thetarot.netlify.app/"
          codeURL="https://github.com/indyamolloy/Christmas-Project"
          image={tarot}
          title="The Tarot"
          date="December 2021 "
          description="HTML, CSS, Vanilla JavaScript, API calls "
          progress={
            <strong>
              <FaTools style={{ marginRight: "1ch" }} />
              IN PROGRESS
            </strong>
          }
        />
      </div>
    </div>
  );
}

export default Projects;
