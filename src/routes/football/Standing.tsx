import { useEffect, useState } from "react";
import "./Standing.css";

const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;
const currentSeason: number = 2021;

interface StandingDataProps {
  rank: number;
  points: number;
  team: {
    name: string;
    logo: string;
  };
}

type Props = {
  id: number;
};

const Standing = ({ id }: Props) => {
  const [standingData, setStandingData] = useState<StandingDataProps[]>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getFootballData = async (id: number) => {
    setLoading(true);

    const data = await (
      await fetch(
        `https://v3.football.api-sports.io/standings?league=${id}&season=${currentSeason}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": "v3.football.api-sports.io",
          },
        }
      )
    ).json();

    setStandingData(data.response[0].league.standings[0]);
    setLoading(false);
  };

  useEffect(() => {
    getFootballData(id);
  }, [id]);

  return (
    <div className={"standing_container"}>
      {loading === true ? (
        <div>Loading..</div>
      ) : (
        <div className={"standing_teams"}>
          {standingData.map((item) => (
            <div key={item.rank} className={"standing_team"}>
              <img className={"standing_team_logo"} src={item.team.logo} />
              <div className={"standing_team_info"}>
                <div>{`${item.rank}. ${item.team.name}`}</div>
                <div>{`Points: ${item.points}`}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Standing;
