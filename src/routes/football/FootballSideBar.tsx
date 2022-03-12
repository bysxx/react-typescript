import "./Football.css";
import { useStore } from "./FootballData";

const FootballSideBar = () => {
  const { currentLeagueId, leagues, setId } = useStore();

  return (
    <div className={"football_sidebar"}>
      {leagues.map((item) => (
        <button
          className={
            currentLeagueId === item.id
              ? "sidebar_selectedButton"
              : "sidebar_button"
          }
          key={item.id}
          onClick={(e) => {
            setId(item.id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default FootballSideBar;
