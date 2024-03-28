const inputCity = document.querySelector("#inputCity");
const buttonSearch = document.querySelector("#btnSearch");
const iconWeather = document.querySelector("#weatherIcon");
const temperatureWeather = document.querySelector("#temperature");
const weatherInfo = document.querySelector("#weatherInfo");
const outputWeather = document.querySelector("#outputWeather");

const apiKey = "672cfd7fc53e4768bc2161524242503";

buttonSearch.addEventListener("click", function () {
  request = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputCity.value}&aqi=no&lang=ru`;
  getWeather(request);
  outputWeather.classList.remove("weather-none");
  outputWeather.classList.add("weather-visible");
});

async function getWeather(getJson) {
  const response = await fetch(getJson);
  const data = await response.json();
  const result = data;

  temperatureWeather.textContent = `${Math.round(+result.current.temp_c)}°C`;
  iconWeather.src = result.current.condition.icon;
  let city = result.location.name;
  let condition = result.current.condition.text;
  weatherInfo.innerHTML = `<p class="weather-city">${city}</p>
            <p class="weather-condition">${condition}</p>`;
}
