import { Component } from '@angular/core';

import {
  AnswerBtnComponent,
  btnTypes,
} from './answer-btn/answer-btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AnswerBtnComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  type: btnTypes = btnTypes.correct;
  onClick: Function = () => console.log('click!');
  btnIndex: number = 0;
  btnText: string = 'button text';
}
