/*import React, { useState } from "react";
import {BrowserRouter as Router,Route,Link,NavLink,Routes,} from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAdjust } from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Teacher from "./pages/Teacher";
import Course from "./pages/Course";
const Navbar = ({ onDarkModeToggle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="navbar-brand">
          <Link to="/">
            <img
              src="https://cutm.ac.in/wp-content/uploads/Centurion_University_of_Technology_and_Management_Logo.webp"
              width={50}
              height={70}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <i className="fas fa-search"></i>
        </div>
        <button className="dark-mode-button" onClick={onDarkModeToggle}>
          <FontAwesomeIcon icon={faAdjust} />
        </button>
        <div
          className={`menu-icon ${mobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMobileMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMobileMenu}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/teacher" onClick={closeMobileMenu}>
              Teacher
            </NavLink>
          </li>
          <li>
            <NavLink to="/course" onClick={closeMobileMenu}>
              Course
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
function Navbarr() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--primary-bg", "#fff");
      root.style.setProperty("--primary-text", "#333");
      root.style.setProperty("--secondary-bg", "#007bff");
      root.style.setProperty("--secondary-text", "#fff");
      root.style.setProperty("--border-color", "#ccc");
    } else {
      root.style.setProperty("--primary-bg", "#333");
      root.style.setProperty("--primary-text", "#fff");
      root.style.setProperty("--secondary-bg", "#555");
      root.style.setProperty("--secondary-text", "#007bff");
      root.style.setProperty("--border-color", "#555");
    }
  };
  return (
    <Router>
      <div>
        <Navbar onDarkModeToggle={toggleDarkMode} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/course" element={<Course />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
export default Navbarr;
*/ // Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAdjust } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ onDarkModeToggle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      const offset = navbar.offsetTop + navbar.clientHeight;

      if (window.pageYOffset > offset) {
        navbar.classList.add("fixed-navbar");
      } else {
        navbar.classList.remove("fixed-navbar");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="navbar-brand">
          <Link to="/">
            <img
              src="https://cutm.ac.in/wp-content/uploads/Centurion_University_of_Technology_and_Management_Logo.webp"
              width={50}
              height={75}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <i className="fas fa-search"></i>
        </div>
        <button className="dark-mode-button" onClick={onDarkModeToggle}>
          <FontAwesomeIcon icon={faAdjust} />
        </button>
        <div
          className={`menu-icon ${mobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMobileMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMobileMenu}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/teacher" onClick={closeMobileMenu}>
              Teacher
            </NavLink>
          </li>
          <li>
            <NavLink to="/course" onClick={closeMobileMenu}>
              Course
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
