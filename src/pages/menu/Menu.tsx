import { Base } from "../../shared/BasePage";
import { Navbar } from "../../shared/Navbar";
import { Link } from "react-router-dom";
import { UserIcon } from "../../shared/UserIcon";

export const Menu = () => {
  return (
    <div className="container mx-auto max-w-sm">
      <Base>
        <div className="flex items-center p-4">
          <img src={require("../../assets/logo-transparent.jpg")} alt="App Icon" className="w-10 h-10 mr-2"/>
          <UserIcon/>
        </div>

        {/*Menu items*/}
        <div className="flex flex-col items-center justify-start min-h-screen">
          <ul className="menu bg-white rounded-box w-full shadow-lg">
            <MenuLink to={"/settings"} title={"Settings"}/>
            <MenuLink to={"/statistics"} title={"Statistics"}/>
            <MenuLink to={"/accountinformation"} title={"Account information"}/>
            <MenuLink to={"/reserve"} title={"Book a spot"}/>
            <li className="menu-item w-full border-gray-300 hover:bg-gray-200 hover:rounded-lg">
              <Link to="/logout">Log out</Link>
            </li>
          </ul>
        </div>
        <Navbar/>
      </Base>
    </div>
  );
}

export type MenuLinkInterface = {
  to: string, title: string
}

export const MenuLink = (props: MenuLinkInterface) => {
  return (
    <li className="menu-item w-full border-b border-gray-300 hover:bg-gray-200 hover:rounded-lg">
      <Link to={props.to}>{props.title}</Link>
    </li>
  )
}