import { Component, Input, OnChanges } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

import {
  AnswerBtnComponent,
  btnTypes,
} from '../answer-btn/answer-btn.component';

import { CountryDetails } from '../country-details';

@Component({
  standalone: true,
  imports: [AnswerBtnComponent, NgIf, NgFor],
  selector: 'app-quiz-box',
  templateUrl: './quiz-box.component.html',
  styleUrls: ['./quiz-box.component.scss'],
})
export class QuizBoxComponent implements OnChanges {
  btnTypes = btnTypes;

  // get a list of all countries and select 4 to be a part of the quiz
  @Input() countriesList: CountryDetails[] = [];
  countriesLoaded: boolean = false;
  selectedCountries: CountryDetails[] = [];

  // initialize quiz params
  questionType: number = Math.random() >= 0.5 ? 1 : 0;
  correctAnswer: number = Math.floor(Math.random() * 4);
  userSelectedAnswer: number | null = null;

  answerClick: Function = (answerIndex: number): void => {
    if (this.userSelectedAnswer !== null) {
      return;
    }

    if (answerIndex === this.correctAnswer) {
      this.answerBtnTypes[answerIndex] = btnTypes.correct;
    } else {
      this.answerBtnTypes[answerIndex] = btnTypes.incorrect;
      this.answerBtnTypes[this.correctAnswer] = btnTypes.correct;
    }

    this.userSelectedAnswer = answerIndex;
  };

  answerBtnTypes: btnTypes[] = [
    btnTypes.normal,
    btnTypes.normal,
    btnTypes.normal,
    btnTypes.normal,
  ];

  ngOnChanges(): void {
    // selects 4 random countries to be a part of the quiz
    if (this.countriesList.length > 0) {
      const grabBag: CountryDetails[] = [...this.countriesList];

      for (let i: number = 1; i <= 4; i++) {
        const randomCountryIndex: number = Math.floor(
          Math.random() * grabBag.length
        );
        const randomCountry: CountryDetails = grabBag.splice(
          randomCountryIndex,
          1
        )[0];

        this.selectedCountries = [...this.selectedCountries, randomCountry];
      }

      this.countriesLoaded = true;
    }
  }
}
