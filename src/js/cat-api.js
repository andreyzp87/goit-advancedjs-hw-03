import axios from 'axios';

const apiKey =
  'live_KMp19QzhJ8I3AYtoYghEXNrVMJ0hyUFwtzrQZM9zSgjtPw0LAitW0Eqio1Rvg0Np';
axios.defaults.headers.common['x-api-key'] = apiKey;

const apiUrl = 'https://api.thecatapi.com/v1';

export async function fetchBreeds() {
  return axios
    .get(apiUrl + '/breeds')
    .then(response => response.data)
    .catch(error => {
      throw new Error(error);
    });
}

export async function fetchCatByBreed(breedId) {
  return axios
    .get(`${apiUrl}/images/search?breed_ids=${breedId}`)
    .then(response => response.data[0])
    .catch(error => {
      throw new Error(error);
    });
}
