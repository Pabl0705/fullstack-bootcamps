import { useState } from 'react'
import './App.css';

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}:</td> 
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, bad, neutral, all}) => {

  return(
    <table>
      <tbody>
        <StatisticLine text="Good" value ={good} />
        <StatisticLine text="Neutral" value ={neutral} />
        <StatisticLine text="Bad" value ={bad} />
        <StatisticLine text="All" value ={all} />
        <StatisticLine text="Average" value = {(good + ( bad * -1 )) / all} />
        <StatisticLine text="Positive" value = {(good / all) * 100} />
      </tbody>
    </table>
  )
}
const Title = ({content}) => {
  return <h1>{content}</h1>
}

const MyButton = ({buttonText, setter}) => {
  return <button onClick={setter}>{buttonText}</button>
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  return (
    <div>
      <Title content="Give Feedback"/>
      <MyButton buttonText="good" setter={() => setGood(good + 1)}/>
      <MyButton buttonText="neutral" setter={() => setNeutral(neutral + 1)}/>
      <MyButton buttonText="bad" setter={() => setBad(bad + 1)}/>
      <Title content="Statistics"/>
      {all === 0
      ? <p>No feedback given</p>
      : <Statistics good={good} neutral={neutral} bad={bad} all={all} />}
    </div>
  )
}

export default App
