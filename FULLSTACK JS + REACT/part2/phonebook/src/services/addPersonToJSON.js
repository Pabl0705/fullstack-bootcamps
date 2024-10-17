
export const addPersonToJSON = (personToAdd) =>
    fetch("http://localhost:3001/persons",{
        method: "POST",
        body: JSON.stringify(personToAdd),
        headers: {
            "Content-Type": "application/json" // Esto indica que el cuerpo de la solicitud es JSON
        }
    })
    .then(response => response.json())
    .then(data => {
      return data
    })