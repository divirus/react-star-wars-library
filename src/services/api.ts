export const checkResponse = async (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function request(url: string, options?: RequestInit) {
  if (options) return fetch(url, options).then(checkResponse);
  return fetch(url).then(checkResponse);
}

const BASE_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = BASE_URL + 'people/';

export const getPeopleData = async () => {
  return await request(PEOPLE_URL);
}