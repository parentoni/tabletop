import { Base } from "../../shared/BasePage";
import { Navbar } from "../../shared/Navbar";
import { UserIcon } from "../../shared/UserIcon";
import { TopProfiles } from "../../shared/TopProfiles";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../..";

export const Home = () => {

  const suggestedEvents = ["Event A", "Event B", "Event C"];
  const recentActivities = ["Activity 1", "Activity 2", "Activity 3"];

  const [user, setUser] = useState<User>();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) return;
      setUser(user)
    });
  }, [])

  return (
    <div className="container mx-auto max-w-sm">
      <Base>
        <div className="flex items-center p-4">
          <img src={require("../../assets/logo-transparent.jpg")} alt="App Icon" className="w-10 h-10 mr-2" />
          <UserIcon />
        </div>
        <div className="welcome-message text-center p-4">
          <h1 className="text-4xl font-bold mb-4">Welcome {user?.displayName?.split(" ")[0]}</h1>
        </div>

        <div className="suggested-events p-4">
          <h2 className="text-2xl font-bold mb-2">Suggested Events</h2>
          <ul>
            {suggestedEvents.map((event, index) => (
              <li key={index} className="mb-1">{event}</li>
            ))}
          </ul>
        </div>

        <div className="top-profiles p-4">
          <h2 className="text-2xl font-bold mb-2">Top Profiles</h2>
          <TopProfiles />
        </div>

        <div className="recent-activities p-4">
          <h2 className="text-2xl font-bold mb-2">Recent Activities</h2>
          <ul>
            {recentActivities.map((activity, index) => (
              <li key={index} className="mb-1">{activity}</li>
            ))}
          </ul>
        </div>

        <Navbar />
      </Base>
    </div>
  );
};
