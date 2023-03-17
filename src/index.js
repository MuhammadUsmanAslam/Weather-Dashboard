import './style.css';
import {
  getData, getLikes, addLikes, itemsCounter,
} from './modules/API.js';
import { openPopup, closePopup } from './modules/comments.js';

const mutateLikes = (weatherList, likesList) => {
  weatherList.forEach((weatherListItem) => {
    likesList.forEach((likesListItem) => {
      if (weatherListItem.id === likesListItem.item_id) {
        weatherListItem.likes = likesListItem.likes;
      }
    });
  });
  return weatherList;
};

const displayWeather = (dataList) => {
  const list = document.getElementById('list');
  list.innerHTML = '';

  dataList.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = `<img src='https://openweathermap.org/img/w/${element.weather[0].icon}.png'/>`;
    const listItemHead = document.createElement('div');
    listItemHead.className = 'list-item-head';
    listItemHead.innerHTML = `<h4>${element.name}</h4>`;
    const likeBtn = document.createElement('i');
    likeBtn.className = 'fa-regular fa-heart';
    likeBtn.addEventListener('click', () => {
      addLikes(element.id);
      element.likes = element.likes + 1;
      likes.innerText = `${element.likes ? element.likes : 0} Likes`;
    });
    listItemHead.appendChild(likeBtn);
    listItem.appendChild(listItemHead);

    const likes = document.createElement('p');
    likes.className = 'list-item-likes';
    likes.innerText = `${element.likes ? element.likes : 0} Likes`;
    listItem.appendChild(likes);

    const listItemBody = document.createElement('div');
    listItemBody.className = 'list-item-head';
    listItemBody.innerHTML = `<p>Temprature: ${element.main.temp} &deg;F</p><p>Humidity: ${element.main.humidity}%</p>`;
    listItem.appendChild(listItemBody);

    const button = document.createElement('button');
    button.innerText = 'Comments';
    button.className = 'comment-button';
    button.addEventListener('click', () => {
      openPopup(element);
    });
    listItem.appendChild(button);
    list.appendChild(listItem);
  });
};

window.addEventListener('load', async () => {
  const likesData = await getLikes();
  const dataList = await getData();

  itemsCounter(dataList);

  const newDataList = await mutateLikes(dataList, likesData);

  displayWeather(newDataList);

  const closeBtns = document.querySelectorAll('.close-button');
  closeBtns.forEach((button) => {
    button.addEventListener('click', () => {
      closePopup();
    });
  });
});