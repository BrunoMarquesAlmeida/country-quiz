import { Component, Input } from '@angular/core';

export enum btnTypes {
  normal,
  correct,
  incorrect,
}

@Component({
  standalone: true,
  selector: 'answer-btn',
  templateUrl: './answer-btn.component.html',
  styleUrls: ['./answer-btn.component.scss'],
})
export class AnswerBtnComponent {
  @Input() btnType: btnTypes = btnTypes.normal;
}
