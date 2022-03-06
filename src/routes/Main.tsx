import React, { Component } from "react";
import "./Main.css";

interface LogoProps {
  url: string;
}

const Logo: React.FC<LogoProps> = ({ url }) => (
  <img className={"logo"} src={url} />
);

function Main() {
  return (
    <div className={"container"}>
      <div className={"logos"}>
        <Logo
          url={
            "https://static-cdn.jtvnw.net/jtv_user_pictures/98bb53c3-4e2f-47f3-9c4b-6c0484b383f6-profile_image-70x70.png"
          }
        />
        <Logo
          url={
            "https://static-cdn.jtvnw.net/jtv_user_pictures/98bb53c3-4e2f-47f3-9c4b-6c0484b383f6-profile_image-70x70.png"
          }
        />
      </div>
    </div>
  );
}

export default Main;
