// import '../css/common.css';

// const weatherForm = document.querySelector('#weather-form');
// const weatherCard = document.querySelector('#weather-card');

// function getWeatherData(city) {
//   const apiKey = '5bfef379c91d8f9c765a003594d5da40';
//   const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

//   return fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => data)
//     .catch(error => {
//       console.error('Кажется что-то пошло не по плану', error);

//     });
// }

// function displayWeather(data) {
//   const weather = data.current;
//   const weatherHTML = `
//   <div class="card">
//             <div class="container">
//               <div class="cloud front">
//                 <span class="left-front"></span>
//                 <span class="right-front"></span>
//               </div>
//               <span class="sun sunshine"></span>
//               <span class="sun"></span>
//               <div class="cloud back">
//                 <span class="left-back"></span>
//                 <span class="right-back"></span>
//               </div>
//             </div>

//             <div class="card-header">
//               <span>${data.location.name},${data.location.country}</span>
//          <span>${data.location.localtime}</span>
//             </div>
//             <span class="temp">${weather.temperature}°C</span>
//             <div class="temp-scale">
//               <span>Celcius</span>
//             </div>
//           </div>`;
//   weatherCard.innerHTML = weatherHTML;
// }

// weatherForm.addEventListener('submit', event => {
//   event.preventDefault();

//   const city = document.querySelector('#city').value;
//   getWeatherData(city)
//     .then(weatherData => {
//       displayWeather(weatherData);
//     })
//     .catch(error => {
//       alert('Кажется что-то пошло не по плану', error);
//     });
// });

// const defaultCity = 'Kharkiv';
// getWeatherData(defaultCity)
//   .then(weatherData => {
//     displayWeather(weatherData);
//   })
//   .catch(error => {
//     console.error('Кажется что-то пошло не по плану', error);
//   });


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


