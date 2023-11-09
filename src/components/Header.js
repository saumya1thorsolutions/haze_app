import React from "react";

const Header = (props) => {
  return (
    <header className="Haze_header">
      <div className="logo">
        <a href="#"> Haze</a>
      </div>
      <nav className="nav_bar">
        <ul className="nav_menu">
          <li className="nav_list"> Help Center</li>
          <li className="nav_list">Logout</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
