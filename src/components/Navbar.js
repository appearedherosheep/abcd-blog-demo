import React from "react";
import { Link } from "gatsby";

import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="wrapper">
      <nav className="nav">
        <Link to="/">
          <img className="nav-logo" src="/logo/logo.png" alt="logo"/>
          {/* <li className="nav-logo__title nav-links">ABCD</li> */}
        </Link>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <button>sign in</button> */}
      </nav>
      {/* <img className="nav-title" src="/title/title.png" alt="title"/> */}
    </header>
  );
}
const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
  },
  {
    title: "About",
    url: "/about",
    cName: "nav-links",
  },
  {
    title: "Seminar",
    url: "/seminar",
    cName: "nav-links",
  },
  {
    title: "Project",
    url: "/project",
    cName: "nav-links",
  },
];
