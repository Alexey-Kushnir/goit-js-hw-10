import './css/styles.css';
import CountriesApiService from './components/countries-api-service';
import murckupForCountries from './components/countries-murkup';
import murckupForCountry from './components/country-murkup';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const countriesApiService = new CountriesApiService();

searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  if (e.target.value === '') {
    removeMarkup();
    return;
  }
  removeMarkup();
  countriesApiService.query = e.target.value.trim();
  countriesApiService.fetchCountries().then(createMarkup);
}

function createMarkup(data) {
  if (data.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
  if (data.length <= 10 && data.length !== 1) {
    countryList.insertAdjacentHTML(
      'beforeend',
      data.map(murckupForCountries).join('')
    );
  }
  if (data.length === 1) {
    countryInfo.insertAdjacentHTML(
      'beforeend',
      data.map(murckupForCountry).join('')
    );
  }
}

function removeMarkup() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}
