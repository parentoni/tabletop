import { useGameStatistics } from "../../GameStatisticsContext";
import { Base } from "../../../shared/BasePage";
import { Navbar } from "../../../shared/Navbar";
import { TopBar } from "../../../shared/register/TopBar";

export const Statistics = () => {
  const { statistics } = useGameStatistics();

  return (
    <div className="container mx-auto max-w-sm">
      <Base>
        <TopBar />
        <div className="statistics p-4">
          <h2 className="text-2xl font-bold mb-2">Your Statistics</h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Total</h3>
            <ul>
              <li>Games Played: {statistics.gamesPlayed}</li>
              <li>Wins: {statistics.wins}</li>
              <li>Losses: {statistics.losses}</li>
            </ul>
          </div>
        </div>
        <Navbar />
      </Base>
    </div>
  );
};