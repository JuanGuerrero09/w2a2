import { RequestHandler } from "express";
import NoteModel from '../models/note'
import createHttpError from "http-errors";

export const getNotes:RequestHandler = async (req, res, next) => {
    try {
        const notes = await NoteModel.find().exec()
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
    try {
        if(!title){
            throw createHttpError(401, 'No title added')
        }
        const newNote = await NoteModel.create({
            title,
            text
        })
        //TODO Shared with and author
        res.status(201).json(newNote)
    } catch (error) {
        next(error)
    }
}