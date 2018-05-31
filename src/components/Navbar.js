import React from "react";
import Dagger from "../dagger.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/about" className="nav-link">
        <div>About</div>
      </Link>

      <img
        src={Dagger}
        alt="dagger"
        style={{ height: "50px", width: "50px" }}
      />
      <Link to="/storyroulette" className="nav-link">
        <div>Random Story</div>
      </Link>
    </div>
  );
}
