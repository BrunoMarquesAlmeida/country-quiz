import { Component, inject, OnInit } from '@angular/core';

import { QuizBoxComponent } from './quiz-box/quiz-box.component';

import { CountriesService } from './countries.service';

import { CountryDetails } from './country-details';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuizBoxComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  countriesList: CountryDetails[] = [];
  countriesService: CountriesService = inject(CountriesService);

  ngOnInit(): void {
    this.countriesService
      .getCountries()
      .then((countriesList: CountryDetails[]) => {
        this.countriesList = countriesList;
      });
  }
}
