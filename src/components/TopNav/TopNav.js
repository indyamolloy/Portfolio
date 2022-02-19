import React from "react";
import css from "./topnav.module.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function TopNav() {
  return (
    <div className={css.container}>
      {" "}
      <a
        className={css.socialIcon}
        href="https://github.com/indyamolloy"
        target="_blank"
      >
        <FaGithubSquare />
      </a>
      <a
        className={css.socialIcon}
        href="https://www.linkedin.com/in/indya-carroll-molloy-51702a231/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}

export default TopNav;
