export const openPopup = async (data) => {
  const commentsPopup = document.getElementById('comments-popup');
  const cityDetails = document.getElementById('city-details');

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
