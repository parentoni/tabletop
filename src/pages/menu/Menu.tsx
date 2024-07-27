import { Base } from "../../shared/BasePage";
import { Navbar } from "../../shared/Navbar";
import { Link } from "react-router-dom";

const userInitials = "VK"

export const Menu = () => {
  return (
    <Base>
      {/*Avatar*/}
      <div className="avatar placeholder flex justify-end w-full">
        <div className="bg-gray-800 text-white w-16 rounded-full">
          <span className="text-3xl">{userInitials}</span>
        </div>
      </div>

      {/*Menu items*/}
      <div className="flex flex-col items-center justify-start min-h-screen">
        <ul className="menu bg-white rounded-box w-full shadow-lg">
          <li className="menu-item w-full border-b border-gray-300"><Link to="/settings">Settings</Link></li>
          <li className="menu-item w-full border-b border-gray-300"><Link to="/statistics">Statistics</Link></li>
          <li className="menu-item w-full border-b border-gray-300"><Link to="/temp1">Temporary Item 1</Link></li>
          <li className="menu-item w-full border-b border-gray-300"><Link to="/temp2">Temporary Item 2</Link></li>
          <li className="menu-item w-full"><Link to="/temp3">Temporary Item 3</Link></li>
        </ul>
      </div>
      <Navbar/>
    </Base>
  );
}