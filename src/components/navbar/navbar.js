import React from "react";

import "./style.css";

const Navbar = () => {
  return (
    <div id="header" className="navbar navbar-expand-lg">
      <div id="navbar" className="alignMe">
        <div id="navbarCon">

        <a id="name" className="nav-item" href="https://bramgibson.dev/">
          BG
        </a>
        <div id="items">
          <a id="header-item" className="nav-item" href="#portfolio">
            Portfolio
          </a>
          <a id="header-item" className="nav-item" href="#contact">
            Contact
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
