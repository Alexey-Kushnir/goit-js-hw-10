import Notiflix from 'notiflix';
const BASE_URL = 'https://restcountries.com/v3.1/name';
const FILTER = 'fields=name,capital,population,flags,languages';

export default class CountriesApiService {
  constructor() {
    this.searchQuery = '';
  }

  fetchCountries() {
    const url = `${BASE_URL}/${this.searchQuery}?${FILTER}`;

    if (this.searchQuery === '') {
      return;
    }
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          // throw new Error(
          //   Notiflix.Notify.failure('Oops, there is no country with that name')
          // );
          Notiflix.Notify.failure('Oops, there is no country with that name');
        }
        return response.json();
      })
      .catch(error => console.log(error));
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
