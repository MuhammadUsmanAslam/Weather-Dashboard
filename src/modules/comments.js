import { postComment, getComments, commentsCounter } from './API.js';

export const closePopup = () => {
  const commentsPopup = document.getElementById('comments-popup');
  commentsPopup.style.display = 'none';
};

export const openPopup = async (data) => {
  const commentsPopup = document.getElementById('comments-popup');
  const cityDetails = document.getElementById('city-details');

  const nameInput = document.getElementById('name-input');
  const commentInput = document.getElementById('comment-input');
  const submitComment = document.getElementById('submit-comment');

  const commentsList = document.getElementById('comments-list');

  const comments = await getComments(data.id);

  if (!comments.error) {
    commentsList.innerHTML = '';
    commentsList.innerHTML = `<p id="comments-count">${commentsCounter(comments)} comments</p>`;
    comments.forEach((comment) => {
      const commentItem = document.createElement('li');
      commentItem.className = 'comment-item';
      commentItem.innerHTML = `<p>"${comment.comment}" By '${comment.username}' on "${comment.creation_date}"</p>`;
      commentsList.appendChild(commentItem);
    });
  } else {
    commentsList.innerHTML = '<p>No comments added yet</p>';
  }

  submitComment.addEventListener('click', async (e) => {
    e.preventDefault();
    await postComment(data.id, nameInput.value, commentInput.value);
    closePopup();
    openPopup(data);
    nameInput.value = '';
    commentInput.value = '';
  });

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
