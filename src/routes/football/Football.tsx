import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

interface FootballDataProps {}

function Football() {
  const [footballData, setFootballData] = useState<Promise<any>>();

  const getFootballData = async (endpoint: string) => {
    const data = await fetch(`https://v3.football.api-sports.io/${endpoint}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
      redirect: "follow",
    });

    const json = data.json();

    console.log(json);
    setFootballData(json);
  };

  useEffect(() => {
    getFootballData("teams/seasons?team=33");
  }, []);

  return (
    <div>
      <div>{footballData}</div>
    </div>
  );
}

export default Football;
