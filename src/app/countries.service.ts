import { Injectable } from '@angular/core';

import { CountryDetails } from './country-details';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  readonly url = 'https://restcountries.com/v3.1/all?fields=name,capital,flag';

  async getCountries() {
    const countriesList = await fetch(this.url).then((response) =>
      response.json()
    );

    return [...countriesList];
  }

  constructor() {}
}
