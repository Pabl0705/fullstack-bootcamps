import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {useState}  from 'react';

const WarningNotUsed = () => {
  return <p>The counter has not been used</p>
}

const ListofClicks = ({clicks}) => {
  return <p>{clicks.join(", ")}</p>
}

const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)


  const [clicks, setClicks] = useState([])

  const handleLeftClick = () => {
    setClicks((prevClicks) => [...prevClicks, "L"])
  }

  const handleRightClick = () => {
    setClicks((prevClicks) => [...prevClicks, "R"])
  }
  
  const left = clicks.filter(izq => izq === "L")
  const right = clicks.filter(der => der === "R")

  return (
    <div>
      {left.length}
      <button onClick={() => handleLeftClick()}>
        left
      </button>
      <button onClick={() => handleRightClick()}>
        right
      </button>
      {right.length}
      <p>Total number of clicks: {clicks.length}</p>
      {clicks.length === 0
        ? <WarningNotUsed/> :
          <ListofClicks clicks={clicks}/>
      }
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
