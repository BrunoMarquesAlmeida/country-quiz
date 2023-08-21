import { Component } from '@angular/core';

import { AnswerBtnComponent } from './answer-btn/answer-btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AnswerBtnComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'country-quiz';
}
