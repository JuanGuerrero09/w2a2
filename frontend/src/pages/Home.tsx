import { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Note from "../components/notes/Note";
import { NoteModel } from "../models/note";
import { getLastNote } from "../utils/dateFunctions";
import HomeStyles from "../styles/Home.module.css";
import Countdown from "../components/countdowns/Countdown";

const firstNote: NoteModel = {
  title: "Hi! Create your first note here!",
  text: "Click to go to the notes page",
  _id: "213121",
  createdAt: "today",
  updatedAt: "tomorrow",
};

export default function Home() {
  const { user, logout, getNotes, notes } = useContext(AppContext);
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {}
  };

  useEffect(() => {
    getNotes()
  }, [])

  const lastNote: NoteModel = notes? getLastNote(notes): firstNote;

  return (
    <main className={HomeStyles.HomePage}>
      <section className={HomeStyles.Greeting}>
        <h1>
          Hello, <strong>{user?.partnername}</strong>
        </h1>
      </section>
      <section className={HomeStyles.NotesSection}>
        <h4>Last note received:</h4>
        <Note note={lastNote} onClickEvent="openNotesPage" />
      </section>
      <section className={HomeStyles.CountdownsSection}>
        <h4>Our Countdowns</h4>
        <Countdown />
      </section>
      {/* <p>{JSON.stringify(notes)}</p> */}
      <Button onClick={handleLogOut}>Log out</Button>
    </main>
  );
}
