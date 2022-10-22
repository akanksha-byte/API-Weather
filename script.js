// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '85ebdec753mshd6c9b0634e58721p102e1bjsn1eb56f01c20d',
//     'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
//   }
// };



// fetch('https://open-weather13.p.rapidapi.com/city/landon', options)
//   .then(response => response.json())
//   .then(data => console.log(data.main))
//   .catch(err => console.error(err));

// ----------------------

/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = async (city) => {
  
  const weatherData = {weather_type: null, temp: null, min_temp: null, max_temp: null}

  
 try {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  const urlInput = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
  console.log(urlInput)
  //CODE GOES HERE
 
  const response = await fetch(urlInput)
  const data = await response.json()
  // console.log(data)
  
  weatherData.weather_type = data.weather[0].main
  weatherData.temp = data.main.temp
  weatherData.min_temp = data.main.temp_min
  weatherData.max_temp = data.main.temp_max
  // console.log(weatherData)
    return weatherData
  } catch(error) {
    // console.log(error)
    return weatherData
  }

}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
  
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE detroit
  console.log(city)

  const cityDiv = document.getElementById("city-name")

  cityDiv.innerText = city
  // getWeatherData('detroit')
  
// console.log(getWeatherData(city).then(value => console.log('WEATHER DATA:', value)))
  
  getWeatherData(city).then(value => showWeatherData(value))
  
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData =  (weatherData) => {
  //CODE GOES HERE
  console.log(weatherData) 
 
  const weatherTypeDiv = document.getElementById("weather-type")
  const tempDiv = document.getElementById("temp")
  const minTempDiv = document.getElementById("min-temp")
  const maxTempDiv = document.getElementById("max-temp")
  

  weatherTypeDiv.innerText = weatherData['weather_type']
  tempDiv.innerText = weatherData["temp"]
  minTempDiv.innerText = weatherData["min_temp"]
  maxTempDiv.innerText = weatherData["max_temp"]

}

