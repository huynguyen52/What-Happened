import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./header.scss";
import logo from "../../images/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menusContainer = useRef(null);
  const menus = useRef(null);

  useEffect(() => {
    const height = menus.current.getBoundingClientRect().height;
    if (isMenuOpen) {
      menusContainer.current.style.height = `${height}px`;
    } else {
      menusContainer.current.style.height = `0px`;
    }
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="container negative">
        <div className="header-main">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <nav className="top-nav" ref={menusContainer}>
            <ul className="top-nav__list" ref={menus}>
              <li className="top-nav__item">
                <a href="/" className="top-nav__link">
                  Introduction
                </a>
              </li>
              <li className="top-nav__item">
                <a href="/" className="top-nav__link">
                  Solution
                </a>
              </li>
              <li className="top-nav__item">
                <a href="/" className="top-nav__link">
                  rate plan
                </a>
              </li>
              <li className="top-nav__item top-nav__login">
                <a href="/" className="top-nav__link ">
                  login
                </a>
              </li>
              <li className="top-nav__item">
                <a href="/" className="top-nav__link">
                  Apply for free use
                </a>
              </li>
            </ul>
          </nav>
          <button className="toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
