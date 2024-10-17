import {Note} from './Note.js'
import { useState } from 'react'

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)

  const [newNote, setNewNote] = useState("")

  const [showAll, setShowAll] = useState(true)

  const handleShowAll = () => {
    setShowAll(() => !showAll)
  }

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5
    }
    setNotes([...notes, noteToAddToState])
    setNewNote("")
  }
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>{ showAll ? 'Show only important' : 'Show All'}</button>
      <ul>
        
        {notes
        .filter(note => 
        {if (showAll === true) 
          return true
        return note.important === true
        })
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