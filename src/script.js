function handleSearch(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#newCity");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInputElement.value;
}

let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", handleSearch);
