import { onAuthStateChanged, User } from "firebase/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, db } from "../..";
import { Base } from "../../shared/BasePage";
import { Navbar } from "../../shared/Navbar";
import { LocationPersistent } from "../../shared/PersistentTypes";
import { TopBar } from "../../shared/register/TopBar";

type Player = {
  id: string;
  name: string;
};

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

const submitDummyReservation = async (reservation: any) => {
  return { success: true };
};

export const Reserve = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("07:00:00");
  const [reservationName, setReservationName] = useState("");
  const [invitedPlayers, setInvitedPlayers] = useState<Player[]>([]);
  const [playerSearch, setPlayerSearch] = useState("");
  const [playerResults, setPlayerResults] = useState<Player[]>([]);
  const [successMessage, setSuccessMessage] = useState("");

  const [locations, setLocations] = useState<LocationPersistent[]>();
  const [selectedLocation, setSelectedLocation] = useState<LocationPersistent>();


  const user = useRef<User>({} as User)

  useEffect(() => {
    onAuthStateChanged(auth, (fuser) => {
      if (!fuser || fuser == null) navigate('/register');
      user.current = fuser as User
    })
  }, [])

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const selectedDate = queryParams.get("date");
    if (selectedDate) {
      setDate(selectedDate);
    }
  }, [location]);

  const handlePlayerSearch = async (searchTerm: string) => {
    setPlayerSearch(searchTerm);
    const data = await fetchDummyPlayers(searchTerm);
    setPlayerResults(data);
  };

  const handleAddPlayer = (player: Player) => {
    setInvitedPlayers([...invitedPlayers, player]);
    setPlayerSearch("");
    setPlayerResults([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = {
        time: new Date(date + ":" + time),
        location: selectedLocation,
        user: {
          name: user.current.displayName,
          email: user.current.email
        }
      }

      await addDoc(collection(db, "booking"), data)
      alert("Reservation successfully made!");
      //navigate("/home");
    } catch (err) {
      console.log(err); alert("Something went wrong")
    }
  };


  useEffect(() => {
    getDocs(collection(db, "locations")).then(res => {
      const temp: LocationPersistent[] = [];
      res.forEach(doc => {
        temp.push(doc.data() as LocationPersistent)
      })

      setLocations(temp);
    })
  }, [])

  return (
    <div className="container mx-auto max-w-sm">
      <Base>
        <TopBar />
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input type="date" className="input input-bordered w-full" value={date} onChange={e => setDate(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Time</label>
            <input type="time" value={time} max="21:30:00" step="1800"  onChange={(e) => setTime(e.target.value)} className="input input-bordered w-full" required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <select className="select select-bordered w-full" onChange={e => setSelectedLocation({name: e.target.value.split("@")[0] as string, college: e.target.value.split("@")[1] as string})}>
              {locations?.map(loc => (
                <option value={loc.name + "@" + loc.college}>{loc.name} @ {loc.college}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Invite Players</label>
            <input type="text" value={playerSearch} onChange={(e) => handlePlayerSearch(e.target.value)} className="w-full p-2 border rounded" placeholder="Search players" />
            {playerResults.length > 0 && (
              <ul className="border rounded mt-2 max-h-40 overflow-y-auto">
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
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
            Make reservation
          </button>
        </form>
        {successMessage && <div className="mt-4 p-2 bg-green-500 text-white rounded">{successMessage}</div>}
        <Navbar />
      </Base>
    </div>
  );
};