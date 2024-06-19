import SlimSelect from 'slim-select';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelect = document.querySelector('#breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');

new SlimSelect({
  select: breedSelect,
  settings: {
    placeholderText: 'Please, select a breed',
    disabled: true,
  },
  events: {
    afterChange: options => {
      selectBreed(options[0].value);
    },
  },
});

loader.classList.remove('hidden');

fetchBreeds()
  .then(breeds => {
    const options = breeds.map(breed => ({
      text: breed.name,
      value: breed.id,
    }));

    breedSelect.slim.setData([
      {
        text: 'Please, select a breed',
        value: '',
        disabled: true,
      },
      ...options,
    ]);

    breedSelect.slim.enable();
    loader.classList.add('hidden');
  })
  .catch(error => {
    loader.classList.add('hidden');
    iziToast.error({
      title: 'Error',
      message: 'Cannot fetch data. Please, try again later.',
      position: 'topRight',
    });
  });

function selectBreed(breedId) {
  catInfo.classList.add('hidden');

  if (!breedId) {
    return;
  }

  loader.classList.remove('hidden');

  fetchCatByBreed(breedId)
    .then(image => {
      const breed = image.breeds[0];

      document.querySelector('img.cat-info-image').src = image.url;
      document.querySelector('.cat-info-title').textContent = breed.name;
      document.querySelector('.cat-info-description').textContent =
        breed.description;
      document.querySelector('.cat-info-temperament').innerHTML =
        '<strong>Temperament</strong>: ' + breed.temperament;

      catInfo.classList.remove('hidden');
      loader.classList.add('hidden');
    })
    .catch(error => {
      loader.classList.add('hidden');
      iziToast.error({
        title: 'Error',
        message: 'Cannot fetch data. Please, try again later.',
        position: 'topRight',
      });
    });
}
