import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import "dotenv/config";
import NoteModel from './models/note'
import notesRoutes from './routes/notes';

const app = express()

app.use(cors())

app.use(morgan('dev'))

app.use(express.json())

app.get('/', async (req, res) => {
    res.send('/api/notes for notes')
})

app.use('/api/notes', notesRoutes)

//Error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req:Request, res: Response, next: NextFunction) => {
    console.error(error)
    let errorMessage = 'An unknown error has ocurred'
    if(error instanceof Error) errorMessage = error.message
    res.status(500).json({error: errorMessage})
})


export default app