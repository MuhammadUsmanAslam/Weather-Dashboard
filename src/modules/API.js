const getData = async () => {
  const API_KEY = '358eb180ada51f6235f6ecc20247a6d1';
  const URL = `https://api.openweathermap.org/data/2.5/find?lat=37&lon=-122&APPID=${API_KEY}`;
  const res = await fetch(URL);
  const data = await res.json();
  return data.list;
};

const getLikes = async () => {
  const APP_ID = 'zgPe1uPVdPIz90V51Wzt';
  const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes`;
  const res = await fetch(URL);
  const likes = await res.json();
  return likes;
};

const addLikes = async (id) => {
  const APP_ID = 'zgPe1uPVdPIz90V51Wzt';
  const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes`;
  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
};

const itemsCounter = (list) => {
  document.getElementById('items-count').innerText = `Total Items: ${list.length}`;
};

const postComment = async (id, name, comment) => {
  const APP_ID = 'zgPe1uPVdPIz90V51Wzt';
  const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/comments`;
  const res = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment,
    }),
  });
  return res;
};

const getComments = async (id) => {
  const APP_ID = 'zgPe1uPVdPIz90V51Wzt';
  const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/comments?item_id=${id}`;
  const res = await fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
};

const commentsCounter = (comments) => comments.length;

module.exports = {
  getData, getLikes, addLikes, itemsCounter, postComment, getComments, commentsCounter,
};