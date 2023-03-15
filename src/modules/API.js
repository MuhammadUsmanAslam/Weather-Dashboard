const getData = async () => {
  const API_KEY = '358eb180ada51f6235f6ecc20247a6d1';
  const URL = `https:/api.openweathermap.org/data/2.5/find?lat=30&lon=75&APPID=${API_KEY}`;

  const res = await fetch(URL);
  const data = await res.json();
  return data.list;
};

export default getData;