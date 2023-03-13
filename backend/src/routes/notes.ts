import express from "express";
import * as NoteController from '../controllers/notes'

const router = express.Router()

router.get('/', NoteController.getNotes)
router.post('/', NoteController.createNote)

export default router