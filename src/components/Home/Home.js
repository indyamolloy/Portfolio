import React from "react";
import css from "./home.module.css";
import me from "../../images/me.png";
import CV from "../../images/IndyaMolloyCV.pdf";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div id="home" className={css.homeContainer}>
      <div className={css.overlay}>
        <div className={css.socialIcons}>
          <a
            className={css.socialIcon}
            href="https://github.com/indyamolloy"
            target="_blank"
          >
            <FaGithubSquare className={css.icon} />
          </a>
          <a
            className={css.socialIcon}
            href="https://www.linkedin.com/in/indya-carroll-molloy-51702a231/"
            target="_blank"
          >
            <FaLinkedin className={css.icon} />
          </a>
        </div>
        <div className={css.intro}>
          <p className={css.hi}>Hi,</p>
          <h1 className={css.name}>I'm Indya.</h1>
          <p className={css.description}>
            I'm a software engineer and full stack developer based in
            Manchester, UK. I'm a creative thinker with a passion to learn more.
            I love finding solutions to real-world problems and turning ideas
            into reality.
          </p>
          <div className={css.buttons}>
            <a
              href="#projects"
              // to="projects"
              // activeClass="active"
              // spy={true}
              // smooth={true}
              className={css.projectsButton}
            >
              VIEW PROJECTS
            </a>
            <a
              href={CV}
              className={css.downloadButton}
              download="IndyaMolloyCV"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>

        <img className={css.img} src={me} alt="me" />
      </div>
    </div>
  );
}

export default Home;
