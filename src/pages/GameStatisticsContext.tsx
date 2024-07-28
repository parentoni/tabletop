import React, { createContext, useContext, useState, ReactNode } from "react";

type GameResult = "Win" | "Loss" | "Draw";

type StatisticsData = {
  gamesPlayed: number;
  wins: number;
  losses: number;
};

type GameStatisticsContextType = {
  statistics: StatisticsData;
  updateStatistics: (result: GameResult) => void;
};

const initialStatistics: StatisticsData = {
  gamesPlayed: 69,
  wins: 42,
  losses: 27,
};

const GameStatisticsContext = createContext<GameStatisticsContextType | undefined>(undefined);

export const GameStatisticsProvider = ({ children }: { children: ReactNode }) => {
  const [statistics, setStatistics] = useState<StatisticsData>(initialStatistics);

  const updateStatistics = (result: GameResult) => {
    setStatistics((prevStats) => {
      const newStats = { ...prevStats, gamesPlayed: prevStats.gamesPlayed + 1 };
      if (result === "Win") {
        newStats.wins += 1;
      } else if (result === "Loss") {
        newStats.losses += 1;
      }
      return newStats;
    });
  };

  return (
    <GameStatisticsContext.Provider value={{ statistics, updateStatistics }}>
      {children}
    </GameStatisticsContext.Provider>
  );
};

export const useGameStatistics = () => {
  const context = useContext(GameStatisticsContext);
  if (!context) {
    throw new Error("useGameStatistics must be used within a GameStatisticsProvider");
  }
  return context;
};