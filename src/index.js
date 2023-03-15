import './style.css';
import { getData, getLikes, addLikes } from './modules/API.js';
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
  dataList.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = '<img src=\'./assets/display-img.jpg\'/>';
    const listItemHead = document.createElement('div');
    listItemHead.className = 'list-item-head';
    listItemHead.innerHTML = `<h4>${element.name}</h4>`;
    const likeBtn = document.createElement('i');
    likeBtn.className = 'fa-regular fa-heart';
    likeBtn.addEventListener('mouseover', () => {
      likeBtn.className = 'fa-solid fa-heart';
    });
    likeBtn.addEventListener('mouseout', () => {
      likeBtn.className = 'fa-regular fa-heart';
    });
    likeBtn.addEventListener('click', (e) => {
      addLikes(element.id);
      e.target.classList.remove('fa-solid');
    });
    listItemHead.appendChild(likeBtn);
    listItem.appendChild(listItemHead);

    const likes = document.createElement('p');
    likes.className = 'list-item-likes';
    likes.innerText = `${element.likes ? element.likes : 0} Likes`;
    listItem.appendChild(likes);

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

  const newDataList = await mutateLikes(dataList, likesData);

  displayWeather(newDataList);

  const closeBtns = document.querySelectorAll('.close-button');
  closeBtns.forEach((button) => {
    button.addEventListener('click', () => {
      closePopup();
    });
  });
});