function updateWeather(response) {
  console.log(response);
  // getting temperature from search starts here
  let temperatureElement = document.querySelector("#temperature");
  let realCelsiusTemperature = response.data.temperature.current;
  let realFTemperature = (realCelsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(realFTemperature);
  // getting temperature from search ends here

  //   update image icon starts here--
  //   let weathericonElement = document.querySelector("#sunshine");
  //   weathericonElement.innerHTML = ``;
  //   update image icon ends here--

  let descriptionElement = document.querySelector("#sunny");
  descriptionElement.innerHTML = response.data.condition.description;

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  let humidityElement = document.querySelector("#humidityNum");
  let humidityUpdate = response.data.temperature.humidity;
  humidityElement.innerHTML = humidityUpdate;

  let windElement = document.querySelector("#windNum");
  let windUpdate = response.data.wind.speed;
  windElement.innerHTML = windUpdate;

  let feelsTempElement = document.querySelector("#feelsTemp");
  let feelsTempUpdate = response.data.temperature.feels_like;
  let realFfeelsTemp = (feelsTempUpdate * 9) / 5 + 32;
  feelsTempElement.innerHTML = Math.round(realFfeelsTemp);
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
  searchCity(searchInputElement.value);
}

let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", handleSearch);

// time function starts here
let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let weekDay = now.getDay();

// show days of the week in word form-- starts here--
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
// show days of the week in word form-- ends here--

// --show months in abb. form-- starts here --
let month = now.getMonth();

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let monthToday = months[month];

// --show months in abb. form-- ends here --

// --show minutes with 0 when it's a single digit-- starts here--
// function showMinutes() {
//   let newMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];
//   if (minutes > 10) {
//     return now.getMinutes();
//   } else if (minutes < 9) {
//     return newMinutes;
//   }
// }
// let min = showMinutes();
// --show minutes with 0 when it's a single digit-- ends here--

// --decide if it's AM or PM-- starts here--
// function showAmPm() {
//   if (now.getHours() > 11) {
//     return "PM";
//   } else {
//     return "AM";
//   }
// }
// let amPm = showAmPm();
// console.log(amPm);
// --decide if it's AM or PM-- ends here--

// better 12 hr timestamp starts here --
let currentTime = new Date();
let options = { timeStyle: "short", hour12: true };
let timeString = currentTime.toLocaleTimeString("en-US", options);

// better 12 hr timestamp starts here --

let newTime = document.querySelector("#time");
newTime.innerHTML = `${timeString}`;
// time ends here

// date starts here--
let newDate = document.querySelector("#date");
newDate.innerHTML = `${day} ${monthToday} ${date}, ${year}`;
