import { useMutation, useQuery } from 'react-query';
import addRestaurant from './addRestaurant';
import fetchRestaurants from './fetchRestaurants';

const useAddRestaurant = () => useMutation(addRestaurant);
const useGetRestaurants = () => useQuery(['restaurants'], fetchRestaurants);

export { useAddRestaurant, useGetRestaurants };
