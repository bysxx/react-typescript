import { useEffect, useState } from "react";
import create from "zustand";

const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

interface FootballDataProps {
  response: {
    country: {
      name: string;
    };
    league: {
      id: number;
      logo: string;
      name: string;
      type: string;
    };
  }[];
}

function Football() {
  const [footballData, setFootballData] = useState<FootballDataProps>(null);

  const getFootballData = async (endpoint: string) => {
    const data = await (
      await fetch(`https://v3.football.api-sports.io/${endpoint}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "v3.football.api-sports.io",
        },
      })
    ).json();

    setFootballData(data);
  };

  useEffect(() => {
    getFootballData("leagues");
  }, []);

  return (
    <div>
      {footballData === null ? (
        <div>Loading..</div>
      ) : (
        footballData.response
          .filter(
            (value) => value.league.id <= 150 && value.league.type == "League"
          )
          .map((value) => (
            <div key={value.league.id}>
              <img src={value.league.logo} />
              <div>{`Name: ${value.league.name}`}</div>
              <div>{`Type: ${value.league.type}`}</div>
            </div>
          ))
      )}
    </div>
  );
}

export default Football;
