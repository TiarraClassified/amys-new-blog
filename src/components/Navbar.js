import React from "react";
import Dagger from "../dagger.jpg";
import logo from "../trans-logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/about" className="nav-link">
        <div>About</div>
      </Link>

      <Link to="/">
        <img src={logo} alt="logo" style={{ height: "80px", width: "100px" }} />
      </Link>
      <Link to="/storyroulette" className="nav-link">
        <div>Random Story</div>
      </Link>
    </div>
  );
}
