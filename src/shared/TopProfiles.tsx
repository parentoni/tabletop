import { Link } from "react-router-dom";

type MedalType = "gold" | "silver" | "bronze" | null;

interface Profile {
  username: string;
  medal: MedalType;
}

export const TopProfiles = () => {
  const profiles: Profile[] = [
    { username: "User1", medal: "gold" },
    { username: "User2", medal: "silver" },
    { username: "User3", medal: "bronze" },
    { username: "User4", medal: null },
    { username: "User5", medal: null },
  ];

  const getMedalIcon = (medal: MedalType, index: number) => {
    const baseClasses = "flex items-center justify-center w-8 h-8 rounded-full text-white aspect-square";
    switch (medal) {
      case "gold":
        return <div className={`${baseClasses} bg-yellow-500`}>{index + 1}</div>;
      case "silver":
        return <div className={`${baseClasses} bg-gray-400`}>{index + 1}</div>;
      case "bronze":
        return <div className={`${baseClasses} bg-yellow-700`}>{index + 1}</div>;
      default:
        return <div className={`${baseClasses} bg-gray-300`}>{index + 1}</div>;
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <ul className="menu bg-white rounded-box w-full shadow-lg">
        {profiles.map((profile, index) => (
          <li key={index} className="menu-item w-full border-b border-gray-300 flex items-center hover:bg-gray-200 hover:rounded-lg">
            <div className="flex items-center w-full">
              {getMedalIcon(profile.medal, index)}
              <Link to={`/profile/${profile.username}`} className="ml-2">
                {profile.username}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};