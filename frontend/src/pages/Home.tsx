import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Note from "../components/notes/Note";
import notesMock from '../mocks/notes.json'
import { NoteModel } from "../models/note";

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
  return (
    <>
      <h1>
        Hello <strong>{user?.username}</strong>
      </h1>
      <Button onClick={handleLogOut}>Log out</Button>
      <Note note={note}/>
    </>
  );
}
