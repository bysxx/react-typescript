import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const publicUrl = process.env.PUBLIC_URL;

interface LogoProps {
  url: string;
  imgURL: string;
  title: string;
}

const Logo: React.FC<LogoProps> = ({ url, imgURL, title }) => (
  <Link className={"main_icon"} to={url}>
    <img className={"main_iconImg"} src={imgURL} />
    <div className={"main_iconTitle"}>{title}</div>
  </Link>
);

const Main: React.FC = () => (
  <div className={"container"}>
    <div className={"main_icons"}>
      <Logo
        url="/crypto"
        imgURL={`${publicUrl}/img/bitcoin.png`}
        title="Bitcoin"
      />
      <Logo
        url="/football"
        imgURL={`${publicUrl}/img/football.png`}
        title="football"
      />
      <Logo
        url="/soon"
        imgURL={`${publicUrl}/img/coming-soon.png`}
        title="Soon"
      />
      <Logo
        url="/soon"
        imgURL={`${publicUrl}/img/coming-soon.png`}
        title="Soon"
      />
      <Logo
        url="/soon"
        imgURL={`${publicUrl}/img/coming-soon.png`}
        title="Soon"
      />
      <Logo
        url="/soon"
        imgURL={`${publicUrl}/img/coming-soon.png`}
        title="Soon"
      />
    </div>
  </div>
);

export default Main;
