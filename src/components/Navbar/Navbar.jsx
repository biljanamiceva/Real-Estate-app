import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClear } from "react-icons/md";
import "./Navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <h1>REAL ESTATE</h1>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#properties">Properties</a>
        </li>
        <li className="p__opensans">
          <a href="#aboutus">About Us</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In
        </a>
        <div />
        <a href="#registration" className="p__opensans-signup">
          Sign up
        </a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#545454"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdClear
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#properties" onClick={() => setToggleMenu(false)}>
                  Properties
                </a>
              </li>
              <li>
                <a href="#aboutus" onClick={() => setToggleMenu(false)}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
              <div className="app__navbar-smallscreen-div">
                <li>
                  <a href="#login" onClick={() => setToggleMenu(false)}>
                    Log In
                  </a>
                </li>
                <li>
                  <a
                    href="#registration"
                    className="p__opensans-signup"
                    onClick={() => setToggleMenu(false)}
                    style={{
                      margin: "2rem",
                      cursor: "pointer",
                      color: "var(--color-grey)",
                      fontSize: "2rem",
                      textAlign: "center",
                      fontFamily: "var(--font-alt)",
                      border: "none ",
                    }}
                  >
                    Sign up
                  </a>
                </li>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
