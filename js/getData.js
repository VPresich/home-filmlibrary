export default async function getData(url, apiKey) {
  const responce = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
  });
  const respData = await responce.json();
  return respData;
}
