import { createContext } from "react";
import { useUser } from "../hooks/useUser";
import { useNotes } from "../hooks/useNotes";

//TODO IMPLEMENT THIS IF APP SCALE
// const initialState:AppState = {
//     user: null,
//     notes: null,
//     isLoggedIn: false
// }

export const AppContext = createContext(null as any);

type Props = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: Props) {
  const { user, error, login, logout, signUp, getLoggedUser } = useUser();
  const { notes, getNotes } = useNotes();

  return (
    <AppContext.Provider
      value={{
        user,
        error,
        login,
        logout,
        signUp,
        getLoggedUser,
        notes,
        getNotes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
