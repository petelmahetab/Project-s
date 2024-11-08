/*API KEY */ 
const APIKey = '5f323c5c765d9240be91e11b9ecfae8a';
const weatherData = document.querySelector('#weather-data');
const cityInput = document.querySelector('#city-input');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityValue = cityInput.value;
    // console.log(cityValue);
    getWeatherData(cityValue);
});

function getWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            alert(error.message);
        });
}

function displayWeatherData(data) {
    document.querySelector('#weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    document.querySelector('.temperature').textContent = `${data.main.temp}°C`;
    document.querySelector('.description').textContent = data.weather[0].description;
    document.querySelector('#feels-like').textContent = `Feels Like: ${data.main.feels_like} °C`;
    document.querySelector('#humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.querySelector('#wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
}