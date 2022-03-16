import create from 'zustand';

interface FootballState {
  currentLeagueId: number;
  leagues: {
    id: number;
    name: string;
    champions: number;
    europa: number;
    relegate: number;
  }[];
  setId: (id: number) => void;
}

export const useStore = create<FootballState>((set) => ({
  currentLeagueId: 39,
  leagues: [
    { id: 39, name: 'Premier League', champions: 4, europa: 6, relegate: 17 },
    { id: 140, name: 'La Liga', champions: 4, europa: 7, relegate: 17 },
    { id: 78, name: 'Bundesliga 1', champions: 4, europa: 7, relegate: 16 },
    { id: 135, name: 'Serie A', champions: 4, europa: 7, relegate: 17 },
  ],
  setId: (id: number) => {
    set((state) => ({
      currentLeagueId: id,
    }));
  },
}));
