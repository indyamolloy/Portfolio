import { slide as Menu } from "react-burger-menu";
import "./styles.css";

function Hamburger(props) {
  return (
    <Menu right>
      <a className="menu-item" href="#home">
        Home
      </a>
      <a className="menu-item" href="#projects">
        Projects
      </a>
      <a className="menu-item" href="#about">
        About
      </a>
      <a className="menu-item" href="#contact">
        Contact
      </a>
    </Menu>
  );
}

export default Hamburger;
