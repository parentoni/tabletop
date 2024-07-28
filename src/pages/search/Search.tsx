import { Base } from "../../shared/BasePage";
import {Navbar} from "../../shared/Navbar";
import {UserIcon} from "../../shared/UserIcon";
import {TopProfiles} from "../../shared/TopProfiles";

export const Search = () => {
  return (
    <div className="container mx-auto max-w-sm">
      <Base>
        <div className="flex items-center p-4">
          <img src={require("../../assets/logo-transparent.jpg")} alt="App Icon" className="w-10 h-10 mr-2"/>
          <UserIcon/>
        </div>

        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search"/>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"/>
          </svg>
        </label>

        <h2 className="text-3xl font-bold text-gray-800 mb-2 mt-2 text-center p-2">TOP players</h2>
        <TopProfiles/>

        <Navbar/>
      </Base>
    </div>
  )
}