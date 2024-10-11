import './App.css';
import Pinche from './Pinche.js';

const Mensaje = () => {
  return <h1>Hola Mundo de nuevo</h1>
}

const Contador = ({inicio}) => {
  return <h1>{inicio}</h1>
}

function App() {  // La primera mayuscula es importante (componente)  ¡¡ NO CREAR COMPENENTES DENTRO DE OTROS !!


  const mensaje = 'Hola Mundo DESDE VARIABLE'
  const a = 3
  const b = 7
  let contadorInicial = 5
  return (  // Lo siguiente no es HTML, es JS, pero se utiliza para simplificar
    <div className="App">
      <h1>Titulo de la App</h1>
      <strong>Estamos trabajando en ello</strong>
      <div>
        <p>El resultado es:</p>
        {a + b}
        <br/>
      </div>
      {mensaje + ' evaluación en JSX\n'} 
      <Mensaje/>
      <Mensaje/>
      <Mensaje/>
      <Pinche color='red' message='Estamos trabajando'/>
      <Pinche color='green' message='en un increible'/>
      <Pinche color='yellow' message='curso de React'/>
      <br/>
      <Contador inicio={contadorInicial}/>
      
    </div>
  );
}

export default App;
