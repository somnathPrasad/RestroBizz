export default async function fetchRestaurantInfo({
  queryKey,
}: {
  queryKey: string[];
}) {
  const id = queryKey[1];
  const res = await fetch(`/api/restaurant/info?id=${id}`);
  return res.json();
}
