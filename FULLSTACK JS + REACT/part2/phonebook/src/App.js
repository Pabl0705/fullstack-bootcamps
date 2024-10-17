import { useState, useEffect } from 'react'
import { Numbers } from './components/Numbers.js'
import { addPersonToJSON } from './services/addPersonToJSON.js'
import { getContacts } from './services/getContacts.js'
import { deleteContact } from "./services/deleteContact.js";
import { handleContactExists } from "./services/handleContactExists.js";

const ERRNotification = ({message}) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      <h2>{message}</h2>
    </div>
  )
}

const Notification = ({message}) => {
  if (message === null) {
    return null
  }

  return (
    <div className="good">
      <h2>{message}</h2>
    </div>
  )
}

const Filter = ({handler, search}) => {
  return (
    <div>
      <h2>Contacts filter</h2>
        Search: <input onChange={handler} value={search}/>
    </div>)
}

const Phonebook = (phonebookProps) => {
  return (
  <div>
    <h2>Phonebook</h2>
    <form onSubmit={phonebookProps.submitHandler}>
      <div>
        Name: <input onChange={phonebookProps.nameHandler} value={phonebookProps.name}/>
      </div>
      <div>
        Number: <input onChange={phonebookProps.numberHandler} value={phonebookProps.number}/>
      </div>
      <div>
        <button>ADD</button>
      </div>
    </form>
  </div>
)}

const App = () => {
  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [newSearch, setNewSearch] = useState('')

  const [errorMessage, setErrorMessage] = useState(null)

  const [message, setMessage] = useState(null)

  const handleNameChange = (inputName) => {
    setNewName(inputName.target.value)
  }

  const handleNumberChange = (inputNumber) => {
    setNewNumber(inputNumber.target.value)
  }

  const handleSearchChange = (inputSearch) => {
    setNewSearch(inputSearch.target.value)
  }

  const handleDelete = (contact) => {
    deleteContact(contact).then(deletedContact => {
      console.log(deletedContact)
      if (deletedContact) {
        setPersons(persons.filter(p => p.id !== deletedContact.id))
        setMessage(`${deletedContact.name} has been deleted from contacts`)
        setTimeout(() => {
          setMessage(null)
        },3000)
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!newName) {
      setErrorMessage(`Trying to create a contact without a name!`)
      setTimeout(() => {
        setErrorMessage(null)
      },3000)
      return
    }

    const personToAdd = {
      name: newName,
      number: newNumber
    }
    
    const existingPerson = persons.find(person => person.name === newName)

    if (existingPerson) {
      handleContactExists({...existingPerson, number: newNumber})
      .then(updatedContact => {
        console.log(updatedContact)
        if (updatedContact) {
          setPersons(persons.map(p => p.id === updatedContact.id ? updatedContact : p));
          setMessage(`${updatedContact.name} number has been updated`)
          setTimeout(() => {
            setMessage(null)
          },3000)
        }
      })
      .catch(error => {
        setErrorMessage(
          `Contact ${existingPerson.name} couldn't be modified`
        )
        setTimeout(setErrorMessage(null),3000)
      })
    }
    else {
      addPersonToJSON(personToAdd)
      .then(info => {
        setPersons([...persons, info])
      })
      setPersons([...persons, personToAdd])
      setMessage(`${personToAdd.name} has been added contacts`)
      setTimeout(() => {
        setMessage(null)
      },3000)
    }

    setNewName('')
    setNewNumber('')

  }

  useEffect(() => {
    getContacts()
      .then(json =>
        setPersons(json)
      )
  }, [])

  return (
    <div>
      <ERRNotification message={errorMessage}/>
      <Notification message={message}/>
      <Filter 
      handler={handleSearchChange} 
      search={newSearch}/>

      <Phonebook 
      nameHandler={handleNameChange} 
      numberHandler={handleNumberChange}
      name={newName}
      number={newNumber}
      submitHandler={handleSubmit}/>

      <Numbers 
      contacts={persons}
      strSearch={newSearch}
      onDelete={handleDelete}/>
    </div>
  )
}

export default App

