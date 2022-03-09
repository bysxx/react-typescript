import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

interface FootballDataProps {
  response: {
    league: {
      id: number;
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
        <div>{footballData.response[0].league.name} </div>
      )}
    </div>
  );
}

export default Football;
