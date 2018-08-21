import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import history from "util/history";
import classNames from "classnames";

export default class NavigationBar extends Component {
  render() {
    const pathname = history.location.pathname,
      homeClass = classNames({ "link--active": pathname === "/" }),
      catalogueClass = classNames({ "link--active": pathname === "/catalogues" }),
    return (
      <nav className="navbar">
        <Link to="/" className={homeClass}>
          Home
        </Link>
        <Link to="/catalogues" className={catalogueClass}>
          Catalogues
        </Link>
      </nav>
    );
  }
}
