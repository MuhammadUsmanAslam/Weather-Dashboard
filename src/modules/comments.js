export const openPopup = async () => {
  const commentsPopup = document.getElementById('comments-popup');
  const cityDetails = document.getElementById('city-details');
  const API_KEY = '358eb180ada51f6235f6ecc20247a6d1';
  const cityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const city = document.querySelector('.list-item h4').textContent;

  const res = await fetch(`${cityUrl}${city}&appid=${API_KEY}&units=imperial`);
  const data = await res.json();

  const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  cityDetails.innerHTML = `
      <h2>${data.name}</h2>
      <img class="popup-img" src="${iconUrl}" alt="Weather Icon">
      <p>Temperature: <span id="temp">${data.main.temp}&deg;F</span></p>
      <p>Humidity: <span id="humidity">${data.main.humidity}%</span></p>
      <p>Wind Speed: <span id="wind-speed">${data.wind.speed} mph</span></p>
    `;

  commentsPopup.style.display = 'block';
};

export const closePopup = () => {
  const commentsPopup = document.getElementById('comments-popup');
  commentsPopup.style.display = 'none';
};
