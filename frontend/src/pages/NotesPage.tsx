import { useContext, useState } from "react";
import Counter from "../components/countdowns/CountdownEx";
import Note from "../components/notes/Note";
import { NoteModel } from "../models/note";
// import notes from "../mocks/notes.json";
import NoteStyles from "../styles/Note.module.css";
import FloatingButton from "../components/FloatingButton";
import { AppContext } from "../context/AppContext";

const partner = {
  partnername: "Kath",
};

export default function NotesPage() {
  const { notes } = useContext(AppContext);
  return (
    <main>
      <h2 className={NoteStyles.notePageTitle}>
        See all the notes that {partner.partnername} has sent you
      </h2>
      <div className={NoteStyles.notesContainer}>
        {notes?.map((note: NoteModel) => {
          return <Note key={note._id} note={note} onClickEvent="openModal" />;
        })}
      </div>
      <FloatingButton />
    </main>
  );
}
