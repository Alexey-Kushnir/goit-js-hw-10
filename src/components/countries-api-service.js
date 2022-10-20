import Notiflix from 'notiflix';
const FILTER = 'fields=name,capital,population,flags,languages';

export default class CountriesApiService {
  constructor() {
    this.searchQuery = '';
  }

  fetchCountries() {
    const url = `https://restcountries.com/v3.1/name/${this.searchQuery}?${FILTER}`;

    if (this.searchQuery === '') {
      return;
    }
    return fetch(url).then(response => {
      if (!response.ok) {
        // throw new Error(
        //   Notiflix.Notify.failure('Oops, there is no country with that name')
        // );
        Notiflix.Notify.failure('Oops, there is no country with that name');
      }
      return response.json();
    });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
