const form = document.getElementById("weather-form");
const input = document.getElementById("city-input");
const city = document.getElementById("city-name");
const icon = document.getElementById("weather-icon");
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const result = document.getElementById("weather-result");
const btn = document.getElementById("btn");

btn.onclick = async (e) => {
    e.preventDefault();
    const cityQuery = input.value.trim();

    if (!cityQuery) {
        alert("Please enter a city name.");
        return;
    }

    try {
        const geoRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityQuery}&limit=1&appid=d99bff6286cc266251816e686344a5f3`);
        const geoData = await geoRes.json();

        if (!geoData.length) {
            alert("City not found. Please check the spelling or try a different location.");
            return;
        }

        const { lat, lon } = geoData[0];
        const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d99bff6286cc266251816e686344a5f3`);
        const weatherData = await weatherRes.json();

        city.innerText = weatherData.name;
        description.innerText = weatherData.weather[0].description;
        icon.setAttribute("src", `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`);
        temperature.innerText = `${weatherData.main.temp.toFixed(1)} °C`;
        humidity.innerText = `${weatherData.main.humidity}%`;
        wind.innerText = `${weatherData.wind.speed} m/s`;
        result.style.display = "block";
    } catch (err) {
        console.error("Fetch error:", err);
        alert("Something went wrong while fetching data. Please try again later.");
    }
};
