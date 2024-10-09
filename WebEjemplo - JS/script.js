console.log("Hola Mundo")

let firstName = 'Miguel' // Variable: Puedes guardar la variable y reasignarle un valor (tipo dinámico, la variable detecta automaticamente el tipo)

//firstName = 3   En JavaScript podemos hacer esto sin problema (cambiar el tipado sin problema, ya que son dinámicos)

const lastName = 4       // Constante: No puedes reasignarle el valor

console.log(firstName)
firstName = 'Pepito'
console.log(firstName)

// Hay 7 tipos en JS primitivos (5 son importantes)

// Int

// String

// Boolean

// Undefined

// Null

// Y luego de tipo no primitivo (son mutables)

// Arrays

// Objects

firstName = 'Miguel'
const UpperName = firstName.toUpperCase()   // El string no se puede mutar, devuelve un nuevo string y por lo tanto hay que guardarlo

console.log(firstName)

const list = []
list.push(1)    // Aunque sea una constante, aqui estamos modificando la lista, no estamos reasignando una valor a la constante
const anotherList = list.concat([1,2,3,4])    // Podemos concatenar listas... Esto por eso, si requiere crear una nueva variable, ya que no podemos modificar list

console.log(list)
console.log(anotherList[0])

const persona = {
    firstName: 'Pablo',
    X: '@Pablusqui',
    age: 17,
    isDeveloper: true,
    lenguajes: ['Python','C#', 'JS']
}

console.log(persona.firstName)     // Para acceder a un objeto sabiendo sus variables podemos utilizar esto
console.log(persona.lenguajes[1])

const field = 'X'

console.log(persona[field])  // En este caso para acceder al campo 'X', utilizamos los corchetes, ya que el valor esta en una variable (UTILIZADO EN REACT)

const sumar = (operando1, operando2) => {   // Definir funciones
    console.log(operando1)
    console.log(operando2)
    return operando1 + operando2
}

const resultado = sumar(2,2)   // Llamar a la función (como todo en la vida)

console.log(resultado)

console.log(2 == '2')  // Mala practica, esto es true y realmente no es igual
console.log(2 === '2')  // Buena practica, da false