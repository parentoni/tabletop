import { Base } from "../../shared/BasePage";
import {Navbar} from "../../shared/Navbar";
import {UserIcon} from "../../shared/UserIcon";

export const Home = () => {
  return (
    <Base>
      <UserIcon />

      <Navbar />
    </Base>
  )
}