import { NoteModel } from "../models/note";

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
}

export function getLastNote(noteArr: NoteModel[]) {
    const lastestNote = noteArr.reduce((c, n) => 
    Date.parse(n.createdAt) < Date.parse(c.createdAt) ? c : n
  )
  return lastestNote
}
