import { useEffect, useState } from "react";
import Standing from "./Standing";
import "./Football.css";

const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

const leagues: { id: number; name: string }[] = [
  { id: 39, name: "Premier League" },
  { id: 78, name: "Bundesliga 1" },
  { id: 94, name: "Primeira Liga" },
  { id: 135, name: "Serie A" },
];

const Football = () => {
  const [selectedLeagueId, setSelectedLeagueId] = useState(leagues[0].id);

  return (
    <div className={"football_container"}>
      <div className={"football_buttons"}>
        {leagues.map((item) => (
          <button
            className={"football_button"}
            key={item.id}
            onClick={(e) => {
              setSelectedLeagueId(item.id);
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
      <Standing id={selectedLeagueId} />
    </div>
  );
};

export default Football;
