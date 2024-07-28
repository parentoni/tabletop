import { useState, useEffect } from "react";
import { Base } from "../../shared/BasePage";
import { Navbar } from "../../shared/Navbar";
import { UserIcon } from "../../shared/UserIcon";

type StatisticsData = {
  gamesPlayed: number;
  wins: number;
  losses: number;
};

export const Statistics = () => {
  const [statistics, setStatistics] = useState<StatisticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch("/api/statistics");
        if (!response.ok) {
          throw new Error("Failed to fetch statistics");
        }
        const data: StatisticsData = await response.json();
        setStatistics(data);
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
        <UserIcon />
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {statistics && (
          <div className="statistics p-4">
            <h2 className="text-2xl font-bold mb-2">Your Statistics</h2>
            <ul>
              <li>Games Played: {statistics.gamesPlayed}</li>
              <li>Wins: {statistics.wins}</li>
              <li>Losses: {statistics.losses}</li>
            </ul>
          </div>
        )}
        <Navbar />
      </Base>
    </div>
  );
};