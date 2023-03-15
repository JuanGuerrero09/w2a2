import { NoteModel } from "../models/note";
import { UserModel } from "../models/user";

// TODO IMPLEMENT THIS IF APP SCALE

export enum AppActions {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    SIGNUP = 'SIGNUP',
    GETNOTES = 'GETNOTES',
    DELETENOTE = 'DELETENOTE',
    CREATENOTE = 'CREATENOTE',
    EDITNOTE = 'EDITNOTE'
}

export interface AppState {
    user: UserModel | null,
    isLoggedIn: boolean,
    notes: NoteModel[] | null
}