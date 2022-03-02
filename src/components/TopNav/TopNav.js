import React from "react";
import css from "./topnav.module.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Hamburger from "../Hamburger/Hamburger";
import namelogo from "../../images/name1.png";

function TopNav() {
  return (
    <div>
      <div className={css.container}>
        <div className={css.links}>
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
      </div>
      <Hamburger />
    </div>
  );
}

export default TopNav;
