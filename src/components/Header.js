import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <NavLink exact="true" to="/">
            <li>Acceuil</li>
          </NavLink>

          <NavLink exact="true" to="/coup-de-coeur">
            <li>Coup de coeur</li>
          </NavLink>
        </ul>
      </nav>
      <h1>Shaki Movies</h1>
    </header>
  );
};

export default Header;
