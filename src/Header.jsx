import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return(
    <nav className="ui fixed inverted menu">
      <div className="ui container">
        <Link id="header" className="header item" to="/">
          Cooper Test
        </Link>
        <div className="right menu">
          <NavLink
          id="cooper-tab"
          className="ui item"
          activeClassName={{ fontWeight: "bold" }}
          to="/cooper"
          >
            Cooper Test
          </NavLink>
          <NavLink
            id="bmi-tab"
            className="ui item"
            activeClassName={{ fontWeight: "bold" }}
            to="/bmi"
            >
              BMI Calculator
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Header;