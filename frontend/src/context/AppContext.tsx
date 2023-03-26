import { createContext } from "react";
import { useUser } from "../hooks/useUser";
import { useNotes } from "../hooks/useNotes";
import { useDraws } from "../hooks/useDraws";

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
  const { notes, getNotes, deleteNote, createNote, updateNote } = useNotes();
  const drawsContext = useDraws()

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
        deleteNote,
        createNote,
        updateNote,
        drawsContext
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
