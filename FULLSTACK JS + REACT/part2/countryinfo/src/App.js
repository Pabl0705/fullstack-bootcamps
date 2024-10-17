import './App.css';
import {useState, useEffect} from 'react'
import { getCountries } from './services/getCountries.js'
import { getWeather } from './services/getWeather.js'

const Country = ({country}) => {

  const [weather, setWeather] = useState(null); // Estado para el clima

  useEffect(() => {
    // Obtener el clima cuando el país cambia
    if (country.capital) {
      getWeather({ capital: country.capital })
        .then(json => {
          setWeather(json); // Actualizar el estado del clima
        })
        .catch(err => {
          console.error("Error fetching weather data:", err);
          setWeather(null); // Manejo de errores
        });
    }
  }, [country])

  return(
  <div>
    <h2>{country.name.common}</h2>
    <pre>
      Capital: {country.capital}<br/>
      Area: {country.area}

      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </pre>
    <img alt={country.flags.alt} src={country.flags.png}></img>
    <h3>Weather in {country.capital}</h3>
    {weather ? ( 
        <div>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].main}</p>
          <p>Wind: {weather.wind.speed}</p>
        </div>
      ) : (
        <p>Loading weather...</p> 
      )}
  </div>
  )
}

const Countries = ({countries, search, onShow}) => {
  const filteredCountries = countries.filter(country =>
  country.name.common.toLowerCase().includes(search.toLowerCase()));

  return(
  <div>
      {filteredCountries.length === 0 ? (
        <p>No countries found</p>
      ) 
      : filteredCountries.length === 1 ? (
        <Country country={filteredCountries[0]}/>
      )
      : filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        <ul>
          {filteredCountries.map(country => (
            <li className="countries" key={country.name.common}>{country.name.common} 
            <button onClick={() => onShow(country.name.common)}>SHOW</button></li>
          ))}
        </ul>
      )}
  </div>
  )
}

function App() {

  const [newSearch, setSearch] = useState('')

  const [countries, setCountries] = useState([])

  const handleSearch = (search) => {
    setSearch(search.target.value)
  }

  const handleShow = (search) => {
    setSearch(search)
  }

  useEffect(() => {
    getCountries()
      .then(json =>
        setCountries(json)
      )
  }, [])

  return (
    <div>
      <p>Find countries: <input onChange={handleSearch} type="text" value={newSearch}></input></p>
      <Countries countries={countries} search={newSearch} onShow={handleShow}/>
    </div>
  );
}

export default App;
