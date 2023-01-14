import config from "../../config";

const fetchFoods = async () => {
  const res = await fetch(`${config.api_base_url}/foods`);
  return res.json();
};

export default fetchFoods;
