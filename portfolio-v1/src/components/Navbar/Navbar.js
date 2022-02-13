import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

import css from "./navbar.module.css";

function Navbar() {
  return (
    <div className={css.navbarContainer}>
      <nav>
        <a className={css.navbarLinks} href="#home">
          HOME
        </a>
        <a className={css.navbarLinks} href="#home">
          PROJECTS
        </a>
        <a className={css.navbarLinks} href="#home">
          ABOUT
        </a>
        <a className={css.navbarLinks} href="#home">
          CONTACT
        </a>
        <a className={css.socialIcon} href="#github">
          <FaGithubSquare />
        </a>
        <a
          className={css.socialIcon}
          href="https://www.linkedin.com/in/indya-carroll-molloy-51702a231/"
        >
          <FaLinkedin />
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
