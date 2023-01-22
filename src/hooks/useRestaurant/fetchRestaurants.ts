const fetchRestaurants = async () => {
  const res = await fetch('/api/restaurant');
  return res.json();
};

export default fetchRestaurants;
