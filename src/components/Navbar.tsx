import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div>

      <div className="navbar-contact">
        <span>Rustom Trayvilla</span>
        <a href="mailto:rtrayv@gmail.com">Email</a>
      </div>
    </nav>
  );
}

export default NavBar;