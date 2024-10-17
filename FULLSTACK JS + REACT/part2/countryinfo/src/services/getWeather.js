export const getWeather = ({capital}) => {
     const apiKey = '0a4fd7eb4d6b6a2f104a8c8ff424dea0'
     return(fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`)
       .then(response => response.json()))
}