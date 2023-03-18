import express from "express";
import * as NoteController from '../controllers/notes'

const router = express.Router()

router.get('/', NoteController.getNotes)
router.post('/', NoteController.createNote)
router.post('/:noteId', NoteController.deleteNote)
router.patch('/:noteId', NoteController.updateNote)

export default router