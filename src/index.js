import './css/styles.css';
// import fetchCountries from './fetchCountries.js';uk
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

function fetchCountries(e) {
  const searchQuery = e.target.value.trim();
  const url = `https://restcountries.com/v3.1/name/${searchQuery}?fields=name,capital,population,flags,languages`;
  if (searchQuery === '') {
    return;
  }
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(
          Notiflix.Notify.failure('Oops, there is no country with that name')
        );
      }
      return response.json();
    })
    .then(data => {
      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else {
        console.log(data);
      }
    });
}

searchBox.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));
