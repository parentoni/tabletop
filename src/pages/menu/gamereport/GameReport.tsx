import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Base } from "../../../shared/BasePage";
import { Navbar } from "../../../shared/Navbar";
import { TopBar } from "../../../shared/register/TopBar";
import { useGameStatistics } from "../../GameStatisticsContext";

type GameResult = "Win" | "Loss" | "Draw";
type Player = { id: string; name: string };

const fetchDummyPlayers = async (searchTerm: string) => {
  return [
    { id: "1", name: "Liam" },
    { id: "2", name: "Noah" },
    { id: "3", name: "Oliver" },
    { id: "4", name: "Elijah" },
    { id: "5", name: "William" },
    { id: "6", name: "James" },
    { id: "7", name: "Benjamin" },
    { id: "8", name: "Lucas" },
    { id: "9", name: "Henry" },
    { id: "10", name: "Alexander" },
    { id: "11", name: "Mason" },
    { id: "12", name: "Michael" },
    { id: "13", name: "Ethan" },
    { id: "14", name: "Daniel" },
    { id: "15", name: "Jacob" },
    { id: "16", name: "Logan" },
    { id: "17", name: "Jackson" },
    { id: "18", name: "Levi" },
    { id: "19", name: "Sebastian" },
    { id: "20", name: "Mateo" },
    { id: "21", name: "Jack" },
    { id: "22", name: "Owen" },
    { id: "23", name: "Theodore" },
    { id: "24", name: "Aiden" },
    { id: "25", name: "Samuel" },
    { id: "26", name: "Joseph" },
    { id: "27", name: "John" },
    { id: "28", name: "David" },
    { id: "29", name: "Wyatt" },
    { id: "30", name: "Matthew" },
    { id: "31", name: "Luke" },
    { id: "32", name: "Asher" },
    { id: "33", name: "Carter" },
    { id: "34", name: "Julian" },
    { id: "35", name: "Grayson" },
    { id: "36", name: "Leo" },
    { id: "37", name: "Jayden" },
    { id: "38", name: "Gabriel" },
    { id: "39", name: "Isaac" },
    { id: "40", name: "Lincoln" },
    { id: "41", name: "Anthony" },
    { id: "42", name: "Hudson" },
    { id: "43", name: "Dylan" },
    { id: "44", name: "Ezra" },
    { id: "45", name: "Thomas" },
    { id: "46", name: "Charles" },
    { id: "47", name: "Christopher" },
    { id: "48", name: "Jaxon" },
    { id: "49", name: "Maverick" },
    { id: "50", name: "Josiah" },
  ].filter(player => player.name.toLowerCase().includes(searchTerm.toLowerCase()));
};

export const GameReport = () => {
  const navigate = useNavigate();
  const { updateStatistics } = useGameStatistics();
  const [playerName, setPlayerName] = useState("");
  const [opponentName, setOpponentName] = useState("");
  const [gameResult, setGameResult] = useState<GameResult>("Win");
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [playerSearch, setPlayerSearch] = useState("");
  const [opponentSearch, setOpponentSearch] = useState("");
  const [playerResults, setPlayerResults] = useState<Player[]>([]);
  const [opponentResults, setOpponentResults] = useState<Player[]>([]);

  useEffect(() => {
    if (playerSearch) {
      fetchDummyPlayers(playerSearch).then(setPlayerResults);
    } else {
      setPlayerResults([]);
    }
  }, [playerSearch]);

  useEffect(() => {
    if (opponentSearch) {
      fetchDummyPlayers(opponentSearch).then(setOpponentResults);
    } else {
      setOpponentResults([]);
    }
  }, [opponentSearch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    updateStatistics(gameResult);
    setReportSubmitted(true);
  };

  const handlePlayerSelect = (name: string) => {
    setPlayerName(name);
    setPlayerSearch("");
    setPlayerResults([]);
  };

  const handleOpponentSelect = (name: string) => {
    setOpponentName(name);
    setOpponentSearch("");
    setOpponentResults([]);
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
              onChange={(e) => {setPlayerName(e.target.value); setPlayerSearch(e.target.value)}}
              onFocus={() => setPlayerSearch(playerName)}
              required
            />
            {playerResults.length > 0 && (
              <ul className="border rounded mt-2 max-h-40 overflow-y-auto">
                {playerResults.map((player: Player) => (
                  <li key={player.id} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handlePlayerSelect(player.name)}>
                    {player.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Opponent Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={opponentName}
              onChange={(e) => {setOpponentName(e.target.value); setOpponentSearch(e.target.value)}}
              onFocus={() => setOpponentSearch(opponentName)}
              required
            />
            {opponentResults.length > 0 && (
              <ul className="border rounded mt-2 max-h-40 overflow-y-auto">
                {opponentResults.map((player: Player) => (
                  <li key={player.id} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleOpponentSelect(player.name)}>
                    {player.name}
                  </li>
                ))}
              </ul>
            )}
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