import React from "react";
import Dagger from "../dagger.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/about" className="nav-link">
        <div>About</div>
      </Link>

      <Link to="/">
        <img
          src={Dagger}
          alt="dagger"
          style={{ height: "50px", width: "50px" }}
          onClick={() => {
            let body = {
              create: false,
              pw: "asldkjfogasfsadqweoiru8ns",
              un: "the king"
            };
            axios.post("/login", body).then(res => {
              window.location.href = "http://localhost:3000/admin";
            });
          }}
        />
      </Link>
      <Link to="/storyroulette" className="nav-link">
        <div>Random Story</div>
      </Link>
    </div>
  );
}
