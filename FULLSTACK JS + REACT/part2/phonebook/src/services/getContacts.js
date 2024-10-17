export const getContacts = () => {
    return fetch("http://localhost:3001/persons")
    .then(response => response.json())
}