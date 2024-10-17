export const getCountries = () => {
    return (fetch("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(response => response.json()))
}