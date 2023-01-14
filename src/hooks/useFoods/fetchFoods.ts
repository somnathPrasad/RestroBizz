import config from "../../config";

const fetchFoods = async () => {
  const res = await fetch(`${config.api_base_url}/foods`);
  console.log(res);
  return res.json();
};

export default fetchFoods;
