import React from "react";
import Fade from "react-reveal/Fade";

import Button from "../Button";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    // return props.location.pathname === path ? " active" : "";
    console.log(props);
  };
  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-right py-0 px-0">
            <p>Movie</p>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button
                    className="nav-link"
                    type="link"
                    href="/"
                    title="home"
                  />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
