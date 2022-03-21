import { useEffect, useState } from 'react';
import './Football.css';
import { useStore } from './FootballData';

const SAVED_LEAGUEID = 'savedLeagueId';

const FootballSideBar = () => {
  const { currentLeagueId, leagues, setId } = useStore();
  const [showSideBar, setShowSideBar] = useState<boolean>(true);

  useEffect(() => {
    const loadedLeagueId = localStorage.getItem(SAVED_LEAGUEID);

    if (loadedLeagueId !== null) {
      setId(Number(loadedLeagueId));
    }
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setShowSideBar(!showSideBar);
        }}
      >
        {showSideBar ? '<=' : '=>'}
      </button>
      {showSideBar ? (
        <div className={'football_sidebar'}>
          {leagues.map((item) => (
            <button
              className={currentLeagueId === item.id ? 'sidebar_selectedButton' : 'sidebar_button'}
              key={item.id}
              onClick={(e) => {
                localStorage.setItem(SAVED_LEAGUEID, item.id.toString());
                setId(item.id);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FootballSideBar;
