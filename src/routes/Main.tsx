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
  <Link className={"logoContainer"} to={url}>
    <img className={"logoImg"} src={imgURL} />
    <div className={"logoTitle"}>{title}</div>
  </Link>
);

const Main: React.FC = () => (
  <div className={"container"}>
    <div className={"logos"}>
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
