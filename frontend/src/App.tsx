import { useState } from 'react'
import './App.css'
import Note from './components/notes/Note'
import mockNotes from './mocks/notes.json'
import Counter from './components/counters/Counter'
import { NoteModel } from './models/note'

const mockNote:NoteModel = {
  _id: '213',
  title: 'Hola',
  createdAt: '123123123',
  updatedAt: '2343242423',
  text: 'Mo'
}
function App() {
const [notes, setNotes] = useState<NoteModel[]>([mockNote])
  return (
    <div className="App">
      <Note note={notes[0]}/>
      <Counter/>
    </div>
  )
}

export default App
