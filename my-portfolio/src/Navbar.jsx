import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="header">
      <div className="nav-menu">
        <ul className="nav_menu_list">

          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
