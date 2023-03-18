import { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Note from "../components/notes/Note";
import notes from '../mocks/notes.json'
import { NoteModel } from "../models/note";
import { getLastNote } from "../utils/dateFunctions";

const note:NoteModel = {
  title: 'Hola mundo',
  text: 'Soy el texto de la primera nota',
  _id: '213121',
  createdAt: 'today',
  updatedAt: 'tomorrow'
}

export default function Home() {
  const { user, logout } = useContext(AppContext);
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
    }
  };
  // useEffect(() => {
  //   getNotes()
  // }, [])

  const lastNote = getLastNote(notes)
  
  return (
    <>
      <h1>
        Hello <strong>{user?.username}</strong>
      </h1>
      <h2>Last note received:</h2>
      <Note note={lastNote} onClickEvent="openNotesPage"/>
      <h2>Our Countdowns</h2>
      {/* <p>{JSON.stringify(notes)}</p> */}
      <Button onClick={handleLogOut}>Log out</Button>
    </>
  );
}
