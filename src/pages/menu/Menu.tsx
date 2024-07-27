import { Base } from "../../shared/BasePage";
import {Navbar} from "../../shared/Navbar";

export const Menu = () => {
  return (
    <Base>
      <ul className="menu bg-base-200 rounded-box w-56">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </ul>

      <Navbar/>
    </Base>
  )
}