import { Note } from './Note.js'
import { useEffect, useState } from 'react'
import { createNote } from './services/createNote.js'
import { getAllNotes } from './services/getAllNotes.js'

const App = (props) => {

  const [notes, setNotes] = useState([])

  const [newNote, setNewNote] = useState("")

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
    getAllNotes()
      .then(allNotes => {
        setNotes(allNotes)
        setLoading(false)
      })
      }, 2000)
  }, [])

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1
    }

    createNote(noteToAddToState)
    .then(newNote => {
      setNotes([...notes, newNote])
    }

    )

    setNotes([...notes, noteToAddToState])
    setNewNote("")
  }
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <p>
        {
          loading ? "Cargando...": ""
        }
        </p>
        {notes
        .map(note => 
          <Note key={note.id} {...note} />
        )}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Add note" onChange={handleChange} value={newNote}></input>
          <button>Create Note</button>
        </form>
      </ul>
    </div>
  )
}

export default App 