export default function murckupForCountry(data) {
  const langList = Object.values(data.languages);

  return `<div class="country-info__name-flag">
  <img
    src="${data.flags.svg}"
    alt="flag"
    width="30"
    height="30"
    class="country-info__img"
  /><span class="country-info__name">${data.name.official}</span>
</div>
<ul class="country-info__list">
  <li class="country-info__item">
    <p class="country-info__text">
      Capital:
      <span class="country-info__text-description">${data.capital}</span>
    </p>
  </li>
  <li class="country-info__item">
    <p class="country-info__text">
      Population:
      <span class="country-info__text-description">${data.population}</span>
    </p>
  </li>
  <li class="country-info__item">
    <p class="country-info__text">
      Languages:
      <span class="country-info__text-description">${langList}</span>
    </p>
  </li>
</ul>`;
}
