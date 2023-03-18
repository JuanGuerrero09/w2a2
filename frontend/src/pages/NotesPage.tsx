import { useState } from "react";
import Counter from "../components/counters/Counter";
import Note from "../components/notes/Note";
import { NoteModel } from "../models/note";
import notes from "../mocks/notes.json";

export default function NotesPage() {
  return (
    <main>
      <Counter />
      <div className="noteContainer">
        {notes.map((note: NoteModel) => {
          return <Note key={note._id} note={note} onClickEvent="openModal"/>;
        })}
      </div>
    </main>
  );
}
