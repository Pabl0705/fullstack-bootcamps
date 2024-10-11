import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useState} from 'react';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const Counter = ({number}) => {
  return <h1>{number}</h1>
}

const App = (props) => {

  const [contador, updateContador] = useState(0)

  const handleClick = (option) => {
    // Determina la acción a realizar según el botón presionado
    switch (option) {
      case 'inc':
        updateContador(prevContador => prevContador + 1);
        break;
      case 'dec':
        updateContador(prevContador => prevContador - 1);
        break;
      case 'reset':
        updateContador(0);
        break;
      default:
        break;
    }
  };

  const isEven = contador % 2 === 0

  return (
    <div>
      <p>El valor del contador cambia gracias a React:</p>
      <Counter number={contador}/>
      <p>
        {isEven ? 'Es par' : 'Es impar'}
      </p>
      <br/>
      <button onClick={() => handleClick('inc')}>  
        Incrementar con REACT
      </button>
      <button onClick={() => handleClick('dec')}>  
        Decrementar con REACT
      </button>
      <button onClick={() => handleClick('reset')}>  
        Resetear con REACT
      </button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>, 
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
