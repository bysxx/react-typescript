import { useEffect, useState } from 'react';
import Standing from './Standing';
import FootballSideBar from './FootballSideBar';
import './Football.css';
import { useStore } from './FootballData';

const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

const Football = () => {
  return (
    <div className={'football_container'}>
      <FootballSideBar />
      <Standing />
    </div>
  );
};

export default Football;
