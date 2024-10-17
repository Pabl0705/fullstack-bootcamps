export const createNote = (noteToAddToState) => {
fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    body: JSON.stringify(noteToAddToState),
    headers: {
      "Content-Type": "application/json" // Esto indica que el cuerpo de la solicitud es JSON
    }
  })
    .then(response => response.json())
    .then(data => {
      return data
    })
}