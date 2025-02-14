function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let realCelsiusTemperature = response.data.temperature.current;
  let realFTemperature = (realCelsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(realFTemperature);
}

function searchCity(city) {
  // make api call and update the interface
  let key = "f3e16t09873bb0ba34afa0c464d14o8b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#newCity");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInputElement.value;
  searchCity(searchInputElement.value);
}

let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", handleSearch);
