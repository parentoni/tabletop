import { useState, useEffect } from "react";
import { Base } from "../../../shared/BasePage";
import { Navbar } from "../../../shared/Navbar";
import {TopBar} from "../../../shared/register/TopBar";

type StatisticsData = {
  gamesPlayed: number;
  wins: number;
  losses: number;
};

const mockStatistics = {
  total: { gamesPlayed: 100, wins: 60, losses: 40 },
  pool: { gamesPlayed: 30, wins: 20, losses: 10 },
  fussball: { gamesPlayed: 40, wins: 25, losses: 15 },
  tableTennis: { gamesPlayed: 30, wins: 15, losses: 15 },
};

export const Statistics = () => {
  const [statistics, setStatistics] = useState<{
    total: StatisticsData;
    pool: StatisticsData;
    fussball: StatisticsData;
    tableTennis: StatisticsData;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        // Simulate fetching data
        setStatistics(mockStatistics);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <div className="container mx-auto max-w-sm">
      <Base>
        <TopBar/>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {statistics && (
          <div className="statistics p-4">
            <h2 className="text-2xl font-bold mb-2">Your Statistics</h2>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Total</h3>
              <ul>
                <li>Games Played: {statistics.total.gamesPlayed}</li>
                <li>Wins: {statistics.total.wins}</li>
                <li>Losses: {statistics.total.losses}</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Pool</h3>
              <ul>
                <li>Games Played: {statistics.pool.gamesPlayed}</li>
                <li>Wins: {statistics.pool.wins}</li>
                <li>Losses: {statistics.pool.losses}</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Fußball</h3>
              <ul>
                <li>Games Played: {statistics.fussball.gamesPlayed}</li>
                <li>Wins: {statistics.fussball.wins}</li>
                <li>Losses: {statistics.fussball.losses}</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Table Tennis</h3>
              <ul>
                <li>Games Played: {statistics.tableTennis.gamesPlayed}</li>
                <li>Wins: {statistics.tableTennis.wins}</li>
                <li>Losses: {statistics.tableTennis.losses}</li>
              </ul>
            </div>
          </div>
        )}
        <Navbar />
      </Base>
    </div>
  );
};