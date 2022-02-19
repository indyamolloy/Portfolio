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
            className={(css.navbarLinks, css.link)}
          >
            HOME
          </Link>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            className={(css.navbarLinks, css.link)}
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
            className={(css.navbarLinks, css.link)}
            offset={-100}
          >
            ABOUT
          </Link>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            className={(css.navbarLinks, css.link)}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
