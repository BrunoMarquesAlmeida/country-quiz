import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  AnswerBtnComponent,
  btnTypes,
} from './answer-btn/answer-btn.component';

import { CountryDetails } from './country-details';

import { CountriesService } from './countries.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AnswerBtnComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  type: btnTypes = btnTypes.normal;
  onClick: Function = () => console.log('click!');
  btnIndex: number = 0;
  btnText: string = 'button text';

  countriesList: any = [];
  countriesService: CountriesService = inject(CountriesService);

  constructor() {
    this.countriesList = this.countriesService.getCountries();

    console.log(this.countriesList);
  }
}
