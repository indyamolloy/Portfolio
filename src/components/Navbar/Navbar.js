import React from "react";
import { Link } from "react-scroll";
import css from "./navbar.module.css";
import TopNav from "../TopNav/TopNav";

function Navbar() {
  return (
    <div>
      <TopNav />
      <div className={css.navbarContainer}>
        <nav>
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            className={css.navbarLinks}
          >
            HOME
          </Link>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            className={css.navbarLinks}
            offset={-220}
          >
            PROJECTS
          </Link>
          <span className={css.name}>Indya Molloy</span>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            className={css.navbarLinks}
            offset={-100}
          >
            ABOUT
          </Link>
          <a className={css.navbarLinks}>CONTACT</a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
