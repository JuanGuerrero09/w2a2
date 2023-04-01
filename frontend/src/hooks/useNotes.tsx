import { useState } from "react";
import { NoteModel } from "../models/note";
import * as Api from "../network/api";
import { sortArray } from "../utils/sortFunction";

export function useNotes() {
  const [notes, setNotes] = useState<NoteModel[] | null>();
  const [error, setError] = useState("");

  async function getNotes() {
    try {
      const userNotes = await Api.getNotes();
      const partnerNotes = await Api.getSharedNotes()
      const allNotes = [...userNotes, ...partnerNotes]
      const sortedNoteArray = sortArray(allNotes)
      setNotes(sortedNoteArray as NoteModel[])
    } catch (error) {
      console.error(error);
      setNotes(null);
      setError("Notes not found");
    }
  }

  async function createNote(note: NoteModel) {
    try {
      const noteCreated = await Api.createNote(note);
      const noteArray = notes ? [...notes, noteCreated] : [noteCreated]
      const sortedNoteArray = sortArray(noteArray)
      setNotes(sortedNoteArray as NoteModel[])
    } catch (error) {
        console.error(error);
        setNotes(null);
        setError("Notes not found");
    }
  }

  interface UpdateNoteParams{
    note: Api.NoteInput,
    noteId: string
  }

  async function updateNote({noteId, note}: UpdateNoteParams) {
    try {
      console.log(note)
      console.log(noteId)
      const noteUpdated = await Api.updateNote(noteId, note)
      setNotes(notes?.map(existingNote => existingNote._id === noteUpdated._id ? noteUpdated : existingNote))
    } catch (error) {
      console.error(error);
      setNotes(null);
      setError("Note not found");
    }
  }

  async function deleteNote(noteId:string) {
    try {
      console.log(noteId)
      await Api.deleteNote(noteId)
      setNotes(notes?.filter(note => note._id !== noteId))
    } catch (error) {
      console.error(error);
      setNotes(null);
      setError("Note not deleted");
    }
  }

  return { notes, getNotes, deleteNote, createNote, updateNote };
}
