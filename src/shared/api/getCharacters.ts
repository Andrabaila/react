import { API, ERROR_MESSAGE } from './constants';

async function getCharacters() {
  const request = `${API.baseUrl}${API.characters}`;

  try {
    const response = await fetch(request);
    const data = await response.json();

    return data.results;
  } catch (err) {
    console.log(err);
    throw new Error(ERROR_MESSAGE);
  }
}

export default getCharacters;
