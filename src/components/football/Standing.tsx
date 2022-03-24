import { useEffect, useState } from 'react';
import { getRequest } from '../../libs/axiosManager';
import './Football.css';
import { useStore } from './FootballData';

const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;
const CURRENT_SEASON: number = 2021;

interface StandingDataProps {
  rank: number;
  points: number;
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
  };
  team: {
    name: string;
    logo: string;
  };
}

const getConfig = (id: number) => {
  const config = {
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'v3.football.api-sports.io',
    },
    params: {
      league: id,
      season: CURRENT_SEASON,
    },
  };

  return config;
};

const Standing = () => {
  const [standingData, setStandingData] = useState<StandingDataProps[]>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { currentLeagueId, leagues } = useStore();

  useEffect(() => {
    getStandingData(currentLeagueId);
  }, [currentLeagueId]);

  const getStandingData = async (id: number) => {
    setLoading(true);

    const data = await getRequest<any>(`https://v3.football.api-sports.io/standings`, getConfig(id));

    setStandingData(data.response[0].league.standings[0]);
    setLoading(false);
  };

  const getStandingClass = (rank: number) => {
    const currentLeague = leagues.find((league) => currentLeagueId === league.id);

    if (rank <= currentLeague.champions) {
      return 'standing_team standing_team_champions';
    } else if (rank <= currentLeague.europa) {
      return 'standing_team standing_team_europa';
    } else if (rank <= currentLeague.relegate) {
      return 'standing_team ';
    } else {
      return 'standing_team standing_team_relegate';
    }
  };

  return (
    <div className={'standing_container'}>
      {loading === true ? (
        <div>Loading..</div>
      ) : (
        <div className={'standing_teams'}>
          {standingData.map((item) => (
            <div key={item.rank} className={getStandingClass(item.rank)}>
              <img className={'standing_team_logo'} src={item.team.logo} />
              <div className={'standing_team_info'}>
                <div>{`${item.rank}. ${item.team.name}`}</div>
                <div>{`Points: ${item.points}`}</div>
                <div>{`Played: ${item.all.played} (${item.all.win}/${item.all.draw}/${item.all.lose})`}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Standing;
