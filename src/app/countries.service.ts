import { Injectable } from '@angular/core';

import { CountryDetails } from './country-details';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  readonly url = 'https://restcountries.com/v3.1/all?fields=name,capital,flags';

  async getCountries(): Promise<CountryDetails[]> {
    const countriesList = await fetch(this.url);
    return (await countriesList.json()) ?? [];
  }

  constructor() {}
}
