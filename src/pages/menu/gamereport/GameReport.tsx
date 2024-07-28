import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Base } from "../../../shared/BasePage";
import { Navbar } from "../../../shared/Navbar";
import { TopBar } from "../../../shared/register/TopBar";
import { useGameStatistics } from "../../GameStatisticsContext";

type GameResult = "Win" | "Loss" | "Draw";

export const GameReport = () => {
  const navigate = useNavigate();
  const { updateStatistics } = useGameStatistics();
  const [playerName, setPlayerName] = useState("");
  const [opponentName, setOpponentName] = useState("");
  const [gameResult, setGameResult] = useState<GameResult>("Win");
  const [reportSubmitted, setReportSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    updateStatistics(gameResult);
    setReportSubmitted(true);
  };

  return (
    <div className="container mx-auto max-w-sm">
      <Base>
        <TopBar />
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700">Player Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Opponent Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={opponentName}
              onChange={(e) => setOpponentName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Game Result</label>
            <select
              className="select select-bordered w-full"
              value={gameResult}
              onChange={(e) => setGameResult(e.target.value as GameResult)}
              required
            >
              <option value="Win">Win</option>
              <option value="Loss">Loss</option>
              <option value="Draw">Draw</option>
            </select>
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
            Submit Report
          </button>
        </form>
        {reportSubmitted && (
          <div className="mt-4 p-2 bg-green-500 text-white rounded">
            <p>Game Report Submitted:</p>
            <p>Player: {playerName}</p>
            <p>Opponent: {opponentName}</p>
            <p>Result: {gameResult}</p>
          </div>
        )}
        <Navbar />
      </Base>
    </div>
  );
};