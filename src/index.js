import './style.css';
import { getData } from './modules/API.js';
import { openPopup, closePopup } from './modules/comments.js';

window.addEventListener('load', async () => {
  const list = document.getElementById('list');
  const dataList = await getData();
  dataList.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = `<img src='./assets/display-img.jpg'/>
      <div class='list-item-head'><h4>${element.name}</h4><i class="fa-regular fa-heart"></i></div>
      <p class='list-item-likes'>5 Likes</p>
      `;
    const button = document.createElement('button');
    button.innerText = 'Comments';
    button.className = 'comment-button';
    button.addEventListener('click', () => {
      openPopup(element);
    });
    listItem.appendChild(button);
    list.appendChild(listItem);
  });

  const closeBtns = document.querySelectorAll('.close-button');
  closeBtns.forEach((button) => {
    button.addEventListener('click', () => {
      closePopup();
    });
  });
});
