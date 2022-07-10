import React, { useEffect, useState } from "react";
import cn from "classnames";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [viewportSection, setViewportSection] = useState("home");

  const scrollToElement = (identifier: string) => {
    const element = document.querySelector(identifier);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const onScroll = (e: any) => {
      const currentScrollY = window.scrollY;

      if (currentScrollY >= 60) {
        setIsScrolled(true);
      }

      // scroll is at the bottom
      if (currentScrollY + window.innerHeight === document.body.offsetHeight) {
        setViewportSection("contact");
        return;
      }

      const sectionElements = document.querySelectorAll("section");

      sectionElements.forEach((elem) => {
        if (
          currentScrollY > elem.offsetTop - 1 &&
          currentScrollY < elem.offsetTop + elem.offsetHeight
        ) {
          setViewportSection(elem.getAttribute("id") ?? "");
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg bg-half-faded fixed-top justify-end ${
        isScrolled ? "scrolled navbar-light" : "navbar-dark"
      }`}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-center" id="navbarNav">
        <ul className="navbar-nav text-center">
          <li
            className="nav-item cursor-pointer"
            onClick={() => scrollToElement("#home")}
          >
            <a
              className={cn(
                viewportSection === "home" && "color-primary",
                isScrolled && "scrolled",
                "nav-link tracking-wider"
              )}
            >
              Home
            </a>
          </li>
          <li
            className="nav-item cursor-pointer"
            onClick={() => scrollToElement("#overview")}
          >
            <a
              className={cn(
                viewportSection === "overview" && "color-primary",
                isScrolled && "scrolled",
                "nav-link tracking-wider"
              )}
            >
              Overview
            </a>
          </li>
          <li
            className="nav-item cursor-pointer"
            onClick={() => scrollToElement("#skills")}
          >
            <a
              className={cn(
                viewportSection === "skills" && "color-primary",
                isScrolled && "scrolled",
                "nav-link tracking-wider"
              )}
            >
              Skills
            </a>
          </li>
          <li
            className="nav-item cursor-pointer"
            onClick={() => scrollToElement("#employment")}
          >
            <a
              className={cn(
                viewportSection === "employment" && "color-primary",
                isScrolled && "scrolled",
                "nav-link tracking-wider"
              )}
            >
              Employment
            </a>
          </li>
          <li
            className="nav-item cursor-pointer"
            onClick={() => scrollToElement("#contact")}
          >
            <a
              className={cn(
                viewportSection === "contact" && "color-primary",
                isScrolled && "scrolled",
                "nav-link tracking-wider"
              )}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
