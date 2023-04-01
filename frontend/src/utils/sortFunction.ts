import { NoteModel } from "../models/note";
import { DrawModel } from '../models/draw'


export function sortArray(array: NoteModel[] | DrawModel[]) {
    const sortedArray = array.sort((a, b) => {
      const dateA = Date.parse(a.createdAt);
      const dateB = Date.parse(b.createdAt);
      if (dateA > dateB) {
        return -1;
      } else if (dateA < dateB) {
        return 1;
      } else {
        return 0;
      }
    });
    return sortedArray;
  }