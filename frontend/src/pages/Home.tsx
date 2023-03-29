import { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Note from "../components/notes/Note";
import { NoteModel } from "../models/note";
import { getLastDraw, getLastNote } from "../utils/dateFunctions";
import HomeStyles from "../styles/Home.module.css";
import Countdown from "../components/countdowns/Countdown";
import CanvasSketch from "../components/canvas/CanvasSketch";
import { DrawModel } from "../models/draw";
import DrawHolder from "../components/canvas/DrawHolder";

const firstNote: NoteModel = {
  title: "Hi! Create your first note here!",
  text: "Click to go to the notes page",
  _id: "213121",
  createdAt: "today",
  updatedAt: "tomorrow",
};

const firstDraw: DrawModel = {
  _id: '420',
  createdAt: 'today', 
  img: '',
}

export default function Home() {
  const { user, logout, getNotes, notes, drawsContext } = useContext(AppContext);
  const { draws, getDraws } = drawsContext;
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {}
  };

  useEffect(() => {
    !notes && getNotes()
    !draws && getDraws()
  }, [])
  const lastNote: NoteModel = notes?.length > 0 ? getLastNote(notes): firstNote;
  const lastDraw: DrawModel = draws?.length > 0 ? getLastDraw(draws): firstDraw;

  return (
    <main className={HomeStyles.HomePage}>
      <section className={HomeStyles.Greeting}>
        <h1>
          Hello, <strong>{user?.partnername}</strong>
        </h1>
      </section>
      <div className={HomeStyles.Content}>

      <section className={HomeStyles.NotesSection}>
        <h4>Last note received:</h4>
        <Note note={lastNote} onClickEvent="openNotesPage" />
      </section>
      <section className={HomeStyles.CountdownsSection}>
        <h4>Our Countdowns</h4>
        <Countdown />
      </section>
      <section className={HomeStyles.CountdownsSection}>
        <h4>Our Draws</h4>
        <DrawHolder draw={lastDraw} />
      </section>
      </div>
      {/* <p>{JSON.stringify(notes)}</p> */}
      <Button onClick={handleLogOut}>Log out</Button>
    </main>
  );
}
