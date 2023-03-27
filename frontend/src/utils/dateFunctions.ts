import { NoteModel } from "../models/note";
import { DrawModel } from '../models/draw'

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
}

export function getLastNote(arr: NoteModel[]) {
    const lastestNote = arr.reduce((c, n) => 
    Date.parse(n.createdAt) < Date.parse(c.createdAt) ? c : n
  )
  return lastestNote
}

export function getLastDraw(arr: DrawModel[]) {
  const lastestDraw = arr.reduce((c, n) => 
  Date.parse(n.createdAt) < Date.parse(c.createdAt) ? c : n
)
return lastestDraw
}
