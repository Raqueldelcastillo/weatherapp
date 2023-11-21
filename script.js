function search(event) {
  event.preventDefault();
  // let cityElement = document.querySelector("#");
  let cityInput = document.querySelector("#search-input").value;
  cityElement.innerHTML = cityInput.value;
  let apiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityInput +
    "&appid=" +
    apiKey;
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(apiUrl);
      // let apiUrl = api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key};
    });
  //   function showTemperature(response) {
  //     let temperature = Math.round(response.data.main.temp);
  //     let h1 = document.querySelector("h1");
  //     h1.innerHTML = response.data.main.temp;
  // //   }
  // let searchForm = document.querySelector("#search-form");
  // searchForm.addEventListener("submit", search);
  //   // console.log (showTemperature);
}
