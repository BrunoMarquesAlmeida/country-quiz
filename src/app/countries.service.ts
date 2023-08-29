import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  readonly url = 'https://restcountries.com/v3.1/all?fields=name,capital,flag';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getCountries() {
    return this.http.get(this.url);
  }
}
