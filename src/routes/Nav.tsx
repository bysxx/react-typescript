import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const publicUrl = process.env.PUBLIC_URL;

function Nav() {
  return (
    <div className={'nav'}>
      <div className={'nav_left'}>
        <Link to={'/'}>
          <img className={'nav_icon'} src={`${publicUrl}/img/home.png`}></img>
        </Link>
        <div className={'nav_title'}>Baek's Web</div>
      </div>
      <div className={'nav_right'}>
        <a href="https://github.com/bysxx">
          <img className={'nav_icon'} src={`${publicUrl}/img/github.png`} />
        </a>
      </div>
    </div>
  );
}

export default Nav;
