import { slide as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
import "./styles.css";

function Hamburger(props) {
  return (
    <Menu right>
      <Link to="home" activeClass="active" className="menu-item">
        HOME
      </Link>
      <Link
        to="projects"
        activeClass="active"
        spy={true}
        className="menu-item"
        offset={-220}
      >
        PROJECTS
      </Link>
      <Link
        to="about"
        activeClass="active"
        spy={true}
        className="menu-item"
        offset={-100}
      >
        ABOUT
      </Link>
      <Link to="contact" activeClass="active" spy={true} className="menu-item">
        CONTACT
      </Link>
    </Menu>
  );
}

export default Hamburger;
