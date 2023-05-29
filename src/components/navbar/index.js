import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark special-color-dark">
      <span className="navbar-brand mb-0 h1">Somayyah Maqsudi</span>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="/about">
            <i className="fas fa-home mr-1"></i>
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/portfolio">
            <i className="fas fa-code mr-1"></i>
            Apps
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/resume">
            <i className="fas fa-file mr-1"></i>
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">
            <i className="fas fa-envelope mr-1"></i>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
