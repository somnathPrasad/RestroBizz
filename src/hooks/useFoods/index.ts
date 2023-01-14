import { useQuery } from "react-query";
import fetchFoods from "./fetchFoods";

const useFoods = () => useQuery({ queryKey: ["foods"], queryFn: fetchFoods });

export default useFoods;