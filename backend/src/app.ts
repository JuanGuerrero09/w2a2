import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import "dotenv/config";
import NoteModel from './models/note'
import notesRoutes from './routes/notes';
import userRoutes from './routes/users';
import drawRoutes from './routes/draws'
import session from 'express-session';
import MongoStore from 'connect-mongo'

const app = express()

app.use(cors())

app.use(morgan('dev'))

app.use(express.json())

app.use(session({
    secret: 'kitkath',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 1000,
    },
    rolling: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_CONNECTION
    })
}))

app.use('/api/notes', notesRoutes)
app.use('/api/users', userRoutes)
app.use('/api/draws', drawRoutes)

//Error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req:Request, res: Response, next: NextFunction) => {
    console.error(error)
    console.log('im an error in app.ts')
    let errorMessage = 'An unknown error has ocurred'
    if(error instanceof Error) errorMessage = error.message
    res.status(500).json({error: errorMessage})
})


export default app