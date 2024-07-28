import { onAuthStateChanged, User } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from "..";

export type UserContextInterface = {
  user: User 
}

export const UserContext = createContext<UserContextInterface>({} as UserContextInterface);
export const UserContextProvider = ({children}: React.PropsWithChildren<{}>) => {

  // WARNING: only use this user to display... 
  // all other use cases: fetching data, etc, should be implemented using onAuthStateChanged

  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) return;
      setUser(user);
    })
  }, [])

  return(
    <UserContext.Provider value={{user}}>
      {children}
    </UserContext.Provider>
  )
}

