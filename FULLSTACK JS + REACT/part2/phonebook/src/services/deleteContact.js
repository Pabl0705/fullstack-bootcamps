export const deleteContact = (contact) => {

    if (window.confirm(`Are you sure you want to DELETE ${contact.name} of your contacts?`)){
        return fetch(`http://localhost:3001/persons/${contact.id}`, {
        method: 'DELETE',
    })
    .then(response => {return response.json})
    .then(data => {
        console.log('Deleted:', data)
        return contact
    })
    .catch(error => console.error('Error deleting contact:', error));
    }
    else {
        console.log("Delete cancel")
        return Promise.resolve(null);
    }
}