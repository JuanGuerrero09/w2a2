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
      setError("Invalid log in");
    }
  }

  return {notes, getNotes};
}
