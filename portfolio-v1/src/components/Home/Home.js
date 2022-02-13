import React from "react";
import css from "./home.module.css";

function Home() {
  return (
    <div className={css.homeContainer}>
      <div>
        <h1 className={css.name}>INDYA MOLLOY</h1>
        <p className={css.title}>Software Engineer</p>
      </div>

      <div>
        <img
          className={css.img}
          src="https://media-exp1.licdn.com/dms/image/C4E03AQF8oMJwHMqzZw/profile-displayphoto-shrink_800_800/0/1644079407540?e=1649894400&v=beta&t=ToiVW8FYfaTBX79oRutEn8g0ck8n6YzkZXOoIyFRW5k"
          alt="me"
        />
      </div>
      <div className={css.descriptionContainer}>
        <p className={css.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum
          dolor sit amet consectetur. Quis commodo odio aenean sed adipiscing
          diam donec adipiscing tristique.{" "}
        </p>

        <a href="#projects" className={css.projectsButton}>
          View Projects
        </a>
      </div>
      <svg
        className={css.wave}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="white"
          fill-opacity="1"
          d="M0,96L48,117.3C96,139,192,181,288,170.7C384,160,480,96,576,90.7C672,85,768,139,864,160C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Home;
