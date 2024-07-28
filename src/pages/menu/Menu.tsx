import { Base } from "../../shared/BasePage";
import { Navbar } from "../../shared/Navbar";
import { Link } from "react-router-dom";
import {UserIcon} from "../../shared/UserIcon";

export const Menu = () => {
  return (
    <div className="container mx-auto max-w-sm">
      <Base>
        <UserIcon />

        {/*Menu items*/}
        <div className="flex flex-col items-center justify-start min-h-screen">
          <ul className="menu bg-white rounded-box w-full shadow-lg">
            <li className="menu-item w-full border-b border-gray-300 hover:bg-gray-200 hover:rounded-lg"><Link to="/settings">Settings</Link></li>
            <li className="menu-item w-full border-b border-gray-300 hover:bg-gray-200 hover:rounded-lg"><Link to="/statistics">Statistics</Link></li>
            <li className="menu-item w-full border-b border-gray-300 hover:bg-gray-200 hover:rounded-lg"><Link to="/accountinformation">Account information</Link></li>
            <li className="menu-item w-full hover:bg-gray-200 hover:rounded-lg"><Link to="/logout">Log out</Link></li>
          </ul>
        </div>
        <Navbar/>
      </Base>
    </div>
  );
}