import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-half-faded fixed-top justify-content-end">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="navbar-nav text-center">
          <li className="nav-item">
            <a className="nav-link tracking-wider" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link tracking-wider" href="#overview">
              Overview
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link tracking-wider" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link tracking-wider" href="#employment">
              Employment
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link tracking-wider" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
