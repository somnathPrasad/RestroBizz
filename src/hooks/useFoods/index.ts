import QUERY_KEY from '@/config/queryKey';
import { useMutation, useQuery } from 'react-query';
import addFood from './addFood';
import fetchFoods from './fetchFoods';

const useFoods = (restroId: any) => useQuery({ queryKey: [QUERY_KEY.FOODS, restroId], queryFn: fetchFoods });
export const useAddFood = () => useMutation(addFood);

export default useFoods;
