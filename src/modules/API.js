const getData = async () => {
  const API_KEY = '358eb180ada51f6235f6ecc20247a6d1';
  const URL = `https://api.openweathermap.org/data/2.5/find?lat=10&lon=75&APPID=${API_KEY}`;
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
  getLikes();
};

module.exports = { getData, getLikes, addLikes };