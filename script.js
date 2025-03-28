const apiKey = "YOUR_API_KEY";
const city = "Delhi"; // Change dynamically for other locations

async function fetchWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("location").textContent = data.name;
    document.getElementById("feels-like").textContent = Math.round(data.main.feels_like);
    document.getElementById("high-low").textContent = `${Math.round(data.main.temp_max)}°/${Math.round(data.main.temp_min)}°`;
    document.getElementById("wind").textContent = `${data.wind.speed} km/h`;
    document.getElementById("humidity").textContent = `${data.main.humidity}%`;
    document.getElementById("dew-point").textContent = `${Math.round(data.main.temp - (100 - data.main.humidity) / 5)}°`;
    document.getElementById("pressure").textContent = `${data.main.pressure} mb`;
    document.getElementById("visibility").textContent = `${(data.visibility / 1000).toFixed(2)} km`;
    document.getElementById("uv-index").textContent = "6 of 11"; // Static for now
    document.getElementById("moon").textContent = "Waning Crescent"; // Static, can be dynamic with a moon API

    const sunrise = new Date(data.sys.sunrise * 1000);
    const sunset = new Date(data.sys.sunset * 1000);
    document.getElementById("sunrise").textContent = `${sunrise.getHours()}:${("0" + sunrise.getMinutes()).slice(-2)}`;
    document.getElementById("sunset").textContent = `${sunset.getHours()}:${("0" + sunset.getMinutes()).slice(-2)}`;
}

fetchWeather();