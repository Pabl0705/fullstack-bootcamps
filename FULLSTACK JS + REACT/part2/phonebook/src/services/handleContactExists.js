export const handleContactExists = (contact) => {
    if (window.confirm(`${contact.name} already exists, replace old number with a new one`)){
      return fetch(`http://localhost:3001/persons/${contact.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'  // Asegura que estás enviando datos en formato JSON
          },
          body: JSON.stringify(contact)  // Enviamos el contacto actualizado en el cuerpo de la solicitud
      })
      .then(response => response.json())
      .then(updatedContact => {
          console.log('Modified:', updatedContact)
          return updatedContact
      })
      .catch(error => 
        console.error('Error deleting contact:', error))
      
      }
      else {
          console.log("Modify cancel")
      }
  }