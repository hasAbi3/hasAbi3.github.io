document.getElementById('weatherForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const apiKey = '917f7d5ab50c4fe5d2a68aba37272157'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('cityInput').value;

    // Fetch weather data from OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            // Update UI with weather information
            const weatherInfoElement = document.getElementById('weatherInfo');
            weatherInfoElement.innerHTML = `
                <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                <i class="fa-solid fa-temperature-three-quarters"></i> <p>Temperature: ${data.main.temp} °C</p><hr>
               
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7911203/weather-icon-md.png" width=80><p>Weather: ${data.weather[0].description}</p><hr>
                <img src="images/humidity.png"> <p>Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherInfo').innerHTML = 'Error fetching weather data.';
        });
});