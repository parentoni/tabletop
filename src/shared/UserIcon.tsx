import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from ".."



export const UserIcon = () => {

  const [initial, setInitial] = useState<string>("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const splitted: string[] = user?.displayName?.split(" ") || [];
      if (splitted.length === 0) return;
      setInitial(splitted[0][0]);
      if (splitted.length === 1) return;
      setInitial(splitted[0][0] + splitted[1][0]);
    })
  }, [])

  return (
    <div className="avatar placeholder flex justify-end w-full m-4">
      <div className="user-icon text-white w-16 rounded-full">
        <span className="text-3xl">{initial.toUpperCase()}</span>
      </div>
    </div>
  )
}
