import { useState } from "react";
import { NoteModel } from "../models/note";
import * as Api from "../network/api";

export function useNotes() {
  const [notes, setNotes] = useState<NoteModel[] | null>();
  const [error, setError] = useState("");

  async function getNotes() {
    try {
      const userNotes = await Api.getNotes();
      setNotes(userNotes);
    } catch (error) {
      console.error(error);
      setNotes(null);
      setError("Notes not found");
    }
  }

  async function createNote(note: NoteModel) {
    try {
      const noteCreated = await Api.createNote(note);
      setNotes(notes => [...notes as NoteModel[], noteCreated])
    } catch (error) {
        console.error(error);
        setNotes(null);
        setError("Notes not found");
    }
  }

  async function updateNote() {
    try {
    } catch (error) {
      console.error(error);
      setNotes(null);
      setError("Note not found");
    }
  }

  async function deleteNote(noteId:string) {
    try {
      await Api.deleteNote(noteId)
      setNotes(notes?.filter(note => note._id !== noteId))
    } catch (error) {
      console.error(error);
      setNotes(null);
      setError("Note not deleted");
    }
  }

  return { notes, getNotes };
}
