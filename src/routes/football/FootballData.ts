import create from "zustand";

interface FootballState {
  currentLeagueId: number;
  leagues: { id: number; name: string }[];
  setId: (id: number) => void;
}

export const useStore = create<FootballState>((set) => ({
  currentLeagueId: 39,
  leagues: [
    { id: 39, name: "Premier League" },
    { id: 140, name: "La Liga" },
    { id: 78, name: "Bundesliga 1" },
    { id: 135, name: "Serie A" },
    { id: 94, name: "Primeira Liga" },
  ],
  setId: (id: number) => {
    set((state) => ({
      currentLeagueId: id,
    }));
  },
}));
