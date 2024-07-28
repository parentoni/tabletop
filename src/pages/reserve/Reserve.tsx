import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Base } from "../../shared/BasePage";
import { Navbar } from "../../shared/Navbar";
import { UserIcon } from "../../shared/UserIcon";

type Player = {
  id: string;
  name: string;
};

export const Reserve = () => {
  const location = useLocation();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reservationName, setReservationName] = useState("");
  const [invitedPlayers, setInvitedPlayers] = useState<Player[]>([]);
  const [playerSearch, setPlayerSearch] = useState("");
  const [playerResults, setPlayerResults] = useState<Player[]>([]);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const selectedDate = queryParams.get("date");
    if (selectedDate) {
      setDate(selectedDate);
    }
  }, [location]);

  const handlePlayerSearch = async (searchTerm: string) => {
    setPlayerSearch(searchTerm);
    const response = await fetch(`/api/players?search=${searchTerm}`);
    const data = await response.json();
    setPlayerResults(data);
  };

  const handleAddPlayer = (player: Player) => {
    setInvitedPlayers([...invitedPlayers, player]);
    setPlayerSearch("");
    setPlayerResults([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const reservation = {
      date,
      time,
      reservationName,
      invitedPlayers,
    };
    await fetch("/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservation),
    });
    setSuccessMessage("Reservation successfully made!");
  };

  return (
    <div className="container mx-auto max-w-sm">
      <Base>
        <UserIcon />
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input type="text" value={date} readOnly className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Time</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Reservation Name</label>
            <input type="text" value={reservationName} onChange={(e) => setReservationName(e.target.value)} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Invite Players</label>
            <input type="text" value={playerSearch} onChange={(e) => handlePlayerSearch(e.target.value)} className="w-full p-2 border rounded" placeholder="Search players" />
            {playerResults.length > 0 && (
              <ul className="border rounded mt-2">
                {playerResults.map((player: Player) => (
                  <li key={player.id} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleAddPlayer(player)}>
                    {player.name}
                  </li>
                ))}
              </ul>
            )}
            <ul className="mt-2">
              {invitedPlayers.map((player: Player) => (
                <li key={player.id} className="p-2 bg-gray-100 rounded mt-1">
                  {player.name}
                </li>
              ))}
            </ul>
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Make Reservation</button>
        </form>
        {successMessage && <div className="mt-4 p-2 bg-green-500 text-white rounded">{successMessage}</div>}
        <Navbar />
      </Base>
    </div>
  );
};