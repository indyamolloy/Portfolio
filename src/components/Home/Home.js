import React from "react";
import css from "./home.module.css";
import me from "../../images/me.png";
import { Link } from "react-scroll";

function Home() {
  return (
    <div id="home" className={css.homeContainer}>
      <div>
        <p className={css.hi}>Hi,</p>
        <h1 className={css.name}>I'm Indya.</h1>
        <p className={css.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum
          dolor sit amet consectetur. Quis commodo odio aenean sed adipiscing
          diam donec adipiscing tristique.
        </p>
      </div>

      <img className={css.img} src={me} alt="me" />

      <Link
        to="projects"
        activeClass="active"
        spy={true}
        smooth={true}
        className={css.projectsButton}
      >
        View Projects
      </Link>
      <button href="hoem" className={css.downloadButton}>
        Download CV
      </button>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={css.wave}
      >
        <path
          fill="#F0DBD0"
          fill-opacity="1"
          d="M0,224L80,202.7C160,181,320,139,480,149.3C640,160,800,224,960,234.7C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Home;
