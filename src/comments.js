import './style.css';

const commentButtons = document.querySelectorAll('.comment-button');
const commentsPopup = document.getElementById('comments-popup');
const closeBtns = document.querySelectorAll('.close-button');
/*eslint-disable*/
commentButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openPopup(button.dataset.city);
  });
});
/* eslint-enable */
function openPopup(cityName) {
  // Retrieve data from openweathermap API and update city details
  const apiKey = 'b217d1f0aea03cdb402b168fb20a31b5';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Get the weather icon URL from the API response
      const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      document.getElementById('city-details').innerHTML = `
        <h2>${data.name}</h2>
        <img src="${iconUrl}" alt="Weather Icon">
        <p>Temperature: <span id="temp">${data.main.temp}&deg;F</span></p>
        <p>Humidity: <span id="humidity">${data.main.humidity}%</span></p>
        <p>Wind Speed: <span id="wind-speed">${data.wind.speed} mph</span></p>
      `;
    })
    /*eslint-disable*/
    .catch((error) => console.log(error));
      /* eslint-enable */
  // Show comments popup
  commentsPopup.style.display = 'block';
}

function closePopup() {
  // Hide comments popup
  commentsPopup.style.display = 'none';
}

closeBtns.forEach((button) => {
  button.addEventListener('click', () => {
    closePopup();
  });
});
