import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

const publicUrl = process.env.PUBLIC_URL;

const results: string[] = ['crypto', 'football', 'soon', 'soon', 'soon', 'test'];

interface LogoProps {
  url: string;
  imgURL: string;
  title: string;
}

const Logo: React.FC<LogoProps> = ({ url, imgURL, title }) => (
  <Link className={'main_icon'} to={url}>
    <img className={'main_iconImg'} src={imgURL} />
    <div className={'main_iconTitle'}>{title}</div>
  </Link>
);

const Main: React.FC = () => (
  <div className={'container'}>
    <div className={'main_icons'}>
      {results.map((result, index) => (
        <Logo key={index} url={`/${result}`} imgURL={`${publicUrl}/img/${result}.png`} title={result} />
      ))}
    </div>
  </div>
);

export default Main;
