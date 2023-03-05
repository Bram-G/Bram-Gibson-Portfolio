import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <div id="header" className="navbar navbar-expand-lg">
      <div id="navbar" className="container-fluid">
        <Link id="name" className="nav-item" to="/">
          Bram Gibson
        </Link>
        <div id="items">
          <Link id="header-item" className="nav-item" to="/portfolio">
            Portfolio
          </Link>
          <Link id="header-item" className="nav-item" to="/contact">
            Contact
          </Link>
          <Link id="header-item" className="nav-item" to="/resume">
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
