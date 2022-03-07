import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const publicUrl = process.env.PUBLIC_URL;

function Nav() {
  return (
    <div className={"Nav"}>
      <Link to={"/"}>
        <img className={"Icon"} src={`${publicUrl}/img/home.png`}></img>
      </Link>
    </div>
  );
}

export default Nav;
