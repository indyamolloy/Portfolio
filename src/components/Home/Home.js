import React from "react";
import css from "./home.module.css";
import me from "../../images/me.png";
import { Link } from "react-scroll";
import CV from "../../images/IndyaMolloyCV.pdf";

function Home() {
  return (
    <div id="home" className={css.homeContainer}>
      <div className={css.intro}>
        <p className={css.hi}>Hi,</p>
        <h1 className={css.name}>I'm Indya.</h1>
        <p className={css.description}>
          I'm a software engineer and full stack developer based in Manchester,
          UK. I'm a creative thinker with a passion to learn more. I love
          finding solutions to real-world problems and turning ideas into
          reality.
        </p>
      </div>

      <img className={css.img} src={me} alt="me" />
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
        <a href={CV} className={css.downloadButton} download="IndyaMolloyCV">
          DOWNLOAD CV
        </a>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={css.wave}
      >
        <path
          fill="#E4DEDF"
          fill-opacity="1"
          d="M0,224L80,202.7C160,181,320,139,480,149.3C640,160,800,224,960,234.7C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Home;
