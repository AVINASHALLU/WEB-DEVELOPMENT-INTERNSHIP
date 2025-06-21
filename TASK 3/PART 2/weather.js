const API_KEY = "<API KEY>"; // Replace with your OpenWeatherMap API key

const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;
  weatherResult.innerHTML = "Loading...";

  try {
    // OpenWeather 3.0 endpoint for Current Weather
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );
    if (!resp.ok) {
      weatherResult.innerHTML = "City not found or error fetching data.";
      return;
    }
    const data = await resp.json();
    showWeather(data);
  } catch (err) {
    weatherResult.innerHTML = "Error fetching weather.";
  }
});

function showWeather(data) {
  if (!data.weather || !data.main) {
    weatherResult.innerHTML = "No weather data found.";
    return;
  }
  const icon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const html = `
    <div class="weather-box">
      <div><img src="${iconUrl}" alt="${data.weather[0].description}"></div>
      <div class="temp">${Math.round(data.main.temp)}&deg;C</div>
      <div class="desc">${data.weather[0].description}</div>
      <div>Humidity: ${data.main.humidity}%</div>
      <div>Wind: ${Math.round(data.wind.speed)} m/s</div>
      <div style="margin-top:0.6em; color:#888;">
        ${data.name}, ${data.sys.country}
      </div>
    </div>
  `;
  weatherResult.innerHTML = html;
}