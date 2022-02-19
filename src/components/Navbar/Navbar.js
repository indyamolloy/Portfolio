import React from "react";
import css from "./navbar.module.css";
import TopNav from "../TopNav/TopNav";

function Navbar() {
  return (
    <div>
      <TopNav />
      <div className={css.navbarContainer}>
        <nav>
          <a className={css.navbarLinks} href="#home">
            HOME
          </a>
          <a className={css.navbarLinks} href="#home">
            PROJECTS
          </a>
          <a className={css.name} href="#home">
            Indya Molloy
          </a>
          <a className={css.navbarLinks} href="#home">
            ABOUT
          </a>
          <a className={css.navbarLinks} href="#home">
            CONTACT
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
