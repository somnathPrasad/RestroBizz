export default async function addFood(data: BodyInit | null | undefined) {
  const res = await fetch('/api/foods', {
    body: JSON.stringify(data),
    method: 'POST',
  });
  return res.json();
}
