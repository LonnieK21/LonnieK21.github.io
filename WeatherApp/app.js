//°
const api ={
  key: "3bb9ccd49eeb927095257fdd1e00f22c",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.searchInput');
searchbox.addEventListener('keypress', getInput);

function getInput(evt) {
  if (evt.keyCode == 13) {
    getData(searchbox.value);
    //console.log(searchbox.value);
  }
}

const button = document.querySelector('button');

button.addEventListener('click', event => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(getGeolocation);
     console.log("Available");
   } else {
     alert("Your browser does not support Geolocation");
   }

});
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
function getGeolocation(geoData) {
  fetch(`${api.base}weather?lat=${geoData.coords.latitude}&lon=${geoData.coords.longitude}&units=imperial&appid=${api.key}`)
  .then(apiData => {
    return apiData.json();
  }).then(displayResults);
}

function getData(query) {
  fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
  .then(apiData => {
    return apiData.json();
  }).then(displayResults);
}

function displayResults(apiData) {
  console.log(apiData);
  let city = document.querySelector('.city')
  city.innerHTML = `${apiData.name}, ${apiData.sys.country}`;

  let desc = document.querySelector('.description')
  desc.innerHTML = `${apiData.weather[0].main}`;

  let temp = document.querySelector('.temp')
  temp.innerHTML = `${Math.round(apiData.main.temp)}°F`;

  let feels = document.querySelector('.feels')
  feels.innerHTML = `Feels like ${Math.round(apiData.main.feels_like)}°F`;

  let icon = document.querySelector('.icon')
  icon.innerHTML = `<img src="icons/${apiData.weather[0].icon}.png"  alt="?">`;

  let hiLow = document.querySelector('.hi-low')
  hiLow.innerHTML = `H:${Math.round(apiData.main.temp_max)}°F L:${Math.round(apiData.main.temp_min)}°F`;

}
