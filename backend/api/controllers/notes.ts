import { RequestHandler } from "express";
import NoteModel from '../models/note'
import UserModel from '../models/user'
import createHttpError from "http-errors";
import mongoose from "mongoose";

export const getNotes:RequestHandler = async (req, res, next) => {

    const currentUserId = req.session?.userId

    try {
        const notes = await NoteModel.find({author: currentUserId}).exec()
        res.status(200).json(notes)
    } catch (error) {
        next(error)
    }
}

export const getSharedNotes:RequestHandler = async (req, res, next) => {

    const currentUserId = req.session?.userId

    try {
        const user = await UserModel.findById(currentUserId).exec()
        const partnerId = user?.partnerId
        const notes = await NoteModel.find({author: partnerId}).exec()
        res.status(200).json(notes)
    } catch (error) {
        next(error)
    }
}

interface CreateNoteBody {
    title: 'string',
    text?: 'string'
}

export const createNote: RequestHandler<unknown, unknown, CreateNoteBody, unknown> = async (req, res, next) => {
    const title = req.body.title
    const text = req.body.text
    const author = req.session.userId
    try {
        if(!author){
            throw createHttpError(409, 'You need to be authenticated to create notes')
        }
        if(!title){
            throw createHttpError(401, 'No title added')
        }
        const newNote = await NoteModel.create({
            title,
            text,
            author
        })
        //TODO Shared with and author
        res.status(201).json(newNote)
    } catch (error) {
        next(error)
    }
}

interface UpdateNoteParams {
    noteId: string
}

interface UpdateNoteBody {
    title: string,
    text: string,
}

export const updateNote: RequestHandler<UpdateNoteParams, unknown, UpdateNoteBody, unknown> = async (req, res, next) => {
    const noteId = req.params.noteId
    const newTitle = req.body.title
    const newText = req.body.text
    // const currentUserId = req.session.userId

    try {

        if (!mongoose.isValidObjectId(noteId)) {
            throw createHttpError(400, "Invalid note id");
        }

        if (!newTitle) {
            throw createHttpError(400, "Note must have a title");
        }
        
        const note = await NoteModel.findById(noteId).exec()

        if (!note) {
            throw createHttpError(404, "Note not found");
        }

        // if (!note.author!.equals(currentUserId)) {
        //     throw createHttpError(401, "You cannot access this note");
        // }

        note.title = newTitle
        note.text = newText

        const updatedNote = await note.save()

        res.status(200).json(updatedNote)

    } catch (error) {
        next(error)
    }


}

export const deleteNote: RequestHandler = async (req, res, next) => {
    const noteId = req.params.noteId
    console.log(noteId)
    // const authenticatedUserId = req.session.userId;

    try {
        if (!mongoose.isValidObjectId(noteId)) {
            throw createHttpError(400, "Invalid note id");
        }

        const note = await NoteModel.findById(noteId).exec()

        if(!note){
            throw createHttpError(404, 'Note not found')
        }

        // if (!note.userId.equals(authenticatedUserId)) {
        //     throw createHttpError(401, "You cannot access this note");
        // }

        await note.deleteOne()

        res.status(204).json({"response": "note successfully deleted"})

    } catch (error) {
        next(error)
    }
}
