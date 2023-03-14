import { useState } from 'react'
import './App.css'
import Counter from '../../components/counters/Counter'
import Note from '../../components/notes/Note'
import { NoteModel } from '../../models/note'

const mockNote:NoteModel = {
    _id: '213',
    title: 'Hola',
    createdAt: '123123123',
    updatedAt: '2343242423',
    text: 'Mo'
  }

export default function NotesPage() {
    const [notes, setNotes] = useState<NoteModel[]>([mockNote])
    return (
      <div className="App">
        <Note note={notes[0]}/>
        <Counter/>
      </div>
    )
}
