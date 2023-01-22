import { useMutation, useQuery } from 'react-query';
import addRestaurant from './addRestaurant';
import fetchRestaurants from './fetchRestaurants';
import fetchRestaurantInfo from './fetchRestaurantInfo';
import QUERY_KEY from '@/config/queryKey';

const useAddRestaurant = () => useMutation(addRestaurant);
const useGetRestaurants = () => useQuery([QUERY_KEY.RESTAURANTS], fetchRestaurants);
const useGetRestaurantInfo = (id:any) =>
  useQuery([QUERY_KEY.RESTAURANTS_INFO, id], fetchRestaurantInfo);

export { useAddRestaurant, useGetRestaurants, useGetRestaurantInfo };
