import {UserIcon} from "../UserIcon";
import {BackButton} from "./BackButton";

export const TopBar = () => {
  return (
    <div className="flex items-center justify-between">
      <BackButton/>
      <UserIcon/>
    </div>
  )
}