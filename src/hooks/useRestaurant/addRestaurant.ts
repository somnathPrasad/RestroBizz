const addRestaurant = async (data: BodyInit | null | undefined) => {
  const res = await fetch('/api/restaurant', {
    body: JSON.stringify(data),
    method: 'POST',
  });
  return res.json();
};

export default addRestaurant;
