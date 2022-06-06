import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <h1>HD</h1>
      </div>
      <ul className="nav__items">
        <li>
          <a href="">mint</a>
        </li>
        <li>
          <a className="btn">View on OpenSea</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
