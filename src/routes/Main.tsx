import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const publicUrl = process.env.PUBLIC_URL;

interface LogoProps {
  url: string;
  imgURL: string;
}

const Logo: React.FC<LogoProps> = ({ url, imgURL }) => (
  <Link to={url}>
    <div className={"logoContainer"}>
      <img className={"logoImg"} src={imgURL} />
    </div>
  </Link>
);

const Main: React.FC = () => (
  <div className={"container"}>
    <div className={"logos"}>
      <Logo url="/crypto" imgURL={`${publicUrl}/img/word.png`} />
      <Logo url="/wordie" imgURL={`${publicUrl}/img/word.png`} />
      <Logo url="/wordie" imgURL={`${publicUrl}/img/word.png`} />
      <Logo url="/wordie" imgURL={`${publicUrl}/img/word.png`} />
      <Logo url="/wordie" imgURL={`${publicUrl}/img/word.png`} />
      <Logo url="/wordie" imgURL={`${publicUrl}/img/word.png`} />
    </div>
  </div>
);

export default Main;
