export default function murkupForCountries(data) {
  return `<li class="country-list__item">
  <img
    src="${data.flags.svg}"
    alt="flag"
    width="30"
    height="30"
    class="country-list__img"
  /><span class="country-list__name">${data.name.official}</span>
</li>`;
}
