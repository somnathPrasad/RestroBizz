const fetchFoods = async ({ queryKey }: { queryKey: (string | number)[] }) => {
  const restroId = queryKey[1];
  const res = await fetch(`/api/foods?restroId=${restroId}`);
  return res.json();
};

export default fetchFoods;
