import { createContext } from 'react';
import { useUser } from '../hooks/useUser';

//TODO IMPLEMENT THIS IF APP SCALE
// const initialState:AppState = {
//     user: null,
//     notes: null,
//     isLoggedIn: false
// }

export const AppContext = createContext(null as any)

type Props = {
    children: React.ReactNode;
  };

export default function AppProvider({children} : Props){

    const {user, error, login, logout, getLoggedUser} = useUser()

    return (
        <AppContext.Provider value={{user, error, login, logout, getLoggedUser}}>
            {children}
        </AppContext.Provider>
    )
}