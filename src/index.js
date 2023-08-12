const weatherForm = document.querySelector('#weather-form');
const weatherCard = document.querySelector('#weather-card');
const cityCountry = document.querySelector('#city-country');
const localTime = document.querySelector('#local-time');
const temperature = document.querySelector('#temperature');

function getWeatherData(city) {
  const apiKey = '5bfef379c91d8f9c765a003594d5da40';
  const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  return fetch(apiUrl)
  .then(response => response.json())
  .catch(error => {
    console.error(error)
  })
}

function displayWeather(data) {
  const weather = data.current;
  cityCountry.textContent = `${data.location.name}, ${data.location.country}`
  localTime.textContent = data.location.localTime
  temperature.textContent= `${weather.temperature}°C`
}

weatherForm.addEventListener('submit', event => {
  event.preventDefault()


  const city = document.querySelector('#city').value
  getWeatherData(city)
  .then(weatherData => {
    displayWeather(weatherData)
  })
  .catch(error => {
    alert('Кажется что-то пошло не по плану', error);
  })
})

const defaultCity = 'Kharkiv';
getWeatherData(defaultCity)
  .then(weatherData => {
    displayWeather(weatherData);
  })
  .catch(error => {
    console.error('Кажется что-то пошло не по плану', error);
  });
