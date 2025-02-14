function handleSearch(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#newCity");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInputElement.value;
}

let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", handleSearch);

let key = "f3e16t09873bb0ba34afa0c464d14o8b";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=chantilly&key=${key}&units=metric";
